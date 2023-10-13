const CollaborationsHandler = require('./handler');
const routes = require('./routes');
const CollaborationsValidator = require('./validator');

const collaborations = {
  name: 'collaborations',
  register: async (server, {
    collaborationsService, playlistsService, usersService,
  }) => {
    const collaborationsHandler = new CollaborationsHandler(
      CollaborationsValidator,
      collaborationsService,
      playlistsService,
      usersService,
    );
    server.route(routes(collaborationsHandler));
  },
};

module.exports = collaborations;
