const express = require('express')
const router = express.Router()

// import user functions
const user = require('../controllers/user.js')

// user routes

router.post('/authentication' , user.authentication)
router.post('/' , user.register )

router.get('/'  ,user.getUsers )
router.get('/:uuid' , user.getUser)
router.delete('/:uuid' , user.deleteUser)


module.exports = router 
 