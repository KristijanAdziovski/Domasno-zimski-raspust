let arr=[1,2,3,6,5,4,8,9,12,15,19];
function num1(num){
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            let arr2=[];
            arr2=num[i]*2 ;
            console.log(` Even number are :${arr2}`);
        }
        else{
            let arr3=[];
            arr3=num[1]*3;
            console.log(` Odd number are :${arr3}`)
        }
    }
}
num1(arr)