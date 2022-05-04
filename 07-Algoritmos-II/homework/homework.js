'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let final = []
  let derecha = [];
  let nuevoArray = [];
  let izquierda = [];
  let pivot = Math.floor(array.length/2)
  if (array.length <1)return[];
  for(let i=0;i<array.length; i++){
    if(array[i]>array[pivot]){
      derecha.push(array[i]);
    }
    if(array[i]=== array[pivot]){
      nuevoArray.push(array[i]);
    }
    if(array[i]< array[pivot]){
      izquierda.push(array[i]);
    }
  }
  return final.concat(quickSort(izquierda),nuevoArray, quickSort(derecha));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
