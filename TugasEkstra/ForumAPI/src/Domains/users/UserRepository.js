/* eslint-disable require-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class UserRepository {
    async addUser(registerUser) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    async verifyAvailableUsername(username) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    async verifyUserExists(id) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    async getPasswordByUsername(username) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    async getIdByUsername(username) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  }
  
  module.exports = UserRepository;
  