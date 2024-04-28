const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()
const dbConection = require('./config/dbConection')
const route = require('./route')
var cors = require('cors')

app.use(cors())

dbConection()
app.use(route)

const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})