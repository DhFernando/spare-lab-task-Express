require('dotenv').config()
const jwt = require('jsonwebtoken')

const express = require('express')
const router = express.Router()

// import user functions
const user = require('../controllers/user.js')

// user routes

router.post('/authentication' , user.authentication)
router.post('/' , user.register )

router.get('/'  , user.authenticateToken , user.getUsers )
router.get('/:uuid' , user.authenticateToken, user.getUser)
router.delete('/:uuid', user.authenticateToken , user.deleteUser)

module.exports = router 
 