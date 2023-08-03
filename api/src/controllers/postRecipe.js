const axios = require("axios");
const { Recipe, Diet,RecipeDiets } = require("../db.js");

const { Op } = require("sequelize");
require("dotenv").config();
const { API_URL, API_KEY } = process.env;

async function postRecipe(req, res) {
  // id, title, image, summary, healthScore, steps, diets
  //return res.status(403).json(req.body);
  if (
    !req.body.title ||
    !req.body.image ||
    !req.body.summary ||
    !req.body.healthScore ||
    !req.body.steps ||
    !req.body.diets
  ) return res.status(400).send("Missing data");
   
  
  //return res.status(403).json(req.query);
  try {
    // 1. INSERT a new Recipe
    const [newRecipeconst, created] = await Recipe.findOrCreate({
      where: { title: req.body.title },
      defaults: {
      image: req.body.image,
      summary: req.body.summary,
      healthScore: req.body.healthScore,
      steps: req.body.steps,
    }
  });

  if(!created)return res.status(403).send('A recipe with this name already exists');
    /* 
    //el error de duplicados lo genera la DB
    const newRecipe = await Recipe.create({
      title: req.body.title,
      image: req.body.image,
      summary: req.body.summary,
      healthScore: req.body.healthScore,
      steps: req.body.steps,
    }); */
    
//return res.status(206).json(newRecipe);
    //Asociar las Dietas a la Receta
    //await newRecipe.addDiet(dietsInRecipe)
//se registra en la tabla intermedia RecipeDiets
req.body.diets.forEach(async (diet) => {
// return res.status(206).json(diet); 
      await newRecipe.addDiet(diet);
    })
    return res.status(200).json(newRecipe);//no incluye las Diets
    } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { postRecipe };
