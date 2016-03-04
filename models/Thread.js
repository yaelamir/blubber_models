var mongoose = require("mongoose");

var threadSchema = new mongoose.Schema({
  name:        {
                type: String,
                required: true
               },
  creator:     {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
               },
  creatorName: String
});

var Thread = mongoose.model(
                            "Thread",
                            threadSchema
                            );

module.exports = Thread;
