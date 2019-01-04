var keystone = require('keystone');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'event';

    var Event = keystone.list('Event').model;

    Event.find().exec(function(err, data) {
        locals.events = data;
        console.log(data)
    })

    view.render('index', {
        events: locals.events
    });
}

// module.exports = function (req, res) {
//     var Event = keystone.list('Event').model;
//     var Announcement = keystone.list('Announcement').model;
//     view.query('currentEvent', User.model.findOne({ name: req.body.name }));

//     res.render('index');
// };