const express = require('express')
const router = express.Router()

// import user functions
const user = require('../controllers/user.js')

// user routes

router.get('/'  ,user.getUsers )
router.post('/' , user.addUser )
router.get('/:uuid' , user.getUser)
router.delete('/:uuid' , user.deleteUser)


module.exports = router 
 