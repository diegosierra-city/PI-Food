import { ADD_RECIPE, ALL_RECIPES, FILTER, ORDER, ALL_DIETS, ADD_USER, LOGIN } from "./actions";

const initialState = {
  recipes: [],
  diets: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

   case ALL_RECIPES:
        return {
          ...state,
          recipes: [...action.payload],          
        };

  /*   case ADD_FAV:
      console.log('h',action.payload)
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      //console.log('X',state.myFavorites.myFavorites)
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
        allCharacters: state.allCharacters.filter(
          (fav) => fav.id !== Number(action.payload)
        ),

      };

      case ALL_FAV:
        return {
          ...state,
          myFavorites: [...action.payload],
          allCharacters: [...action.payload],
        };
      

    case FILTER:
      let newFavotites = [];
      if (action.payload == "todos") {
        newFavotites = [...state.allCharacters];
      } else {
        newFavotites = state.allCharacters.filter(
          (fav) => fav.gender === action.payload
        );
      }
      return {
        ...state,
        myFavorites: newFavotites,
      };

    case ORDER:
      // Creamos una copia del array original
      const objetosOrdenados = [...state.allCharacters];

      // Utilizamos la función sort para ordenar la copia del array por la propiedad "name"
      if (action.payload == "A") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload == "D") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return 1; // Devolvemos 1 en lugar de -1
          }
          if (a.name > b.name) {
            return -1; // Devolvemos -1 en lugar de 1
          }
          return 0;
        });
      }

      return {
        ...state,
        myFavorites: [...objetosOrdenados],
      };
 */
    default:
      return { ...state };
  }
}