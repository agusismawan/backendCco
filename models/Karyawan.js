const sequelize = require('sequelize');
const db = require("../config/db");

const Karyawan = db.define(
    "karyawan",
    {
        id: { type: sequelize.INTEGER, primaryKey: true },
        nama: { type: sequelize.STRING },
        nomor_hp: { type: sequelize.STRING },
        foto: { type: sequelize.STRING },
        pn: { type: sequelize.STRING },
        fungsi: { type: sequelize.STRING },
        is_active: { type: sequelize.INTEGER },
    },
    {
        freezeTableName: true
    }
);

module.exports = Karyawan;