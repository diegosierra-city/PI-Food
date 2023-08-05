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
import {useDispatch} from 'react-redux'

/* import dotenv from 'dotenv'
dotenv.config();
const { URL_API } = process.env; */


export default function App() {
const [recipes, setRecipes] = useState([]);
//const dispatch = useDispatch()

  let {pathname} = useLocation();

  const [start, setStart] = useState(false);
  
  const navigate = useNavigate();

  //al montar se valida el usuario
  useEffect(() => {
    !start? navigate('/') : navigate('/home')
    //alert(start)
 }, [start]);

  return (
    <div className="App"> holllaaaa--
  {pathname!='/' && <NavBar />}
      
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/home" element={<Home/>} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/new-recipe" element={<FormRecipe />} />
<Route path="*" element={<Error404 />} />
</Routes>
    
    </div>
  );
}
