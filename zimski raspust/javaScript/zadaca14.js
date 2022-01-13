let arr = ["Kristijan","Stefan","Marko","Jana"];
function joins(fname){
    let i=0;
    let sum=[];
    while(i<fname.length ){
        sum=sum+fname[i];
        i++;
    }
    console.log(sum);
}
joins(arr)