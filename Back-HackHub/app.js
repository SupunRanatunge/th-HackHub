const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log("Connected to Database "+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log("Error in Database "+err);
});
const users = require("./routes/users");
const app = express();
const port = 3000;

//cors middleware
app.use(cors());

//body parser
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,'HackHub-Client/src')));
app.use('/users', users);



app.listen(port, () => {
  console.log("Server started on port: "+port);
});


