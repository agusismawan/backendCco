const sequelize = require('sequelize');
const db = new sequelize("cco", "root", "password", {
    dialect: "mysql"
})

db.sync({});

module.exports = db;
