// Create an interactive calculator!
// For right now, focus on creating the essential functions!
let result;
let eachOper = '+-/*';

function add(num1,num2){
    
    result = parseInt(num1)+parseInt(num2);
    console.log(result);


    return result;
}

function subtract(num1,num2){
    result = parseInt(num1)-parseInt(num2);
    console.log(result);


    return result;
}

function multiply(num1,num2){
    result = parseInt(num1)*parseInt(num2);
    console.log(result);


    return result;
}

function divide(num1,num2){
    result = parseInt(num1)/parseInt(num2);
    console.log(result);
    floatResult = parseFloat(result)

    return floatResult.toFixed(4);
}

// Create variables for operator, num1, num2;
let num1 = '';
let num2 = '';
let oper = '';

// Create function Operate which calls on one of the operator functions

// in order to test which number variable the input should be assigned to:
// I create an array with all the operators used
// Then I use .include 

let operators = ["+","-","/","*"]

// Create a variable that holds what is supposed to be on the display
let displayValue='';

function display(arg){
// Easy access to display textbox
let displayBox = document.querySelector(".display");

displayValue+=arg;


// CASE 1: NUMBER
if (typeof(arg) == 'number'){
    let stringArg = arg.toString();
 // What if its the first number?
 // Create an array testing for each operator in the display box
    let testForOper = operators.map((operator) => {
        return displayValue.includes(operator); // Reads whats in the display textbox and checks for any operators
    })
    // if one is true, then the input must be the second number
    if(testForOper.includes(true)){
        num2 += arg;
        displayBox.textContent += arg;
    }else{
        num1 += arg;
        displayBox.textContent += arg;
    }

// CASE 2: OPERATION

} else if(typeof(arg) == "string" && arg != "=" && arg != 'clear'){
    switch(arg){
        // classifies operation
        case '+':
        oper = '+';
        break;
        case '-':
        oper = '-';
        break;
        case '/':
        oper = '/';
        break;
        case '*':
        oper = '*';
        break;
    }

    displayBox.textContent += arg;
    
    let text = displayBox.textContent;
    let textArray = text.split("");
    let mappedText = textArray.map((item)=>eachOper.includes(item));
    let filteredText = mappedText.filter((item)=>{return item});

    if(filteredText.length > 1){
        display('=');

    }

    

}

// CASE 3: EQUAL SIGN


else if(arg == '='){

    switch(oper){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
    }
    displayBox.textContent = result;
    num1 = result;
    num2 = '';
    oper = '';
    result = '';
    
}

// CASE 4: CLEAR
else if(arg == 'clear'){
    displayBox.textContent = '';
    oper = '';
    num1 = '';
    num2 = '';
}
}