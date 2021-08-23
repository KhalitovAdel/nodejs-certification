var express = require('express');
var router = express.Router();

const { boat } = require('../model');
const { promisify } = require('util')

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  const { id } = req.params;
    try {
        return res.send(await promisify(boat.read)(id));
    } catch (e) {
        return res.status(e.code === 'E_NOT_FOUND' ? 404 : 500).end();
    }
});

module.exports = router;
