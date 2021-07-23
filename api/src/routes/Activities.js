require("dotenv").config();
var express = require('express')
const server = express.Router();
const axios = require("axios");
const { Activities,Country } = require("../db.js");


// [ ] __POST /activity__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
//   - Crea una actividad turística en la base de datos
server.post("/", async (req, res)=>{
    var { name, dificultty, duration, season, Countries } = req.body;
    
    let actividad = await Activities.create({
        name,
        dificultty,
        duration,
        season
    })
    console.log(Countries)
    Countries.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { id: pais }
        })
        await actividad.addCountry(country)
        
    })
    res.status(201).send('Succesful!')
});



module.exports = server;