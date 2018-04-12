const express = require("express");
const router = express.Router();
// const passportAdmin = require("passport");
const jwt = require("jsonwebtoken");
const config = require("./../config/database");

const Admin = require("./../models/admin");

router.post('/register', (req, res, next) => {
    let newAdmin = new Admin({

        name: req.body.name,
        email: req.body.email,
        emailPassword: "test",
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

// router.get('/profile', passportAdmin.authenticate('jwt',{ session: false}), (req, res, next) => {
//
//     res.json({admin: req.admin});
//
//
// });
module.exports = router;