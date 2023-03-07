// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(firstUserEntry, secondUserEntry, calc) {
    let answer;
        switch (calc) {
            case '+':
                answer = firstUserEntry + secondUserEntry;
                return answer;
    
                break;
            case '-':
                answer = firstUserEntry - secondUserEntry;
                return answer;
                break;
            case '*':
                answer = firstUserEntry * secondUserEntry;
                return answer;
    
                break;
            case '/':
                answer = firstUserEntry / secondUserEntry;
                return answer;
                break;
    
            default:
                break;
        }
    
    }
        calculate();
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(firstUserEntry,secondUserEntry) {
    return calculate(firstUserEntry, secondUserEntry, "+");
}


// SUBTRACT FUNCTION
function subtract(firstUserEntry,secondUserEntry) {
    return calculate(firstUserEntry, secondUserEntry, "-");
}


// MULTIPLY FUNCTION
function multiply(firstUserEntry,secondUserEntry) {
    return calculate(firstUserEntry, secondUserEntry, "*");
}


// DIVIDE FUNCTION
function divide(firstUserEntry,secondUserEntry) {
    return calculate(firstUserEntry, secondUserEntry, "/");

}


// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, subtract, multiply, divide }