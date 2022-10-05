//Iteración #1: Buscar el máximo**

//Completa la función que tomando dos números como argumento 
//devuelva el más alto.

numberOne = 10;
numberTwo = 5;

function bigNumber(numberOne , numberTwo) {

    if (numberOne > numberTwo) {
        console.log ('El mayor número es', numberOne);
        
    }   else if (numberTwo > numberOne) {
        console.log ('El mayor número es', numberTwo);

    }   else {
        console.log ('Los números son iguales');
    }
    // insert code
  }

bigNumber (numberOne, numberTwo);
console.log (bigNumber);