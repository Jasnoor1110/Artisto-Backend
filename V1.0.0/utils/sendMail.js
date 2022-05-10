const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },

})

exports.sendEmail = async(receiver,otp)=>{ 
  let info = await transporter.sendMail({
    from: 'Artisto <noreply@artisto.com>', // sender address
    to: receiver, // list of receivers
    subject: "OTP", // Subject line
    text: `OTP for registration is ${otp}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}