var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User"),
    Thread = require("./models/Thread");

// Thread.find(); // to find a thread
Thread.find({}, function(err, threads) {
  console.log(threads);

  mongoose.connection.close();
}); // to find all thread
