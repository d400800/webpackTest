var keystone = require('keystone');

module.exports = function (req, res) {
    var Event = keystone.list('Event').model;
    Event.find().exec(function (err, data) {
        res.render('event', {
            events: data
        });
    });
};