const userSchema = require("../models/userSchema")

async function userDetails(req, res) {
    const data = await userSchema.findOne({})
    res.json(data)
}

module.exports = {userDetails}