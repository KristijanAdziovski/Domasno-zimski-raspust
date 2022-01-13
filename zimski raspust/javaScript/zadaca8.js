let num1=+prompt("Enter the first number");
let num2=+prompt("Enter the second number");
function check(fNumber,sNumber){
    let sum=fNumber+sNumber;
    if(fNumber>30 || sNumber>30 || sum>50){
        console.log(true);
    }
    else{
         console.log(false);
    }
}
check(num1,num2)