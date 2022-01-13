let num1=+prompt("Enter first number");
let num2=+prompt("Enter second number");
function sum(fNumber,sNumber){
    let suma=fNumber+sNumber;
    if(fNumber!=sNumber){
        console.log(`The sum is ${suma}`);
    }
    else{
        console.log(`The sum is  ${suma}  ${suma}  ${suma}`);
    }
}
sum(num1,num2)