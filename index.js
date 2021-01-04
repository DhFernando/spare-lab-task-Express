const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/user.js')

const url = 'mongodb://localhost/cruddb'

const app = express()
const PORT = 2000
app.use(bodyParser.json())

mongoose.connect(url , { useNewUrlParser : true ,  useUnifiedTopology: true })
const con = mongoose.connection

con.on('open' , ()=> console.log( 'Connected to DB' ))


app.use('/user' , usersRoutes )

app.get('/' , (req,res)=>{
    res.send('Hello Express')
})
 
app.listen(PORT , ()=>{
    console.log(`start api localhost:${PORT}`)
})
