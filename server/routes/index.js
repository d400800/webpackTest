var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
var middleware = require('./middleware');
var apiHandlers = require('./api/event');

var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api')
};

keystone.pre('routes', middleware.initLocals);
//keystone.pre('render', middleware.flashMessages);

exports = module.exports = function (app) {
    app.get('/', routes.views.index)
    app.get('/event', routes.views.event)
    app.get('/api/event', apiHandlers.getEvents)
};