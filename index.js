const div = document.getElementById("div");
const error = document.querySelector('small')

  const buscarPokemon = async () => {
  const input = document.getElementById('input');  // input
  const pokemon = input.value.toLowerCase().trim();       // valor del input

   if (pokemon > 0) {
    
     try {
       
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
       const data = await res.json();
   
       console.log(data);
       const html = 
       `
       <div class="pokemon ${setCardBackground(data.types[0].type.name)}">
       <p class="${setBackgroundPoke(data.types[0].type.name)}"></p>
       <img src="${data.sprites.front_default}">
       <section class="info">
         <span class="name">${data.name}</span>
         <div class="cont-info">
             <span>Ataque</span>
             <span>Defensa</span>
             <i class="fa-sharp fa-solid fa-ruler-triangle"></i>
             <span>Peso</span>
         </div>
   
         <div class="cont-info">
             <span>12</span>
             <span>12</span>
             <span>${data.height / 10} m</span>
             <span>${data.weight / 10} kg</span>
         </div>
       </section>
       <span class="type">${data.types[0].type.name}</span>
       </div>
       `
       div.innerHTML += html;
       renderSuccess()
   
     } catch (error) {
       console.log(error)
     }
   }else if(pokemon === ""){
    renderError('Ingrese un numero valido')
   }else{
    renderError('No existe el pokemon con ese id')
   }
}

const deleteAll = () => {
  div.innerHTML = '';
}

const setCardBackground = (type) => {

  return type === "fire" 
  ? "border-fire"
  : type === 'normal'
  ? "border-normal"
  : type === 'grass'
  ? "border-grass" 
  : type === 'water'
  ? "border-water" 
  : type === 'poison'
  ? "border-poison" 
  : type === 'electric'
  ? "border-electric"
  : type === 'ghost'
  ? "border-ghost" 
  : type === 'ground'
  ? "border-ground" 
  : type === 'psychic'
  ? "border-psychic" 
  : type === 'bug'
  ? "border-bug"
  : type === 'ice'
  ? "border-ice" 
  : type === 'fairy'
  ? "border-fairy" :""
  

}

const setBackgroundPoke = (type) => {

  return type === "fire" 
  ? "back-fire"
  : type === 'normal'
  ? "back-normal"
  : type === 'grass'
  ? "back-grass" 
  : type === 'water'
  ? "back-water" 
  : type === 'poison'
  ? "back-poison" 
  : type === 'electric'
  ? "back-electric"
  : type === 'ghost'
  ? "back-ghost" 
  : type === 'ground'
  ? "back-ground" 
  : type === 'psychic'
  ? "back-psychic" 
  : type === 'bug'
  ? "back-bug" 
  : type === 'ice'
  ? "back-ice" 
  : type === 'fairy'
  ? "back-fairy" :""

}

const renderError = (msj) => {
	error.textContent = msj;	
};

const renderSuccess = () => {
	error.textContent = "";	
};

// agregar el evento al boton
const btn = document.getElementById('btn'); // boton buscar
const btnDelete = document.getElementById('btn-delete'); // boton borrar

btn.addEventListener('click', buscarPokemon)
btnDelete.addEventListener('click', deleteAll)