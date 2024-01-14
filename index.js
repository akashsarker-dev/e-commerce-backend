const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()
const dbConection = require('./config/dbConection')
const route = require('./route')

dbConection()
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})