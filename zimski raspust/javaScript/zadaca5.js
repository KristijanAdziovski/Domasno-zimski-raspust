let num1=+prompt("Input the first number");
let num2=+prompt("Input the second number");
function calculator(fNumber,sNumber){
    if(fNumber<0 || sNumber<0){
        alert("You input negativ number ");
    }
    else if(100-sNumber<100-fNumber){
        console.log(`The number ${sNumber} is closer to 100 `);
    }
    else if (100-fNumber<100-sNumber){
        console.log(`The number ${fNumber} is closer to 100 `);
        
    }
    else{
        console.log("you dont insert number");
    }
}
calculator(num1,num2)