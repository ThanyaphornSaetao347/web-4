import { ref } from 'vue';

export const fav = ref([]);

export function addTofav(item) {
  const foundItem = fav.value.find(product => product.name === item.name);
  if (foundItem) {
    foundItem.quantity += 1;
  } else {
    fav.value.push({ ...item, quantity: 1 });
  }
}

export function totalItemsInfav() {
  return fav.value.reduce((acc, item) => acc + item.quantity, 0);
}