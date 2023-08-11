import { ADD_RECIPE, ALL_RECIPES, DETAIL_RECIPES,RESET_RECIPES,SEARCH_RECIPES, FILTER, ORDER, ALL_DIETS, ADD_USER, LOGIN, PAGE } from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  user:{},
  page: 1
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case PAGE:
      return {
        ...state,
        page: action.payload
      }

   case ALL_RECIPES:
    //console.log('reducer-all',action.payload)
        return {
          ...state,
          recipes: [...action.payload],
          allRecipes: [...action.payload],          
        };
        
case SEARCH_RECIPES:
    console.log('reducer-search',action.payload)
        return {
          ...state,
          recipes: [...action.payload]          
        };

case DETAIL_RECIPES:
  //console.log('reducer',action.payload)
        return {
          ...state,
          recipes: [action.payload]          
        };

case RESET_RECIPES:
  //console.log('reducer',action.payload)
        return {
          ...state,
          recipes: [...state.allRecipes]          
        };

        case ALL_DIETS:
    //console.log('reducer-all',action.payload)
        return {
          ...state,
          diets: [...action.payload]          
        };

        case FILTER:
          function searchDiets(array, searchDiet) {
            const results = [];
          
            array.forEach(item => {
              if (item.diets) {
                // Formato 1: Array de strings
                if (item.diets.includes(searchDiet)) {
                  results.push(item);
                }
              } else if (item.Diets) {
                // Formato 2: Array de objetos
                const dietsNames = item.Diets.map(diet => diet.name);
                if (dietsNames.includes(searchDiet)) {
                  results.push(item);
                }
              }
            });
          
            return results;
          }
          
let newRecipes = []          
if(action.payload === 'all'){
newRecipes = [...state.allRecipes];
}else{
newRecipes = searchDiets([...state.allRecipes], action.payload);  
}
  console.log('reducer-filter',action.payload, newRecipes)
         
      return {
        ...state,
        recipes:[...newRecipes],
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