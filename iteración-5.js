
// **Iteración #5: Calcular suma de strings**

// Crea una función que reciba por parámetro un array 
// y cuando es un valor number lo sume y de lo 
// contrario cuente la longitud del string y lo sume. 
// Puedes usar este array para probar tu función:


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        
        if (typeof array[i] == 'string') {
           
            sum += array[i].length;
        }
    }
    return console.log (sum / array.length);
}
 
averageWord(mixedElements);




