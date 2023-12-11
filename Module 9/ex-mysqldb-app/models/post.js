const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Post.init({
 postId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
 },
 title: {
    type: DataTypes.STRING, allowNull: false, required: true
 },
 description: {
    type: DataTypes.STRING, allowNull: false
 },
 imageUrl: {
    type: DataTypes.STRING, allowNull: false
 }
//,userId: {
//   type: DataTypes.INTEGER, references: {model: User, key: 'id'}, required: true
//} 
},
{
sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
timestamps: true, freezeTableName: true
})

module.exports = Post;


