require('dotenv').config()

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const authentication = async(req , res) => {
    console.log(req)
    try{ 
        
        user = await User.findOne({ username : req.body.username })
        
        console.log(user)

        if( await bcrypt.compare(  req.body.password , user.password  ) ){
       
             const accessToken = jwt.sign( {
                name : req.body.username,
                _id : user._id
            } , "123456789" )
            
            res.status(201).json({
                token : accessToken
            })

        }else{
            console.log("dd");
            res.status(500).json( {message : "wrong pass"} )
        }
        
    }catch(err){
        console.log("ddxx");
        res.status(500).json( {message : "Not foundss"} )
    }
}

// validate jwt
const authenticateToken = async(req , res , next) => {
    const autHeader = req.headers['authorization']

    if( autHeader == null ) return res.status(401).json( { message : "no token" } )
    const token = autHeader.split(' ')[1]
    if( token == null ) return res.status(401).json( { message : "token isse" } )

    jwt.verify(token , "123456789" , ( err , user ) => {
        if(err) return res.status(401).json( { message : "invalid token" } )
        req.user = user
        next()
    })
}


const register = async(req , res)=>{ 
    
    let user = req.body;

    // password hash
    user.password = await bcrypt.hash( req.body.password  , 10)

    const newUser = new User(user)

    try{
        const addedUser = await newUser.save()
        res.status(201).json(addedUser)
    }catch(err){
        res.status(400).json( {message : "Server Error" } )
    }
}

const getUsers = async (req, res)=>{
    try{
        const users = await User.find() 
        res.send( users )
        
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
    register,
    deleteUser,
    getUser,
    authentication,
    authenticateToken
};