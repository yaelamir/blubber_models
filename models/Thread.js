var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  author:   {
             type: mongoose.Schema.Types.ObjectId,
             ref: "User"
            },
  body:     String,
  comments: [this]
  // upvotes: { type: Number, default: 0}
});

var postSchema = new mongoose.Schema({
  author:   {
             type: mongoose.Schema.Types.ObjectId,
             ref: "User"
            },
  title:    { type: String, required: true },
  body:     { type: String, required: true },
  upvotes:  { type: Number, default: 0},
  comments: [commentSchema]
});

var threadSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  creator:     {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
               },
  creatorName: String,
  posts:       [postSchema]
});






// Model Definition
var Thread = mongoose.model(
  "Thread",
  threadSchema
  );






module.exports = Thread;
