const eventRoutes = require('./event_routes');
const articleRoutes = require('./article_routes');
module.exports = function(app, db) {
  eventRoutes(app, db);
  articleRoutes(app, db);
};