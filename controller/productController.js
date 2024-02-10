function productController(req,res) {
    console.log(req.headers.authorization.split('@'));
}

module.exports = productController