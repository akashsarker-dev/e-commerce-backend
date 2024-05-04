function emailTemplete(token) {
    return `<div style="padding: 20px; background-color: rgba(0, 0, 0, 0.091);">
    <img src="https://i.ibb.co/kXvcJn9/OREBI.png" alt="OREBI.png" >
    <h1 style="font-size: 25px; color: cornflowerblue;">Welcome to Orebi-ecommerce-app</h1>
    <a style="padding: 15px 10px; margin-top: 20px; background-color: rgb(68, 114, 194); text-decoration: none; font-size: 18px; color: azure; border-radius: 10px;" href="http://localhost:3000/api/v1/athentication/emailverification/${token}">Click Me</a>
    </div>`
}
module.exports = emailTemplete
