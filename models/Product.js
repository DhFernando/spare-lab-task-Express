const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({ 
    name : { type : String , required : true },
    description : { type:String },
    quantity : { type : Number }, 
    userId : { type:String , required : true}
})

module.exports = mongoose.model('Product' , productSchema )