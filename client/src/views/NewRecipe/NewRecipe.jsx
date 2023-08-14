import { useEffect } from "react";
import { useState } from "react";
import styles from './NewRecipe.module.css'
import FormRecipe from '../../components/FormRecipe/FormRecipe'


export default function NewRecipe(props) {

 const [session, setSession] = useState(false);

 const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return '';
};

const saveCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

 useEffect(() => {
  // Verifica si la cookie "user_id" existe
  if (getCookie('user_id')) {
    console.log('La cookie "user_id" existe.');
    setSession(false);//true
  } else {
    console.log('La cookie "user_id" no existe.');
    setSession(true);//false
  }
}, []);

 return (
  <div>
   <div className="image-page">
        <img src="../src/assets/pages/NewRecipe.jpg" alt="" />
      </div>

{session? <div className={styles.zona_formulario}>
 <div className={styles.formulario}>
 <FormRecipe/> 
 </div>
 

</div> : <div className={styles.zona_formulario}>
 formulario Registro usuario
 </div>}

  </div>
 )
 }