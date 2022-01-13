let num1=+prompt("Enter the number");
function number(num){
    if(num%3==0){
        console.log(`The number ${num} divisible by 3`);
    }
    else{
        console.log(`The number ${num} not divisible by 3`);
    }
}
number(num1)