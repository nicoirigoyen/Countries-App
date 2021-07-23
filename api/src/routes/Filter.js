require("dotenv").config();

var express = require("express");
const server = express.Router();
const axios = require("axios");
const { Country, Activities } = require("../db.js");
const { Op } = require("sequelize");

server.get("/continent", async (req, res, next) => {

    var { continent } = req.query;
    if (continent) {
      try {
        return res.status(200).json(
          await Country.findAll({
            where: { continent:continent},
 
          })
        );
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
    else{
        res.status(400).json({ msg: 'Error searching the continent!' });
    }
})

server.get("/order", async (req, res, next) => {
    
    var { order } = req.query;
    
    if (order) {
      try {
        return res.status(200).json(
          await Country.findAll({
            order:[['name', order]]
 
          })
        );
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
    else{
        res.status(400).json({ msg: 'NO ENTRO NI EN LA QUERY' });
    }
})
server.get("/population", async (req, res, next) => {
    
    var { order} = req.query;
    
    if (order) {
      try {
        return res.status(200).json(
          await Country.findAll({
            order:[['population', order]]
 
          })
        );
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
    else{
        res.status(400).json({ msg: 'NO ENTRO NI EN LA QUERY' });
    }
})

server.get("/activities", async (req, res, next) => {

   
      try {
        return res.status(200).json(
          await Country.findAll({
            include:[Activities]
 
          })
        );
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    
})

module.exports = server;