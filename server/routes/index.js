const eventRoutes = require('./event_routes');
const articleRoutes = require('./article_routes');
const userRoutes = require('./user_routes');
const investigationRoutes = require('./investigation_routes');
module.exports = function(app, db) {
  eventRoutes(app, db);
  articleRoutes(app, db);
  userRoutes(app, db);
  investigationRoutes(app, db);
};