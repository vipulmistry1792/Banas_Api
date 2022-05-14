const express = require('express');
const router = express.Router();
const meterData = require('../services/meter_data.service');
router.post('/', meterhistory);
router.post('/monthwise', monthwiseenergy);
router.post('/daywise', daywiseenergy);
router.post('/faulthistory', faulthistory);
router.post('/faultsummary', faultsummary);
router.post('/faultsummarybyequipment', faultsummarybyequipment);
router.post('/usedEnergy', UsedEnergy);
router.post('/currentmonthdata', currentmonthdata);
router.post('/dghistory', dghistory);
router.post('/dgcon', dgConsumption);
module.exports = router;
function meterhistory(req, res, next) {
    meterData.meterhistory(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function daywiseenergy(req, res, next) {
    meterData.MeterDataDaywise(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function monthwiseenergy(req, res, next) {
    meterData.MonthlyData(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function faulthistory(req, res, next) {
    meterData.FaultHistory(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function faultsummary(req, res, next) {
    meterData.FaultSummary(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function faultsummarybyequipment(req, res, next) {
    meterData.FaultbyequipmentSummary(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function UsedEnergy(req, res, next) {
    meterData.ConsumptionEnergy(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function currentmonthdata(req, res, next) {
    meterData.ThisMonthData(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function dghistory(req, res, next) {
    meterData.dghistory(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}
function dgConsumption(req, res, next) {
    meterData.Dgconsumption(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}

