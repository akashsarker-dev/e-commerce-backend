const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv')

function dbConection() {

    mongoose.connect(process.env.MONGODBURI)
  .then(() => console.log('Connected!'));


}

module.exports = dbConection