let firstUserEntry;
let secondUserEntry;
let calc;

// IMPORT THE MODULE
import { add, subtract, multiply, divide } from "./modules/calculator.js";

function gatherData() {
let done = false;
do {
 // COLLECT FIRST NUMBER FROM USER   
    firstUserEntry = parseFloat(prompt('Enter your first number:'));
    if  (isNaN(firstUserEntry) ) {
        alert('Please enter numbers only.');
        continue;
        } 
// COLLECT SECOND NUMBER FROM USER
    secondUserEntry = parseFloat(prompt('Enter your second number:'));
    if  (isNaN(secondUserEntry)) {
        alert('Please enter numbers only.');
        continue;
        }    
    
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER     
    calc = prompt('What math operation would you like to do with these two numbers? \nEnter:\n "+" for addition \n "-" for subtraction \n "*" for multiplication \n "/" for division');
    if (calc !== '+' && calc !== '-' && calc !== '*' && calc !== '/') {
        alert('Please enter a valid operator');
    continue; }
    if (calc == '/' && secondUserEntry == 0){
        alert('You cannot divide a number by 0.');   
        continue;
    }  
    done = true;
    }while (!done);


}
gatherData();

let answer;
// CALL THE APPROPRIATE FUNCTION
switch (calc) {

    case '+':
        answer = add (firstUserEntry,secondUserEntry);
        break;    
    case '-':
        answer = subtract (firstUserEntry,secondUserEntry);
        break;
       
    case '*':
        answer = multiply(firstUserEntry, secondUserEntry);
        break;
    
    case '/':
        answer = divide(firstUserEntry, secondUserEntry);
        break;
}
alert( `The answer to your calculations is: ${firstUserEntry} ${calc} ${secondUserEntry} = ${answer}.`)



