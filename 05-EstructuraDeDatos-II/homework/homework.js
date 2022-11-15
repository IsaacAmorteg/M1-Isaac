"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor (){
    this._length = 0;
    this.head = null;
  };

  add(value) {
    let node = new Node(value);
    let current = this.head;

    if(!current) {
      this.head = node;
      return node;
    };

    while (current.next) {
      current = current.next;
    };
    current.next = node;
    return node;
  };

  remove(){
    if (!this.head) return null;
    if (!this.head.next) {
      let saveInfo = this.head.value;
      this.head = null;
      return saveInfo;
    }
    else {
      let current = this.head
      while (current.next.next){
        current = current.next;
      };
      let saveInfo = current.next.value;
      current.next = null;
      return saveInfo;
    }
  };

  search (data){
    let current = this.head;
    while (current) {
      if (typeof data !== "function"){
        if (data === current.value) return current.value;
      } else {
        if (data(current.value)) return current.value;
      }
      current = current.next;
    }
    return null;
  }
};

class Node{
  constructor (value){
  this.value = value;
  this.next = null;
  }
};



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(){
    this.numBuckets = 35;
    this.Lockers = [];
  };
  hash (key) {
    let total = 0;
    for (let i=0; i < key.length; i++) {
      total += key.charCodeAt(i);
      };
      return total % this.numBuckets;
  };
  set (key, value) {
    if (typeof key !== 'string') throw new TypeError('Keys must be strings');
    let locker = this.hash(key);
    this.Lockers[locker][key] = value;
  }; 
  get (key){
    let locker = this.hash(key);
    return this.Lockers[locker][key];
  };

  hasKey (key){
  let checkKey = this.get(key)
  if (checkKey) return true;
  return false;
  };
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
