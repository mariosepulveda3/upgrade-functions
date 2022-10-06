
//Iteración #1: Buscar el máximo**

//Completa la función que tomando dos números como argumento devuelva el más alto.

numberOne = 10;
numberTwo = 5;

function bigNumber(numberOne , numberTwo) {

    if (numberOne > numberTwo) {
        console.log ('El mayor es', numberOne);
        
    }   else if (numberTwo > numberOne) {
        console.log ('El mayor es', numberTwo);

    }   else {
        console.log ('Son iguales');
    }
    
  }

console.log (bigNumber(numberOne, numberTwo));