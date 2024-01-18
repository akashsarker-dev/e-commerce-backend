const nodemailer = require("nodemailer");

async function sendEmail(email, subject, templete) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {

          user: "akashsarkeronline@gmail.com",
          pass: "zbihqqqshxpcbfda",
        },
      });

      const info = await transporter.sendMail({
        from: '"Orebi-ecommerce', 
        to: email,
        subject: subject,
        html: templete,
      });
}
module.exports = sendEmail