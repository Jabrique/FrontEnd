/* eslint-disable class-methods-use-this */
class Comment {
    constructor(payload) {
      this._verifyPayload(payload);
  
      this.id = payload.id;
      this.username = payload.username;
      this.date = payload.date;
      this.content = payload.is_delete === 'true' ? '**komentar telah dihapus**' : payload.content;
      this.likeCount = Number(payload.count);
    }
  
    _verifyPayload(payload) {
      const {
        id, username, date, content, is_delete: isDelete, count,
      } = payload;
  
      if (!id || !username || !date || !content || !isDelete || !count) {
        throw new Error('COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
      }
  
      if (
        typeof id !== 'string'
        || typeof username !== 'string'
        || typeof date !== 'string'
        || typeof content !== 'string'
        || typeof isDelete !== 'string'
        || typeof count !== 'string'
      ) {
        throw new Error('COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
      }
    }
  }
  
  module.exports = Comment;
  