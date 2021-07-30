const sequelize = require('sequelize');
const db = new sequelize("cco", "root", "", {
    dialect: "mysql"
})

db.sync({});

module.exports = db;
