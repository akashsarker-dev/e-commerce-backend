const express = require('express')
const router = express.Router()

const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'techv66713e305910b'
const store_passwd = 'techv66713e305910b@ssl'
const is_live = false 

router.post('/sslcommerz', (req, res) => {
    const {firstName , lastName, email, phone, address, city, state, postalCode, country} = req.body
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: 'http://localhost:5173/successmessage',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: "phone",
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: "country",
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        // res.redirect(GatewayPageURL)
        // console.log('Redirecting to: ', GatewayPageURL)
        const url = GatewayPageURL.split('/')[GatewayPageURL.split('/').length - 1]
        

        res.json({url})

    });
})


module.exports = router