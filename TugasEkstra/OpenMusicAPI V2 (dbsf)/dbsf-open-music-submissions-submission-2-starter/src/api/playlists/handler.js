const {
  ForbiddenError,
  NotFoundError,
} = require('../../commons/exceptions');

class PlaylistsHandler {
  constructor(validator, playlistsService) {
    this._validator = validator;
    this._playlistsService = playlistsService;
  }

  async postPlaylistHandler(request, h) {
    const { userId: owner } = request.auth.credentials;
    const { name } = this._validator.validatePostPlaylistPayload(request.payload);

    const playlistId = await this._playlistsService.persistPlaylist({ name, owner });

    const response = h.response({
      status: 'success',
      data: {
        playlistId,
      },
    });

    response.code(201);
    return response;
  }

  async getPlaylistsHandler(request) {
    const { userId } = request.auth.credentials;
    const playlists = await this._playlistsService.getPlaylists(userId);

    return {
      status: 'success',
      data: {
        playlists,
      },
    };
  }

  async postSongToPlaylistHandler(request, h) {
    const { playlistId } = request.params;
    const { songId } = this._validator.validatePostPlaylistSongPayload(request.payload);
    const { userId: owner } = request.auth.credentials;

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, owner);

    try {
      if (isOwnedPlaylist) {
        // 6. @TODO `throw` error ForbiddenError bila playlist tidak dimiliki oleh owner

        throw new ForbiddenError('playlist bukan milikmu');
      }
    } catch (error) {
      try {
        await this._playlistsService.verifyPlaylistAccess(playlistId, owner);
      } catch {
        throw error;
      }
    }

    const isSongExist = await this._playlistsService.isSongExists(songId);

    if (!isSongExist) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }

    await this._playlistsService.addSongToPlaylist(playlistId, songId);

    await this._playlistsService.addActivity(playlistId, songId, owner);

    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil ditambahkan ke playlist',
    });

    response.code(201);
    return response;
  }

  async getSongsInPlaylistHandler(request) {
    const { playlistId } = request.params;
    const { userId: owner } = request.auth.credentials;

    const isPlaylistExists = await this._playlistsService.isPlaylistExists(playlistId);

    if (!isPlaylistExists) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, owner);

    try {
      if (isOwnedPlaylist) {
        throw new ForbiddenError('playlist bukan milikmu');
      }
    } catch (error) {
      try {
        await this._playlistsService.verifyPlaylistAccess(playlistId, owner);
      } catch {
        throw error;
      }
    }

    const playlist = await this._playlistsService.getPlaylistById(playlistId);
    const songs = await this._playlistsService.getSongsByPlaylistId(playlistId);

    return {
      status: 'success',
      data: {
        playlist: {
          ...playlist,
          songs,
        },
      },
    };
  }

  async deleteSongFromPlaylistHandler(request) {
    const { playlistId } = request.params;
    const { songId } = this._validator.validatePostPlaylistSongPayload(request.payload);
    const { userId: owner } = request.auth.credentials;

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, owner);

    try {
      if (isOwnedPlaylist) {
        throw new ForbiddenError('playlist bukan milikmu');
      }
    } catch (error) {
      try {
        await this._playlistsService.verifyPlaylistAccess(playlistId, owner);
      } catch {
        throw error;
      }
    }

    await this._playlistsService.deleteSongFromPlaylist(playlistId, songId);

    await this._playlistsService.deleteActivity(playlistId, songId, owner);

    return {
      status: 'success',
      message: 'Lagu berhasil dihapus dari playlist',
    };
  }

  async deletePlaylistByIdHandler(request) {
    const { playlistId } = request.params;
    const { userId: owner } = request.auth.credentials;

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, owner);

    if (isOwnedPlaylist) {
      throw new ForbiddenError('Anda tidak berhak mengakses resource ini');
    }

    await this._playlistsService.deletePlaylistById(playlistId);

    return {
      status: 'success',
      message: 'Lagu berhasil dihapus dari playlist',
    };
  }

  async getPlaylistActivity(request) {
    const { playlistId } = request.params;
    const { userId: ownerId } = request.auth.credentials;

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, ownerId);

    try {
      if (isOwnedPlaylist) {
        throw new ForbiddenError('playlist bukan milikmu');
      }
    } catch (error) {
      try {
        await this._playlistsService.verifyPlaylistAccess(playlistId, ownerId);
      } catch {
        throw error;
      }
    }
    const activities = await this._playlistsService.getActivity(playlistId);

    return {
      status: 'success',
      data: {
        playlistId,
        activities,
      },
    };
  }
}

module.exports = PlaylistsHandler;
