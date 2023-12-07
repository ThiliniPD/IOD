const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
 //commentID: { type: Integer, trim: true, required: true},
 postID: { type: mongoose.Schema.Types.ObjectId, ref: 'post'}, // foreign key
 userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}, // foreign key
 content: {type: String, trim: true, required: true},
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("comment", commentSchema);