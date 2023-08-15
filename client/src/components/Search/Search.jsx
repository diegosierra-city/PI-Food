import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes, resetRecipes, savePage } from "../../redux/actions";

export default function Search() {
  const dispatch = useDispatch();

  async function onSearch() {
    if (searchText === "") {
      alert("First enter a search");
      return;
    }
    try {
      await dispatch(searchRecipes(searchText));
      dispatch(savePage(1))
    } catch (error) {
      console.log(error);
    }
  }

  const [searchText, setSerachText] = useState("");

  function handleChange(e) {
    setSerachText(e.target.value);
  }

  function handleResetRecipes() {
    dispatch(resetRecipes());
    dispatch(savePage(1))
  }

  return (
    <div>
      <input
        type="search"
        value={searchText}
        name="id"
        onChange={handleChange}
      />
      <button
        className="boton-principal"
        onClick={() => {
          onSearch();
        }}
      >
        Search
      </button>{" "}
      <button
        className="boton-principal"
        onClick={() => {
          handleResetRecipes();
        }}
      >
        View All Recipes
      </button>
    </div>
  );
}
