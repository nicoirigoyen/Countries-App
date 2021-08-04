require("dotenv").config();
var express = require('express')
const server = express.Router();
const axios = require("axios");
const { Activities,Country } = require("../db.js");



server.post("/api/activities", async (req, res)=>{
    var { name, dificultty, duration, season, Countries } = req.body;
    
    let actividad = await Activities.create({
        name,
        dificultty,
        duration,
        season
    })
    Countries.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { id: pais }
        })
        await actividad.addCountry(country)
        
    })
    res.status(201).send('Succesful!')
});



module.exports = server;