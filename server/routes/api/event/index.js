var keystone = require('keystone');
var Event = keystone.list('Event').model;
var handlers = {
    getEvents: function (req, res) {
        Event.find().exec(function (err, data) {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }
            res.status(200).send(data);
        });
    }
}

module.exports = handlers;