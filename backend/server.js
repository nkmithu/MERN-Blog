const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require ('cors');

require('dotenv').config();

//import routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

//app
const app =express();

//db
mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser:true, useCreateIndex:true, useFindAndModify:false})
.then(()=>console.log("db connected"));

//middleWares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors 
if(process.env.NODE_ENV == 'development'){
   app.use(cors({origin: `${process.env.CLIENT_URL}`})); 
}

//route middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);



//routs
app.get('/api', (req,res)=>{
    res.json({time: Date().toString()})
})

//Port
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is connected with ${port}`)
});



