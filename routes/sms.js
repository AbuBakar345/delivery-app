const express = require('express');
const router = express.Router();
const smsController = require('../controllers/sms');

router.get('/api/tcs/track', smsController.trackTCSPackage);

module.exports = router;
