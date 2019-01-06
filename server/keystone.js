var keystone = require('keystone');
var engine = require('ejs-locals');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'my-project',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'views': 'templates/views',
  'custom engine': engine,
  'view engine': 'ejs',
  'static' : 'static'
});

keystone.import('models');

keystone.set('routes', require('./routes'));

keystone.start();