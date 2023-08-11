import { useState } from 'react';
import style from './Card.module.css';
//import { IconTrashXFilled, IconHelpHexagonFilled, IconHeartFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import {addFav,removeFav} from '../../redux/actions'
import { useEffect } from 'react';

export default function Card(props) {
const {recipe} = props;

const [arrayDiets, useArrayDiets] = useState([])

//let arrayDiets=[]

const dispatch = useDispatch()
    function handleDetail(){
      
   }


   return (
      <div className={style.card}>
         <img src={recipe.image} alt="" />
         
<h2>{recipe.title}</h2>
<Link to={`/detail/${recipe.id}`}>
<button className='boton-principal'> view recipe</button>
</Link>
<div className={style.diets}>Diets: 
   {recipe?.diets?.length > 0 ? recipe?.diets.map((diet,i) => <div key={`${recipe.id}-${i}`}>{diet}</div>) : recipe?.Diets?.length > 0 ? recipe?.Diets.map((diet,i) => <div key={`${recipe.id}-${i}`}>{diet.name}</div>) : "No diets"}
  
</div>

{/* <Link to={`/detail/${character.id}`}>
         <div className={style.cardImageUp}>
<img src={character.image} alt={character.name} />
<h2 className={style.cardTitle}>{character.name}</h2>
         </div>
         </Link>
         
<div className={style.cardID}>
{character.id}
</div>

      <div className={style.cardInterno}> 
         <div className={style.cardFranja}></div>
         

         <div className={style.znDescription}>
         <div>{character.status}</div>
         <div>{character.especies}</div>
         <div>{character.gender}</div>
         <div>{character.origin.name}</div>
         </div>
         
         

         
        <Link to={`/detail/${character.id}`}><IconHelpHexagonFilled size="40" /></Link>
        <IconHeartFilled size="40" className={favorite ? style.linkIconRed : style.linkIcon} onClick={handleFavorite} />
        <IconTrashXFilled className={style.linkIconRed} size="40" onClick={()=>onClose(character.id)} />
        </div>  */}  
      </div>
   );
}