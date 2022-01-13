let arr=["Kristijan",2,"Jana","Petar",3,"6"];
delete arr[1];
delete arr [4];
function check(num){
    for(let i=0;i<num.length;i++){
        }
        if(num.length<3){
            console.log("Nema nad 3 karakteri")
        }
        else{
            console.log("Ima nad tri karakteri");
        }
        console.log(`Ima ${num.length} karakteri`);
        console.log("");
}
check(arr[0])
check(arr[2])
check(arr[3])
check(arr[5])