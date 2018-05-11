const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("./../config/database");

const User = require("./../models/user");

router.post('/register', (req, res, next) => {
  let newUser = new User({

      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userType: 1,
      isChecked: false,
      subscribed: false,
      teamLeader: Array
  });
  User.addUser(newUser, (err, user) =>{
      if(err){
          res.json({success: false, msg: "failed to register"})
      }else{
          res.json({success: true, msg: "User registered"+ user})
      }
  })
});

router.post('/authenticate', (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'user not found'})
        }
        User.comparePassword(password, user.password, (err, isMatch) =>{
            if (err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret,{

                    expiresIn: 604800 //1 week
                });

                res.json ({
                    success: true,
                    token:  token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        userType: user.userType,
                        isChecked: user.isChecked,
                        subscribed: user.subscribed,
                        teamLeader: user.teamLeader

                    }
                });

            }
            else{
                return res.json({success: false, msg: "Wrong Password"});
            }
        });

    })
});

router.get('/profile', passport.authenticate('jwt',{ session: false}), (req, res, next) => {


    res.json({user: req.user});
});

router.get('/mailingList', (req, res, next) => {
    User.find({}, function (err, users) {
        if (err) {
            console.log(err)
        } else {
            res.send(users);
        }
    });


});

router.put('/updateStatus', (req, res, next) => {
    const email = req.body.email;
    console.log(email);

    console.log(req.body.email);
    User.findOneAndUpdate({email: email},
        {$set :{isChecked: req.body.isChecked}},

        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
});

router.put('/updateSubscribe', (req, res, next) => {
    const email = req.body.email;
    console.log(email);

    User.findOneAndUpdate({email: email},
        {$set :{subscribed: req.body.subscribed}},

        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
});

router.put('/updateUnsubscribe', (req, res, next) => {
    const email = req.body.email;
    console.log(email);

    User.findOneAndUpdate({email: email},
        {$set :{subscribed: req.body.subscribed}},

        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
});


module.exports = router;
