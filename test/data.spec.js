global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
const data = [

  {
    name: "Aatrox",
    tags:"Fighter", 
    info: { difficulty: 4 }
  },
  {
    name: "Ashe",
    tags: "Marksman",
    info: { difficulty: 4 }
  },
  {
    name: "Zyra",
    tags: "Mage",
    info: { difficulty: 7 }
  },
  {
    name: "Veigar",
    tags: "Mage",
    info: { difficulty: 7 }
  }

]


describe('filterByTag', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.filterByTag, 'function');
  });

  it('debería retornar Veigar para filtrar por nombre', () => {
    assert.deepEqual(window.filterByTag(data,"Veigar"),
    {
      name: "Veigar",
      tags: "Mage",
      info: { difficulty: 7 }
    }
    );
  });
})


describe('orderLol', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.orderLol, 'function');
  });
  
  it('debería retornar los champion ordenado de la A a la Z', () => {
    assert.deepEqual(window.orderLol(data, "name", "az"), 
  )});

  it('debería retornar ["Aatrox","Ashe","Veigar","Zyra"] para champsOrder "00",orden de "A-Z"', () => {
    assert.deepEqual(window.orderLol(data,"00"), 
    [
      {
        name: "Aatrox",
        tags:"Fighter", 
        info: { difficulty: 4 }
      },
      {
        name: "Ashe",
        tags: "Marksman",
        info: { difficulty: 4 }
      },
      {
        name: "Zyra",
        tags: "Mage",
        info: { difficulty: 7 }
      },
      {
        name: "Veigar",
        tags: "Mage",
        info: { difficulty: 7 }
      }
    ]
    
  );
    
})}


  