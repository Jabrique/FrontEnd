const { nanoid } = require('nanoid');
const { pool } = require('./pool');
const { InvariantError, NotFoundError } = require('../../commons/exceptions');

class PlaylistsService {
  constructor(collaborationService) {
    this._pool = pool;
    this._collaborationService = collaborationService;
  }

  async persistPlaylist({ name, owner }) {
    const id = `playlist-${Date.now()}`;

    const query = {
      text: 'INSERT INTO playlists VALUES($1, $2, $3) RETURNING id',
      values: [id, name, owner],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new Error('Playlist gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getPlaylists(ownerId) {
    const query = {
      text: 'SELECT playlists.id, playlists.name, users.username FROM playlists LEFT JOIN users ON playlists.owner=users.id LEFT JOIN collaborations ON playlists.id=collaborations.playlist_id WHERE playlists.owner=$1 OR collaborations.user_id=$1',
      values: [ownerId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async isPlaylistOwnedBy(playlistId, owner) {
    const query = {
      text: 'SELECT * FROM playlists WHERE id = $1',
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }
    return result.rows[0].owner !== owner;
  }

  async verifyPlaylistAccess(playlistId, ownerId) {
    await this._collaborationService.verifyCollaborator(playlistId, ownerId);
  }

  async getPlaylistById(playlistId) {
    const query = {
      text: `SELECT playlists.id, playlists.name, users.username
      FROM playlists
      LEFT JOIN users ON users.id = playlists.owner
      WHERE playlists.id = $1`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('playlist tidak ditemukan');
    }

    return result.rows[0];
  }

  async getSongsByPlaylistId(playlistId) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.performer
      FROM playlists_songs
      LEFT JOIN songs ON songs.id = playlists_songs.song_id
      WHERE playlists_songs.playlist_id = $1`,
      values: [playlistId],
    };

    const { rows } = await this._pool.query(query);

    return rows;
  }

  async addSongToPlaylist(playlistId, songId) {
    const id = `playlistsongs-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO playlists_songs VALUES($1, $2, $3)',
      values: [id, playlistId, songId],
    };

    await this._pool.query(query);
  }

  async deleteSongFromPlaylist(playlistId, songId) {
    const query = {
      text: 'DELETE FROM playlists_songs WHERE playlist_id = $1 AND song_id = $2',
      values: [playlistId, songId],
    };

    await this._pool.query(query);
  }

  async deletePlaylistById(playlistId) {
    const query = {
      text: 'DELETE FROM playlists WHERE id = $1',
      values: [playlistId],
    };

    await this._pool.query(query);
  }

  async isSongExists(songId) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [songId],
    };

    const result = await this._pool.query(query);

    return !!result.rowCount;
  }

  async isPlaylistExists(playlistId) {
    const query = {
      text: 'SELECT * FROM playlists WHERE id = $1',
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    return !!result.rowCount;
  }

  async addActivity(playlistId, songId, userId) {
    const id = `activity-${nanoid(16)}`;
    const time = new Date().toISOString();
    const action = 'add';

    const userQuery = await this._pool.query({
      text: 'SELECT username FROM users WHERE id=$1',
      values: [userId],
    });

    const { username } = userQuery.rows[0];

    const songQuery = await this._pool.query({
      text: 'SELECT title FROM songs WHERE id=$1',
      values: [songId],
    });

    const { title } = songQuery.rows[0];

    await this._pool.query({
      text: 'INSERT INTO playlist_song_activities VALUES($1,$2,$3,$4,$5,$6)',
      values: [id, playlistId, title, username, action, time],
    });
  }

  async deleteActivity(playlistId, songId, userId) {
    const id = `activity-${nanoid(16)}`;
    const time = new Date().toISOString();
    const action = 'delete';

    const userQuery = await this._pool.query({
      text: 'SELECT username FROM users WHERE id=$1',
      values: [userId],
    });

    const { username } = userQuery.rows[0];

    const songQuery = await this._pool.query({
      text: 'SELECT title FROM songs WHERE id=$1',
      values: [songId],
    });

    const { title } = songQuery.rows[0];

    await this._pool.query({
      text: 'INSERT INTO playlist_song_activities VALUES($1,$2,$3,$4,$5,$6) RETURNING id',
      values: [id, playlistId, title, username, action, time],
    });
  }

  async getActivity(playlistId) {
    const result = await this._pool.query({
      text: 'SELECT * FROM playlist_song_activities WHERE Playlist_id=$1 ',
      values: [playlistId],
    });

    if (!result.rows.length) {
      throw new NotFoundError('playlist tidak ditemukan');
    }

    const activityMap = result.rows.map((row) => ({
      username: row.user_id,
      title: row.song_id,
      action: row.action,
      time: row.time,
    }));

    return activityMap;
  }
}

module.exports = PlaylistsService;
