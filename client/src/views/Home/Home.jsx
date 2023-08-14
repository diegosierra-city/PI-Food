import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getAllRecipes,filterRecipesDiets, filterRecipesOrigin,getAllDiets,savePage,resetRecipes,cleanRecipes} from "../../redux/actions";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";


export default function Home() {
  let recipes = useSelector((store) => store.recipes);
  const allRecipes = useSelector((store) => store.allRecipes);
  //console.log('Home',recipes)
  let diets = useSelector((store) => store.diets);
  let nowPage = useSelector((store) => store.page);
  const dispatch = useDispatch();
  //let {recipes}=useParams()

  const [recipesPage, setRecipesPage] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [filterDiet, setFilterDiet] = useState('all')
  const [filterOrigin, setFilterOrigin] = useState('all')

  let pageRecipes = [];
  const recipesPerPage = 9;

  function paginator(pag) {
    setActualPage(pag);
    const init = (pag - 1) * recipesPerPage;
    const end = init + recipesPerPage;
    pageRecipes = recipes?.slice(init, end);
    setRecipesPage(pageRecipes);
    console.log("xx" + pag, pageRecipes);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace que el desplazamiento sea suave
    });
    dispatch(savePage(pag));
  }

  let totalPages = 1;
  let [btnPaginator, setBtnPaginator] = useState(null);

  useEffect(() => {
    if (recipes?.length > 0) {
      totalPages = Math.ceil(recipes.length / recipesPerPage);

      // Genera un arreglo con la cantidad de botones que necesitas
      let new_btnPaginator = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
      setBtnPaginator(new_btnPaginator);
      paginator(nowPage);
      console.log("qq", nowPage);
    }
  }, [recipes]);

  function handleFilterDiet(event) {
    dispatch(filterRecipesDiets(event.target.value));
    setFilterDiet(event.target.value)
    setFilterOrigin('all')
    setActualPage(1)
  }

  function handleFilterDietCard(filtro) {
    setActualPage(1)
    dispatch(filterRecipesDiets(filtro));
    setFilterDiet(filtro)
    setFilterOrigin('all')
    
  }

  function handleFilterOrigin(e) {
    setActualPage(1) 
   dispatch(filterRecipesOrigin(e.target.value));
   setFilterOrigin(e.target.value)
   setFilterDiet('all')
  
  }

  useEffect(() => {
    
  
   if(allRecipes?.length>0){
    dispatch(resetRecipes())
   }else{
   dispatch(getAllRecipes())
      .catch(error => {
        console.error('Error al obtener las recetas:', error);
      }); 
   }   
    
  
dispatch(getAllDiets())
      .catch(error => {
        console.error('Error al obtener las dietas:', error);
      });

     return () => dispatch(cleanRecipes())
      
}, []);

  //console.log('Homerecipes',recipes)
  return (
    <div>
      <div className="image-page">
        <img src="../src/assets/pages/Home.jpg" alt="" />
      </div>

      <div className={styles.filtros}>
        <select onChange={handleFilterDiet} value={filterDiet}>
          <option value="all">Filter by Diet</option>
          {diets?.map((diet, i) => (
            <option key={i} value={`${diet.name}`}>
              {diet.name}
            </option>
          ))}
          <option value="all">All Diets</option>
        </select>

        <select onChange={handleFilterOrigin} value={filterOrigin}>
          <option value="all">Filter by Origin</option>
          <option value="api">API</option>
          <option value="db">Data Base</option>
          <option value="all">All</option>
        </select>

        <Search />
      </div>

      <div>
        <Cards recipes={recipesPage} handleFilterDietCard={handleFilterDietCard} />
      </div>

      <div className={styles.pages}>
        {btnPaginator?.map((numeroPag, i) => (
          <button
            className={actualPage === numeroPag ? styles.active : null}
            key={i}
            onClick={() => paginator(numeroPag)}
          >{`${numeroPag}`}</button>
        ))}
      </div>
    </div>
  );
}
