var express = require('express');
var router = express.Router();

const { boat } = require('../model');
const { promisify } = require('util')

router.post('/', async function(req, res, next) {
    try {
        const id = boat.uid();
        await promisify(boat.create)(id, req.body.data);
        return res.status(201).send({ id });
    } catch (e) {
        return res.status(e.code === 'E_NOT_FOUND' ? 405 : 500).end();
    }
});

router.get('/:id', async function(req, res, next) {
  const { id } = req.params;
    try {
        return res.send(await promisify(boat.read)(id));
    } catch (e) {
        return res.status(e.code === 'E_NOT_FOUND' ? 404 : 500).end();
    }
});

router.delete('/:id', async function(req, res, next) {
    const { id } = req.params;
    try {
        await promisify(boat.del)(id);
        return res.status(204).end();
    } catch (e) {
        return res.status(e.code === 'E_NOT_FOUND' ? 404 : 500).end();
    }
});

module.exports = router;
