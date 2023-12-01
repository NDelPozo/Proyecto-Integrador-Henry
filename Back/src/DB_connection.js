require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
); 



UserModel(sequelize)
FavoriteModel(sequelize)


const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through:'user_favorite'})
Favorite.belongsToMany(User, {through:'user_favorite'})


module.exports = {
   User,
   Favorite,
   sequelize,
};
