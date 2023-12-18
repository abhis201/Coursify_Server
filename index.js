const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config('./.env');

const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

app.use('/admin',adminRouter)
app.use('/users',userRouter)

// Connect to MongoDB
const DB_NAME = 'courses'
mongoose.connect(process.env.PERS_DB_CONN + DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB');
})

app.get("/",(req,res)=>{
  res.send("Running Course App server!")
})

app.listen(port, console.log('Listening on http://localhost:3000'));
