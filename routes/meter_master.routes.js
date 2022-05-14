const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/meter_master.controller');


router.route('/meter_data').post(getAll);

// router.route('/login').post(login);
// router.route('/forgotpassword').post(forgotpassword);
// router.route('/resetpassword/:resetToken').put(resetpassword)s;

module.exports=router;