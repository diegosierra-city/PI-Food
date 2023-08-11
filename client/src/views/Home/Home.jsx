import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getAllRecipes,filterRecipesDiets } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { savePage } from "../../redux/actions";
import Search from "../../components/Search/Search";

export default function Home() {
  let recipes = useSelector((state) => state.recipes);
  //console.log('Home',recipes)
  let diets = useSelector((state) => state.diets);
  let nowPage = useSelector((store) => store.page);
  const dispatch = useDispatch();
  //let {recipes}=useParams()

  const [recipesPage, setRecipesPage] = useState([]);
  const [actualPage, setActualPage] = useState(1);

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
  }

  function handleFilterOrigin(e) {}

  function handleSearch() {}

  //console.log('Homerecipes',recipes)
  return (
    <div>
      <div className="image-page">
        <img src="../src/assets/pages/Home.jpg" alt="" />
      </div>

      <div className={styles.filtros}>
        <select onChange={handleFilterDiet}>
          <option value="all">Filter by Diet</option>
          {diets?.map((diet, i) => (
            <option key={i} value={`${diet.name}`}>
              {diet.name}
            </option>
          ))}
          <option value="all">All Diets</option>
        </select>

        <select onChange={handleFilterOrigin}>
          <option value="">Filter by Origin</option>
          <option value="api">API</option>
          <option value="db">Data Base</option>
          <option value="all">All</option>
        </select>

        <Search />
      </div>

      <div>
        <Cards recipes={recipesPage} />
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
