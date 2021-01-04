const User = require('../models/User')

 const getUsers = async (req, res)=>{
    try{
        const users = await User.find() 
        res.send( users )
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const addUser = async(req , res)=>{ 
    const newUser = new User(req.body)
    try{
        const addedUser = await newUser.save()
        res.status(201).json(addedUser)
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const getUser = async (req , res)=>{
    const { uuid } = req.params
    
    try{ 
        user = await User.findById(uuid)
        res.status(201).json(user)
    }catch(err){
        res.status(500).json( {message : "Not found"} )
    }
}

const deleteUser = async (req , res)=>{
    const { uuid } = req.params
    try{
        user = await User.findById(uuid)
        if(user != null){
            await User.remove(user);
            res.status(201).json({ success : true })
        }else{
            res.status(404).json( {message : "Not found"} )
        }
    }catch(err){
        res.status(500).json( {message : "Server Error"} )
    }
}
 

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    getUser
};