var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

// Thread.find(); // to find a thread
// findOne finds one. obvi
// Thread.findOne({}, function(err, thread) {
//   console.log(thread);

//   User.findById(thread.creator, function(err, user) {
//     console.log(user);
//   });
// }); // to find all thread



Thread.find({}).populate("creator").exec(function(err, threads) {
  if (err) console.log(err);
  console.log(threads);
  mongoose.connection.close();
});
