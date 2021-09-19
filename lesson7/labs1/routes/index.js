const express = require('express');
const axios = require('axios');
const router = express.Router();

const { BOAT_SERVICE_PORT = 50925,  BRAND_SERVICE_PORT = 50926 } = process.env;
const boatSrv = `http://localhost:${BOAT_SERVICE_PORT}`
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`

/* GET home page. */
router.get('/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        if (+id !== Math.ceil(+id)) return res.status(400).end();
        const boat = await axios.get(boatSrv.concat('/', id), { method: 'GET', timeout: 1250 });
        const brand = await axios.get(brandSrv.concat('/', boat.data.brand), { method: 'GET', timeout: 1250 });

        const responsePayload = {
            id: boat.data.id,
            color: boat.data.color,
            brand: brand.data.name,
        }
        if (boat.status !== 200 || brand.status !== 200) throw new Error('Status not 200');
        return res.send(responsePayload).end();
    } catch (e) {
        if (e.response && e.response.status === 404) return res.status(404).end();
        if (e instanceof Error) return next(e);
    }
});

module.exports = router;
