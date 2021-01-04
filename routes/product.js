const express = require('express')
const router = express.Router()

// import user functions
const product = require('../controllers/product')
const user = require('../controllers/user')

// user routes

router.get('/'  , user.authenticateToken , product.getProducts ) //---> get * categories by user
router.post('/' , user.authenticateToken, product.addProduct ) //---> create category under the user
router.get('/:_id' , user.authenticateToken, product.getProduct) //---> get specific category under the user
router.delete('/:_id' , user.authenticateToken, product.deleteProduct) // 

module.exports = router 
 