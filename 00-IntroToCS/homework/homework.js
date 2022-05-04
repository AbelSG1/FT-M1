"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let arreglo = num.split("").reverse();

  let suma = 0;
  for (let i=0; i<arreglo.length; i++ ){
    suma  += arreglo[i] *2 **(i);
  }
  return suma;
  
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  while (num>=1){
    if (num%2===1 ){
      array.unshift(1);
    }
    if (num%2===0){
      array.unshift(0)
    }
      num = Math.floor(num/2);
  }
  let nuevoArray = array.join("");
  return nuevoArray;
}


// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
