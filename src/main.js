window.addEventListener('load', () => {
  //Referencias a los elementos del DOM
  const lolList = document.getElementById('lol_list')
  const selectTag = document.getElementById('select_tag');
  const sortLol = document.getElementById('select_order');

  //Funcion mostrar data dentro de una tarjeta de bootstrap
  const showData = (data) => {
    let html = '';

    data.forEach(element => {
      if (!element.img) {
        element.img = 'https://via.placeholder.com/120';
      }

      html += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3">
      <div class="card h-100">
        <div class="card-img-wrapper">
        <img class="card-img mx-auto d-block" src="${element.img}">
        </div>
        <div class="card-body">
          <h5 class="card-title">Nombre: ${element.id}</h5>
          <p class="card-text">Ataque: ${element.info.attack}</p>
          <p class="card-text">Defensa: ${element.info.defense}</p>
          <p class="card-text">Magia: ${element.info.magic}</p>
          <p class="card-text">Dificultad: ${element.info.difficulty}</p>
        </div>
      </div>
    </div>`;
    });
    //Imprimir tarjeta en html

    lolList.innerHTML = html
  };

  fetch('https://raw.githubusercontent.com/JoceCasteletti/LOL-Joce/master/src/data/lol/lol.json')
  .then(response => response.json())
  .then(obj => {
    const data = Object.values(obj.data);

    const filter = () => {
      const tag = selectTag.value;
      const order = sortLol.value;
  
      let lolList = window.filterByTag(data, tag);
      lolList = window.orderLol(lolList, "rol", order);
  
      showData(lolList);
    }
    
    //Filtro múltiple tags y ordenar
    selectTag.addEventListener('change', filter);
    sortLol.addEventListener('change', filter);

    showData(window.filterByTag(data, 'all'));
  });
})
