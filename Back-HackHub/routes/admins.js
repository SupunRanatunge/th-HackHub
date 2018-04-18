const express = require("express");
const router = express.Router();
// const passportAdmin = require("passport");
const jwt = require("jsonwebtoken");
const config = require("./../config/database");

const Admin = require("./../models/admin");
var fs = require('fs');
var configure = JSON.parse(fs.readFileSync("./config.json"));
var nodemailer = require('nodemailer');

router.post('/register', (req, res, next) => {
    let newAdmin = new Admin({

        name: req.body.name,
        email: req.body.email,
        emailPassword: "",
        contact: req.body.contact,
        password: req.body.password,
        userType: 2
    });
    Admin.addAdmin(newAdmin, (err, admin) =>{
        if(err){
            res.json({success: false, msg: "failed to register"})
        }else{
            res.json({success: true, msg: "Admin registered"+ admin})
        }
    })
});

router.post('/authenticate', (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    Admin.getAdminByEmail(email, (err, admin) =>{
        if(err) throw err;
        if(!admin){
            return res.json({success:false, msg:'admin not found'})
        }
        Admin.comparePassword(password, admin.password, (err, isMatch) =>{
            if (err) throw err;
            if(isMatch){
                const token = jwt.sign(admin.toJSON(), config.secret,{

                    expiresIn: 604800 //1 week
                });

                res.json ({
                    success: true,
                    token:  token,
                    admin: {
                        id: admin._id,
                        name: admin.name,
                        email: admin.email,
                        contact: admin.contact,
                        userType: admin.userType

                    }
                });

            }
            else{
                return res.json({success: false, msg: "Wrong Password"});
            }
        });

    })
});

router.put('/addEmailPassword', (req, res, next) => {
    const email = req.body.email;
    console.log(email);

    console.log(req.body.email);
    Admin.findOneAndUpdate({email: email},
        {$set :{emailPassword: req.body.emailPassword}},

        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
});

router.post('/sendEmail',(req, res, next) => {
    console.log('jfnksdfjgksdjfgkdfjnkdfjnkfgnbkfjnjhdbfhsbjfhgbsjdfb')
    let user = req.body.user;
    let users = req.body.users;
    let email = req.body.emailDetails.email;
    let subject = req.body.emailDetails.subject;
    let i;
    // console.log(user+"inside admins");
    // console.log(user.name+"inside admins");
    // console.log(users+"inside admins");
    // console.log(email+"inside admins");
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: user.email,
            pass: user.emailPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    for (i=0; i< users.length; i++){
        if(users[i].isChecked == true){
            console.log(users[i].email+"inside for loop")
            let HelperOptions = {
                from: "HackHub"+ '<user.email>',
                to: users[i].email ,
                subject: subject,
                text: email

            };
            transporter.sendMail(HelperOptions, (error, info) => {
                if (error) {
                    console.log(error)
                }
                console.log("The message was sent")
                console.log(info)
                res.json(info)


            });
        }

    }


});


// router.get('/profile', passportAdmin.authenticate('jwt',{ session: false}), (req, res, next) => {
//
//     res.json({admin: req.admin});
//
//
// });
module.exports = router;