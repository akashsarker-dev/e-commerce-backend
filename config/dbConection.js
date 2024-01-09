const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv')

function dbConection() {

    mongoose.connect('mongodb+srv://orebi-ecommerce:Orebi123@cluster0.zaulq0c.mongodb.net/orebi-ecommerce?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));


}

module.exports = dbConection