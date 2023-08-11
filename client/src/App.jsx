import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
//
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Error404 from "./views/Error404/Error404";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import FormRecipe from "./views/FormRecipe/FormRecipe";

import LandingPage from "./views/LandingPage/LandingPage";
//
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux"
import { getAllRecipes,getAllDiets } from "./redux/actions";


export default function App() {
  const dispatch = useDispatch();
  //let recipes = useSelector((state) => state.allRecipes);
//console.log('z',recipes)
//let recipes=[]
//const dispatch = useDispatch()

  let {pathname} = useLocation();

    
  const navigate = useNavigate();

  //al montar se valida el usuario
  /* useEffect(() => {
    !pagStart? navigate('/') : navigate('/home')
     }, [pagStart]); */

     useEffect(() => {
      console.log('WW')
        dispatch(getAllRecipes())
          .catch(error => {
            console.error('Error al obtener las recetas:', error);
          });
      
    dispatch(getAllDiets())
          .catch(error => {
            console.error('Error al obtener las dietas:', error);
          });
    }, []);


  return (
    <div className="App">
  {pathname!='/' && <NavBar />}
      
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/new-recipe" element={<FormRecipe />} />
<Route path="/login" element={<Login action={`login`} />} />
<Route path="/singup" element={<Login action={`singup`} />} />
<Route path="*" element={<Error404 />} />
</Routes>
    
    </div>
  );
}
