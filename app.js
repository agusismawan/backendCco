const express = require('express')
const app = express()
const port = 4100
const db = require("./config/db");
const cors = require('cors')

app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.authenticate().then(() => {
    console.log("Koneksi database berhasil");
})

const Karyawan = require('./models/Karyawan')

app.get("/getAllKaryawan", async (req, res) => {
    try {
        const getAllKaryawan = await Karyawan.findAll()
        res.json(getAllKaryawan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})

app.get("/getKaryawan", async (req, res) => {
    try {
        const getKaryawan = await Karyawan.findOne({ where: { is_active: 1 } });
        res.json(getKaryawan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});