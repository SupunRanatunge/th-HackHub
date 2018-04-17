// var fs = require('fs');
// var config = JSON.parse(fs.readFileSync("./../config.json"));
// var nodemailer = require('nodemailer');
// const express = require("express");
// const router = express.Router();
//
// router.post('/sendEmail',(req, res, next) => {
//     var user = req.body.user;
//     var users = req.body.users;
//     console.log(user);
//     console.log(users);
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         secure: false,
//         port: 25,
//         auth: {
//             user: user.email,
//             pass: config.password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
//     for (usr in users) {
//         console.log(usr)
//     }
//     let HelperOptions = {
//         from: user.name,
//         to: 'supunranatunge7@gmail.com',
//         subject: 'Hello HackHub users!!',
//         text: 'HackHub mailing is working!!!'
//
//     };
//     transporter.sendMail(HelperOptions, (error, info) => {
//         if (error) {
//             console.log(error)
//         }
//         console.log("The message was sent")
//         console.log(info)
//     });
// })



