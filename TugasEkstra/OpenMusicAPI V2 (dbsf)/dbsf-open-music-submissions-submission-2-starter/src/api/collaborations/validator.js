const Joi = require('joi');
const InvariantError = require('../../commons/exceptions');

const CollaborationsValidator = {
  validateCollaborationsPayload: (payload) => {
    const schema = Joi.object({
      playlistId: Joi.string().required(),
      userId: Joi.string().required(),
    });
    const validationResult = schema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
