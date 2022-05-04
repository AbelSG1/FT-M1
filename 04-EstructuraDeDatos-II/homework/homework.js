'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta 
// el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función.
// Si no hubiera resultados, devuelve null.

function LinkedList() {
this.head = null;
this._length = 0
}

function Node(value){
this.value = value;
this.next = null;
}
 
let list = new LinkedList();

LinkedList.prototype.add = function (value){ //crea el nodo-
 /* let node = new Node(value); //crea una instancia 
  // this va a hacer referencia a la LinkedList a la cual 
  // le aplico el metodo 
  let current = this.head; // current mira el mismo cuadratito de this.head
  //this. apunta a la instancia de los objeto que lo llama
  if (!current){  //if (current === null)
      this.head =  node;      
      this._length++;
      return node;
  }
  while(current.next){ // (curret.new !== null)
    current = current.next; // ahora curren mira a current.new    
  }  
  current.next = node;
  this._length++;
  return node;*/
  var nodo = new Node(value)
  if (!this.head){
    this.head = nodo;
  } else {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = nodo;
  }
}
   
LinkedList.prototype.remove = function(){  
 if (!this.head) return null;
 if (this.head.next === null){
   let current = this.head.value;
   this.head = null;
   return current;
 } else {
   let current = this.head; // este current es diferente al anterior porque estan
   //en diferentes bloques
   while(current.next.next){    
     current = current.next;
   } 
   let guardarUltimoNodo = current.next.value;
   current.next = null;
   return guardarUltimoNodo;

 }      

};
LinkedList.prototype.search = function(arg){
 if( this.head === null) return null;
 var funcion; 
 if(typeof arg != "function"){
   funcion = function (value){
     return value === arg;
   }
 } else { 
   funcion = arg;
 }
 let current = this.head;
 while(current != null){
   if (funcion(current.value)){
     return current.value;
   } else {
     current = current.next
   }
 } 
return null; 
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.contenedores = [];  
}
HashTable.prototype._hash = function (){
  var suma = 0;
  for (let i=0 ; i<value.length; i++){
    suma=sume+value.charCodeAt(i);
  }
  return suma%35;
}
HashTable.prototype.get = function(){

}
HashTable.prototype.set = function(key, value){
  if(typeof key != 'string'){
    throw new TypeError("Keys must be strings");
  }
  let posicion = this.hash(key)
  this.contenedores[posicion]=this.contenedores[posicion] || []
  this.contededores[posicion].unshift({key: key, value: value})
}
HashTable.prototype.haskey = function(){
  let haskey = this.get(key);
  if(haskey) return true;
  else return false;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
