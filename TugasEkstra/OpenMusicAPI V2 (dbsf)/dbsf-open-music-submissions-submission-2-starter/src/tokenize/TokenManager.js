const Jwt = require('@hapi/jwt');
const { config } = require('../commons/config');
const { InvariantError } = require('../commons/exceptions');

class TokenManager {
  constructor() {
    this._jwt = Jwt.token;
  }

  generateAccessToken(payload) {
    /**
     * 2. @TODO
     * kembalikan fungsi generateAccessToken dengan memanggil fungsi
     * generate dari this._jwt dengan parameter payload dan secretKey dari
     * config.jwtToken.accessToken.key
     *
     * Referensi: https://www.dicoding.com/academies/271/tutorials/17671
     */

    return this._jwt.generate(payload, config.jwtToken.accessToken)

  }

  generateRefreshToken(payload) {
    return this._jwt.generate(payload, config.jwtToken.refreshToken.key);
  }

  verifyRefreshToken(refreshToken) {
    try {
      const artifacts = this._jwt.decode(refreshToken);
      this._jwt.verifySignature(artifacts, config.jwtToken.refreshToken.key);
      const { payload } = artifacts.decoded;
      return payload;
    } catch (error) {
      throw new InvariantError('refresh token tidak valid');
    }
  }
}

module.exports = TokenManager;
