let number =+prompt("Input the number for calculate predecessor and successor");
function calculate(num){
    let predecessor=num-1;
    console.log(`Predecessor is ${predecessor} of munber ${num}`);
    let successor = num+1;
    console.log(`Successor is ${successor} of number ${num}`);
}
calculate(number)