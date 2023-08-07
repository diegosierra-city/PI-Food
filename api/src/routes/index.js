const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getRecipeById} = require('../controllers/getRecipeById.js')
const {getRecipeByName} = require('../controllers/getRecipeByName.js')
const {postRecipe} = require('../controllers/postRecipe.js')
const {getDiets} = require('../controllers/getDiets.js')
const {postUser} = require('../controllers/postUser.js')
const {postLogin} = require('../controllers/postUser.js')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe', getRecipeById);

router.get('/recipes', getRecipeByName);

router.post('/recipes', postRecipe);

router.get('/diets', getDiets);

router.post('/singup', postUser);

router.post('/login', postLogin);

module.exports = router;
