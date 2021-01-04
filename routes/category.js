const express = require('express')
const router = express.Router()

// import user functions
const category = require('../controllers/category')

// user routes

router.get('/:uuid'  ,category.getCategorys ) //---> get * categories by user
router.post('/:uuid' , category.addCategory ) //---> create category under the user
router.get('/:uuid/:categoryId' , category.getCategory) //---> get specific category under the user
router.delete('/:uuid/:categoryId' , category.deleteCategory) // 


module.exports = router 
 