const express = require('express')
const router = express.Router()

router.use('/api/v1/cars', require('./cars.routes'))

module.exports = router
