/* eslint-disable require-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class PasswordHash {
    async hash(password) {
      throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
    }
  
    async comparePassword(plain, encrypted) {
      throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
    }
  }
  
  module.exports = PasswordHash;
  