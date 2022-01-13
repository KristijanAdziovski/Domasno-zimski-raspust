let sum ;
for(let i=1;i<6;i++){
 sum =+prompt(`Enter the ${i} example`);
    sum=sum+i;
}
console.log(sum);
function student(suma){
    if(suma>8){
        alert("The student passed");
    }
    else{
        alert("the student not passed");
    }

}
student(sum)