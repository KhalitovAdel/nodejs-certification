var express = require('express');
var router = express.Router();
const stream = require('../stream');
var finished = require('stream').finished

router.get('/', function(req, res, next) {
    const { amount = 10, type = 'html' } = req.query

    const str = stream();
    str.pipe(res, {end: false})

    finished(str, (err) => {
        if (err) {
            next(err)
            return
        }
        res.end()
    })

});

module.exports = router;
