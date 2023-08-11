import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {searchRecipes} from '../../redux/actions'



export default function Search(props) {
const dispatch = useDispatch();

 async function onSearch() {
  if(searchText===''){
    alert("First enter a search");
    return;
  }
  try {
    await dispatch(searchRecipes(searchText))
  } catch (error) {
    console.log(error)
  }
   
  }


  const [searchText, setSerachText] = useState(""); 

  function handleChange(e){
    setSerachText(e.target.value);
  }
  
 return (
  <div>
  <input type='search' value={searchText} name='id' onChange={handleChange} />
  <button className="boton-principal" onClick={()=>{
     onSearch()
  }}>Search</button>
</div>
 )
 }