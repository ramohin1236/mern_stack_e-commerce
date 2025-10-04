const express = require('express')
const { userRegistration, userLogin } = require('./user.controller')
const router = express.Router()

// register endpoint
router.post('/register', userRegistration)

// login endpoint
router.post('/login', userLogin)

module.exports = router