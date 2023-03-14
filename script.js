//Efecto mousemove 

var cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



// JavaScript para la calculadora
 let currentNumber = '';
 let operator = '';
 let result = 0;
 const screen = document.getElementById('screen');

 function addNumber(num) {
     currentNumber += num;
     screen.innerHTML = currentNumber;
 }
 console.log(num);

 function addOperator(op) {
     operator = op;
     result = parseFloat(currentNumber);
     currentNumber = '';
 }

 function calculate() {
     switch (operator) {
         case '+':
             result += parseFloat(currentNumber);
             break;
         case '-':
             result -= parseFloat(currentNumber);
             break;
         case '*':
             result *= parseFloat(currentNumber);
             break;
         case '/':
             result /= parseFloat(currentNumber);
             break
         default:
             // Si no se ha seleccionado un operador, no se hace nada
             return;
     }
     // Mostrar el resultado en la pantalla y resetear las variables
     screen.innerHTML = result;
     currentNumber = result.toString();
     operator = '';
     result = 0;
 }

 function clearScreen() {
     // Limpiar la pantalla y resetear las variables
     screen.innerHTML = '';
     currentNumber = '';
     operator = '';
     result = 0;
 }
