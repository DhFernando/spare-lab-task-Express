const express = require('express')
const router = express.Router()

// import user functions
const product = require('../controllers/product')

// user routes

router.get('/'  ,product.getProducts ) //---> get * categories by user
router.post('/' , product.addProduct ) //---> create category under the user
router.get('/:_id' , product.getProduct) //---> get specific category under the user
router.delete('/:_id' , product.deleteProduct) // 

module.exports = router 
 