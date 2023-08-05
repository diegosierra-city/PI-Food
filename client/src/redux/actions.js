export const ADD_RECIPE = 'ADD_RECIPE'
export const ALL_RECIPES = 'ALL_RECIPES'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const ALL_DIETS = 'ALL_DIETS'
export const ADD_USER = 'ADD_USER'
export const LOGIN = 'LOGIN'

import axios from 'axios'
/* //cargo las variables de .env
import dotenv from 'dotenv'
dotenv.config();
const {
 URL_API
} = process.env; */

export const getAllRecipes = () => {
 //console.log('T',recipe)
return async (dispatch) => {
 try {
   let response = await  axios.get('http://localhost:3001/recipes', recipe)
   let data = response.data
   return dispatch({
    type: 'ALL_RECIPES',
    payload: data,
 });

 } catch (error) {
   console.log(error)
 }
 
};
};
/* export const addRecipe = (recipe) => {
 //console.log('T',recipe)
return async (dispatch) => {
 try {
   let response = await  axios.post('http://localhost:3001/rickandmorty/fav', recipe)
   let data = response.data
   return dispatch({
    type: 'ADD_FAV',
    payload: data,
 });

 } catch (error) {
   console.log 
 }
 
};
}; */

/*
//solo redux
export const removeFav = (id) => {
return {
type: REMOVE_FAV,
payload: id
}
} */

/* /// redux y express
export const removeFav = (id) => {
 return async (dispatch) => {
    try {
       let response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
       let data = response.data
       return dispatch({
          type: 'REMOVE_FAV',
          payload: id,
    });
    }catch (error) {
       console.log(error)
    }
   
 };


};

/// redux y express
export const allFav = () => {
return (dispatch) => {
  axios.get(`http://localhost:3001/rickandmorty/fav`).then(({ data }) => {
     return dispatch({
        type: 'ALL_FAV',
        payload: data,
  });
  });
};
};


export const filter = (gender) => {
return {
type: FILTER,
payload: gender
}
}

export const order = (sentido) => {
return {
type: ORDER,
payload: sentido
}
}
 */