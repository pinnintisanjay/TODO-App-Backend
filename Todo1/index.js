const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const todoRoutes=require('./routes/todo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app=express();
dotenv.config();
const PORT=process.env.PORT;
const DATABASE_URL=process.env.DATABASE_URL;
app.use(express.json());
app.use(bodyParser.json());


app.get('/',(req,res)=>res.json({'message':'server is running'}));

app.use('/todo',todoRoutes);

mongoose.connect(DATABASE_URL,{useNewUrlParser: true})
.then(()=>{
    console.log('Database connection successfull');
    app.listen(PORT,()=>console.log(`server is running at${PORT}`));
})
.catch((err)=>{
    console.log('Database connection failed');
    console.log(err);
})

