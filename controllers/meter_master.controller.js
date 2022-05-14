const express = require('express');
const router = express.Router();
const meterService = require('../services/meter_master.service');
router.get('/', getAll);
module.exports = router;

function getAll(req, res, next) {
    meterService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

