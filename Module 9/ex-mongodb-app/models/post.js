const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
 //postID: { type: Integer, trim: true, required: true},
 title: {type: String, trim: true},
 description: {type: String, trim: true},
 imageUrl:  {type: String, trim: true},
 userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}, // foreign key
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);