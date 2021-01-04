const Category = require('../models/Category')

 const getCategorys = async (req, res)=>{
    const { uuid } = req.params
    try{
        const users = await Category.find().where( 'userId' , uuid )
        res.send( users )
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const addCategory = async(req , res)=>{ 
    const newCategory = new Category(req.body)
    try{
        const addedCategory = await newCategory.save()
        res.status(201).json(addedCategory)
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const getCategory = async (req , res)=>{
    const { uuid } = req.params
    
    try{ 
        category = await Category.findById(uuid)
        res.status(201).json(category)
    }catch(err){
        res.status(500).json( {message : "Not found"} )
    }
}

const deleteCategory = async (req , res)=>{
    const { uuid } = req.params
    try{
        category = await Category.findById(uuid)
        if(category != null){
            await Category.remove(category);
            res.status(201).json({ success : true })
        }else{
            res.status(404).json( {message : "Not found"} )
        }
    }catch(err){
        res.status(500).json( {message : "Server Error"} )
    }
}
 

module.exports = {
    getCategorys,
    addCategory,
    getCategory,
    deleteCategory
};