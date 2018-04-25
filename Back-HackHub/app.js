const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport2 = require("passport");

const mongoose = require("mongoose");
const config = require("./config/database");
const users = require("./routes/users");
const admins= require("./routes/admins");
const hackathons = require("./routes/hackathons");
const events = require("./routes/events");
const teams = require("./routes/teams");

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


app.use(passport2.initialize());
app.use(passport2.session());


require("./config/passport")(passport2);


app.use(express.static(path.join(__dirname,'HackHub-Client/src')));
app.use('/users', users);
app.use('/hackathons', hackathons);
app.use('/events', events);
app.use('/admins', admins);
app.use('/teams', teams);



app.listen(port, () => {
  console.log("Server on port: "+port);

});


