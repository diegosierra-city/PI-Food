const axios = require("axios");
const { Recipe, Diet } = require("../db.js");
const { Op } = require("sequelize");
require('dotenv').config();
const {
 API_URL,API_KEY
} = process.env;

async function getRecipeByName(req, res) {
 const { name } = req.query; 
 let listDB=[]
 let listAPI=[]
 //return res.status(403).json(req.query);
 try {
 //
 listDB = await Recipe.findAll({
  where: {title: 
   {[Op.iLike]: `%${name}%`}
  },
  attributes: ["id","title","image"],//filtramos
  //include: Diet //carga la tabla intermedia
}); 
 
  let response = await axios.get(
   `${API_URL}/complexSearch?apiKey=${API_KEY}&number=100&query=${name}`
 );
 listAPI = response.data;
 
 if(listDB.length===0 && listAPI.totalResults===0) return res.status(404).send(`No recipe with this name '${name}' was found`);
 
  return res.status(200).json([listDB,listAPI]);
  
 } catch (error) {
   return res.status(500).json(error.message);
 }

}

module.exports = { getRecipeByName }