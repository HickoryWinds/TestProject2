// require necessary npm packages
var express = require("express");
var session = require("express-session");
// passport required as configured
var passport = require("./config/passport");

// set up port and require models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// create express app and configure middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// use sessions to keep track of user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// requiring routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// sync database and log message to user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
