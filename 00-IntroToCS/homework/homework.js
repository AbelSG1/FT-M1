"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let arreglo = num.split("");
  let suma = 0;
  for (let i=0; i<arreglo.length; i++ ){
    suma  = suma + (arreglo[i]) *2 **(arreglo.length-1-i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  do{
   /*  //if(num === 0){
      //return 0;
   // }
    //else if(num === 1){
    //  array.push(1);
   // } */
     if(num % 2 !== 0){
      array.push(1)
    }
    else if(num % 2 === 0){
      array.push(0)
    }
    num = Math.floor(num/2);
  }
  while(num >= 1);
  let ultimoArray = array.reverse().join("")
  return ultimoArray;
}


// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
