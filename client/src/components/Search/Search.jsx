export default function Search(props) {

 async function onSearch(id) {
  try {
    let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

    let data = response.data;
    if (data.name && !characters.find((character) => character.id === data.id)) {
      setCharacters([...characters, data]);
    } else if(!data.name) {
      alert("¡No hay personajes con este ID!");
    }else{
     alert("Ya esta este personaje");
    }

  } catch (error) {
    console.log(error)
  }
   
  }
  
 return (
  <h2>Search</h2>
 )
 }