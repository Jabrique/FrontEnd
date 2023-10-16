const { ForbiddenError } = require('../../commons/exceptions');

class CollaborationsHandler {
  constructor(CollaborationsValidator, collaborationsService, playlistsService, usersService) {
    this._collaborationService = collaborationsService;
    this._playlistsService = playlistsService;
    this._usersService = usersService;
    this._validator = CollaborationsValidator;
  }

  async postCollaborationHandler(request, h) {
    this._validator.validateCollaborationsPayload(request.payload);
    const { userId: ownerId } = request.auth.credentials;
    const { playlistId, userId } = request.payload;

    await this._usersService.verifyUserExist(userId);

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, ownerId);

    if (isOwnedPlaylist) {
      throw new ForbiddenError('playlist bukan milikmu');
    }

    const collaborationId = await this._collaborationService.addCollaborator({
      playlistId,
      userId,
    });

    const response = h.response({
      status: 'success',
      data: {
        collaborationId,
      },
    });
    response.code(201);
    return response;
  }

  async deleteCollaborationHandler(request) {
    this._validator.validateCollaborationsPayload(request.payload);
    const { userId: ownerId } = request.auth.credentials;
    const { playlistId, userId } = request.payload;

    const isOwnedPlaylist = await this._playlistsService.isPlaylistOwnedBy(playlistId, ownerId);

    if (isOwnedPlaylist) {
      throw new ForbiddenError('playlist bukan milikmu');
    }

    await this._collaborationService.removeCollaborator(playlistId, userId);

    return {
      status: 'success',
      message: 'Kolaborator berhasil dihapus',
    };
  }
}

module.exports = CollaborationsHandler;
