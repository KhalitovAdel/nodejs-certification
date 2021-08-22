var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var greeting = 'greeting' in req.query ?
        req.query.greeting :
        'Hello';
    res.render('layout', { greeting: greeting });
});

module.exports = router;
