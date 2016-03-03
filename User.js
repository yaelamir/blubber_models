var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

// SCHEMA
var userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  // password:  String,
  moderator: { type: Boolean, default: false }
});
// MODEL
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, results) {
  User.create([
    {
      name: "John Marshal",
      email: "jm@us.courts.gov",
      moderator: true
    },
    {
      name: "Oliver Wendell Holmes Jr",
      email: "owh2@us.courts.gov",
      moderator: false
    },
    {
      name: "Thurgood Marshall",
      email: "tm@us.courts.gov",
      moderator: false
    },
    {
      name: "Sandra Day O'Connor",
      email: "sdo@us.courts.gov",
      moderator: false
    }
    ], function(err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    mongoose.connection.close();
  });
});



