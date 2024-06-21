const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()
const dbConection = require('./config/dbConection')
const route = require('./route')
var cors = require('cors')
// app.use(cors())

const corsOptions = {
  origin: 'https://e-commerce-backend-phi-eight.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

dbConection()
app.use(route)

const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


