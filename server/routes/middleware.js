exports.initLocals = function(req, res, next) {
    res.locals.navLinks = [
        { label: 'Home', key: 'home', href: '/' },
        { label: 'Event', key: 'event', href: '/event' },
    ]

    res.locals.user = req.user;
    next();
}