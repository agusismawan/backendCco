const express = require('express')
const app = express()
const port = 4100
const db = require("./config/db");

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.authenticate().then(() => {
    console.log("Berhasil conect");
})

const Karyawan = require('./models/Karyawan')
// app.post("/tambah", async (req, res) => {
//     try {
//         const { id, nama, nomor_hp, foto, pn } = req.body;
//         const newKaryawan = new Karyawan({
//             id, nama, nomor_hp, foto, pn
//         })

//         await newKaryawan.save();

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('server error')

//     }
// })
app.get("/getAllKaryawan", async (req, res) => {
    try {
        const getAllKaryawan = await Karyawan.findAll()
        res.json(getAllKaryawan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
        
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})