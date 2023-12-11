'use strict'
const User = require('./user') //require the model
const Post = require('./post') 
const Comment = require('./comment') 
const Like = require('./like') 

async function init() {
 await User.sync(); //sync the model
 await Post.sync();
 await Comment.sync();
 await Like.sync();
};

init();

// we can define our own foreign key column names in options
// Post.belongsTo(User, { foreignKey: 'user_id' });
// User.hasMany(Post, { foreignKey: 'user_id' }); 

// if we leave out the second argument, Sequelize will auto-generate foreign key column names
Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User)
User.hasMany(Comment);

Like.belongsTo(User)
User.hasMany(Like);

Comment.belongsTo(Post)
Post.hasMany(Comment)

Like.belongsTo(Post)
Post.hasMany(Like)

module.exports = {
 User, 
 Post,
 Comment,
 Like
};







