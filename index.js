const express = require('express')
const app = express()
const port = 3000
const dbConection = require('./config/dbConection')
const UserInfo = require('./models/userSchema')
require('dotenv').config()

app.use(express.json())
dbConection()
app.post('/registration', (req, res) => {
  const{firstname,lastname,email,telephone,address,city,postcode,division,district} = req.body

  console.log(req.body);

  const users = new UserInfo({
    firstname,
    lastname,
    email,
    telephone,
    address,
    city,
    postcode,
    division,
    district,
  })
  users.save()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})