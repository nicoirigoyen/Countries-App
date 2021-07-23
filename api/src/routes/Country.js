require("dotenv").config();
// const { BASE_URL, GET_COUNTRIES,API_ALL } = require('');
const API_ALL= 'https://restcountries.eu/rest/v2/all'

var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Country, Activities } = require("../db.js");
const { Op } = require("sequelize");


// [ ] __GET /countries/{idPais}__:
//   - Obtener el detalle de un país en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de país
//   - Incluir los datos de las actividades turísticas correspondientes

server.get("/:id", async (req, res, next) => {
    const { id } = req.params;

      const pais = await Country.findByPk(id, {
          include: Activities
        }) 
  
      res.json(pais);
  })
      


server.get("/", async (req, res, next) => {

  const {page} = req.query;
  const pag = page * 10
  const obj = pag? {offset: obj, limit: 30} : {limit: 30}

  var { name } = req.query;
  if (name ) {
    try {
      return res.status(200).json(
        await Country.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
          include: [Activities],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        })
      );
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } 

  else {
    const responde = await Country.findAll()
    
    try {
      if(responde.length === 0){
      const { data } = await axios.get(`${API_ALL}`);

      const datosNecesarios = data.map((e) => {
        return {
          id: e.alpha3Code,
          name: e.name,
          image: e.flag,
          continent: e.region,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,
        };
      });
      
      
      for (let i = 0; i < datosNecesarios.length; i++) {
        await Country.create({
          
          id: datosNecesarios[i].id,
          name: datosNecesarios[i].name,
          image: datosNecesarios[i].image,
          continent: datosNecesarios[i].continent,
          capital: datosNecesarios[i].capital,
          subregion: datosNecesarios[i].subregion,
          area: datosNecesarios[i].area,
          population: datosNecesarios[i].population}
        );

      }
      
      // const responde = await Country.findAll({limit:10})
      const responde = await Country.findAll()

      res.status(200).send(responde);
    }else{
      res.send(responde)
    }
  } catch (err) {
      next(err);
    }
  }
});

module.exports = server;
