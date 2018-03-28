const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const config = require("../config/database");
const Admin = require("../models/admin");


module.exports = function(passport1){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromHeader("authorization");
    opts.secretOrKey = config.secret;
    passport1.use(new JwtStrategy(opts, function(jwt_payload, done){


            User.getUserById(jwt_payload._id, (err, user) => {
                if(err){
                    return done(err, false);
                }
                if(user){
                    return done(null, user);
                }else{
                    Admin.getAdminById(jwt_payload._id, (err, admin) =>{
                        if(err){
                            return done(err, false);
                        }if(admin){

                            return done(null, admin);

                        }else{
                            return done(null, false);
                        }
                    })
                }
            });


    }));
};

