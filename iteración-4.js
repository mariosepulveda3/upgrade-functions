
// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. 
// Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];
 
function averageNumbers (array) {

    let prom = 0;

    for (let i = 0; i < array.length; i++) {
        prom += array[i];
    }
    
    return prom / array.length;
}

console.log (averageNumbers(numbers));
