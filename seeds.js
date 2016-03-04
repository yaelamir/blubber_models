var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

Thread.remove({}, function(err, results) {
  User.remove({}, function(err, results) {
    if (err) console.log(err);

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
      ], function(err, users) {
        if (err) console.log(err);

        var john = users[0];
        var thur = users[2];
      //console.log(users[0]._id); //just users id
      //console.log(users[0]); //shows user
      //console.log(users); //all users

      // create threads
        Thread.create([
            {
              name: "YOLO",
              creator: john,
              creatorName: john.name
            },
            {
              name: "Think Different",
              creator: thur,
              creatorName: thur.name
            }
          ],
          function(err, thread) {
            if (err) console.log(err);
            console.log(thread);

            mongoose.connection.close();
          });
      });
    });
});


