const array= [1, 2, 3, 4, 5, 10, 15, 20, 30];

/* Map */
function callbackMap(element, index, array) {
  return `Número: ${element}; index: ${index}; array: ${array}`;
}

function map(array, callback) {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    let result = callback(array[i], i, array)
    newArray.push(result)
  }
  return newArray
}

console.table(map(array, callbackMap));

/* Filter */
function callbackFilter(element, index, array) {
  if (element %2 && index > 3 && array.length > 4) {
    return element;
  }
}
const newArray = []
function filter(array, callback) {
  for(let i = 0; i < array.length; i++){
    let result = callback(array[i], i, array)
    if (result){
      newArray.push(result)
    }
  }
  return newArray
}
console.log(filter(array, callbackFilter));

/* Find */
const arrayFind = [15, false, 7, "boxing", 5];

function callbackFind(element) {
  if (element > 2 && element < 12) {
    return true;
  }
}

function callbackFindTwo(element) {
  if (element > 20) {
    return true;
  }
}

function find(array, callback) {
  for(let i = 0; i < array.length; i++){
    if (callback(array[i]) == true){
      return array[i]
    }
  }
}
console.log(find(arrayFind, callbackFind));
console.log(find(arrayFind, callbackFindTwo));

/* Reduce */
function callbackReduce(acc, actualValue) {
    return acc + actualValue;
  }
  
  function reduce(array, callback, initialValue = 0) {
  
    let acumulador = initialValue
    
    for(let i = 0; i < array.length; i++){
      acumulador = callback(acumulador, array[i])
    }
    
    return acumulador
  }
  
   console.log(reduce(array, callbackReduce));
  
/*Includes*/
const arrayIncludes = [13, "boxing", 504, NaN, 788, 501]; // array para iteração do método

function includes(array, searchElem) {
  for(let i = 0; i < array.length; i++){
    if(array[i] == searchElem){
      return true
    }
  }
  return false
}

 console.log(includes(arrayIncludes, "boxing"));
 console.log(includes(arrayIncludes, 500));

/* IndexOf */
const arrayFindIndex = [504, 77, true,"boxing", 88, null, undefined];

function callbackFindIndex(element) {
  return typeof element === "string" ? true : false;
}

function callbackFindIndexTwo(element) {
  return element == 3 ? true : false;
}

function FindIndex(array, callback) {
  for(let i = 0; i < array.length; i++){
    if(callback(array[i]) == true){
      return i
    }
  }
  return -1
}
 console.log(FindIndex(arrayFindIndex, callbackFindIndex));
 console.log(FindIndex(arrayFindIndex, callbackFindIndexTwo));