require('dotenv').config()

const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

    // user user
 const getProducts = async (req, res)=>{
    const { uuid } = req.params
    try{
        const products = await Category.find().where( 'userId' , uuid )
        res.send( products )
    }catch(err){
        res.status(500).json( {message : "Server Error" } )
    }
}

const addProduct = async(req , res)=>{ 

    // get user information that make request from jwt payload
    const token = req.headers['authorization'].split(' ')[1]
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {ignoreExpiration: true} )

    let product = req.body;
    product.userId = payload._id

    try{
        const newProduct = new Product(product)
        const addedProduct = await newProduct.save()
        res.status(201).json(addedProduct)
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const getProduct = async (req , res)=>{
    const { uuid } = req.params
    
    try{ 
        product = await Product.findById(uuid)
        res.status(201).json(product)
    }catch(err){
        res.status(500).json( {message : "Not found"} )
    }
}

const deleteProduct = async (req , res)=>{
    const { uuid } = req.params
    try{
        product = await Product.findById(uuid)
        if(product != null){
            await Product.remove(product);
            res.status(201).json({ success : true })
        }else{
            res.status(404).json( {message : "Not found"} )
        }
    }catch(err){
        res.status(500).json( {message : "Server Error"} )
    }
}
 

module.exports = {
    getProducts,
    addProduct,
    getProduct,
    deleteProduct
};