/* Manejo de data */

const filterByTag = (data, tag) => {
  if (tag === 'all') {
    return data;
  }

  return data.filter(element => {
    return element.tags.includes(tag);
  });
}

window.filterByTag = filterByTag;


// ordenar
const orderLol = (data, sortBy, sortOrder) => {

  const list = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy])
      return 1;
    if (a[sortBy] < b[sortBy])
      return -1;
    return 0;
  });

  if (sortOrder === 'za') {
    return list.reverse();
  }

  return list;
};

window.orderLol = orderLol;
