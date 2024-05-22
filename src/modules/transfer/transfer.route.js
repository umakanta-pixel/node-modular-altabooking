const router = require('express').Router();
const transferController = require('./transfer.controller')

router.post('/list', transferController.searchTransfers)

module.exports = router