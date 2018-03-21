import {require} from "./HackHub-Client/src/test";

const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const passportAdmin = require("passportAdmin");
const mongoose = require("mongoose");
const config = require("./config/database");
const users = require("./routes/users");
const admins= require("./routes/admins");
const hackathons = require("./routes/hackathons");
const events = require("./routes/events");

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log("Connected to Database "+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log("Error in Database "+err);
});

const app = express();
const port = 3000;

//cors middleware
app.use(cors());

//body parser
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(passportAdmin.initialize());
app.use(passportAdmin.session());

require("./config/passport")(passport);
require("./config/passportAdmin")(passportAdmin);

app.use(express.static(path.join(__dirname,'HackHub-Client/src')));
app.use('/users', users);
app.use('/hackathons', hackathons);
app.use('/events', events);
app.use('/admins', admins);



app.listen(port, () => {
  console.log("Server on port: "+port);

});


