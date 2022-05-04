'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  
  // 5! = 4!
  if ( n>-1 && n<2  ){
    return 1;
  }else {
    return n * nFactorial(n-1);
  }

}
//console.log(nFactorial(3))

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  
  // Fibonacci  3 = f(3-1) + f(3-2) = f(2) + f(1) = (f(2-1) + f(2-2)) + 1  
  //                                              =  ( 1   +    0 ) + 1
  //                                              =   2    
  // Fibonacci  4 = f(4-1) + f(4-2) = f(3) + f(2) = 2 + 1 = 3
  // Fibonacci  5 = f(5-1) + f(5-2) = f(4) + f(3) = 3 + 2 = 5
  // Fibonacci  6 = f(6-1) + f(6-2) = f(5) + f(4) = 5 + 3 = 8
  // Fibonacci  7 = f(7-1) + f(7-2) = f(6) + f(5) = 8 + 5 = 13

  if (n>0 && n<3){
    return 1;
  }
  if (n=== 0 ){
    return 0
  }
  return n = nFibonacci(n-1) + nFibonacci(n-2);
}
//  console.log(nFibonacci(1))

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow
// (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún 
//elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
   this.array = [];

}
Queue.prototype.enqueue = function(x){
  this.array.push(x);
}
Queue.prototype.dequeue = function(){
return  this.array.shift();
}
Queue.prototype.size = function(){
 return this.array.length
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
