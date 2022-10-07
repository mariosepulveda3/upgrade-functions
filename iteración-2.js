//Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings 
//como argumento devuelva el más largo, en caso de que 
//dos strings 
// tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

 let longestWord = '';

 function getLongestWord (array) {

     for (const element of array) {
     //console.log (element);

     if (longestWord.length < element.length) {
         longestWord = element;
     }
    }
    return longestWord;
}
console.log (getLongestWord(avengers));

