// import nodemailer module
const nodemailer = require("nodemailer"); 

// nodemailer modülünden createTransport methodu ile maili göndereceğimiz mail adresi bilgilerini tanımla
const transporter = nodemailer.createTransport({
    service: "gmail", // which mail services
    auth: { 
        user: "sendermail@gmail.com", // user mail or username
        pass: "***" // app password not account password
    }
});

// sender and receiver mail information
const mailOptions = {
    from: "sendermail@gmail.com",
    to: "reciever@hotmail.com",
    subject: "Nodemailer Test",
    text: "Test sending Gmail using NodeJS"
};

// using sendMail method for sending mail from transporter
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: " + info.response);
    }
});