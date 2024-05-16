// Create an interactive calculator!
// For right now, focus on creating the essential functions!

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

// Create variables for operator, num1, num2;
let num1, num2, oper;

// Create function Operate which calls on one of the operator functions

function operate(num1,num2,oper){
    switch (oper) {
        case "addition":
            add(num1,num2);
        case "subtraction":
            subtract(num1,num2);
        case "multiplication":
            multiply(num1,num2);
        case "division":
            divide(num1,num2);
    }
}