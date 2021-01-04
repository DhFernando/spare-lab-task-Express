const Product = require('../models/product')

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
    const newProduct = new Product(req.body)
    try{
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