const express = require('express')
const router = express.Router()

// import user functions
const category = require('../controllers/product')

// user routes

router.get('/:uuid'  ,product.getProducts ) //---> get * categories by user
router.post('/:uuid' , product.addProduct ) //---> create category under the user
router.get('/:uuid/:categoryId' , product.getProduct) //---> get specific category under the user
router.delete('/:uuid/:categoryId' , product.deleteProduct) // 

module.exports = router 
 