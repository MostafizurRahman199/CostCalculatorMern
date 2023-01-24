const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const PORT = 4000;
const app = express();
app.use(cors());

mongoose.set('strictQuery', false);

 mongoose.connect("mongodb+srv://costMern:helpmeAllah199@costmern.aimqe7t.mongodb.net/?retryWrites=true&w=majority",{
    
useNewUrlParser: true,
useUnifiedTopology:true
})
.then(()=>{console.log('Connection is successful')})
.catch((err)=>{console.error(err)});

app.get('/',(req, res)=>{
    res.send("Hello");
})

app.listen(PORT,()=>{
    console.log(`The server is running from ${PORT}`);
})