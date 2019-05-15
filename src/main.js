//Referencias a los elementos del DOM
 const lolList = document.getElementById('lol_list')
 const selectTag= document.getElementById('select_tag');
 const sortLol= document.getElementById('select_order');
 const btnFilter = document.getElementById('filter');


//Se deja referencia a la data 
let data = Object.values(window.LOL.data);

window.addEventListener(‘load’, () => {
  fetch(‘data/LOL/data.json’).then((response) => {
      return response.json();
  }).then((data) => {
      const list = data.LOL;

//Funcion mostrar data dentro de una tarjeta de bootstrap
const showData = (data) => {
    let html = '';
  
    data.forEach(element => {
      html += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3">
        <div class="card h-100">
          <div class="card-img-wrapper">
          <img class="card-img mx-auto d-block" src="${element.img}" alt="${element.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">Spellblock: ${element.stats.spellblock}</h5>
            <p class="card-text">Id: ${element.id}</p>
            <p class="card-text">Ataque: ${element.info.attack}</p>
            <p class="card-text">Defensa: ${element.info.defense}</p>
            <p class="card-text">Magic: ${element.info.magic}</p>
            <p class="card-text">Dificultad: ${element.info.difficulty}</p>

          </div>
        </div>
      </div>`;
    });
  //Imprimir tarjeta en html
  
  lolList.innerHTML = html
}



//Cuando termine de cargar la página va a desplegar la lista
window.addEventListener('load', () => {
  showData(window.filterByTag(data, 'all'));
})


//Filtro múltiple tags y ordenar
btnFilter.addEventListener('click', () => {
  const tag = selectTag.value;
  const order = sortLol.value;

  let lolList = window.filterByTag(data, tag);
  lolList = window.orderLol(lolList,"rol", order);

  showData(lolList);

})