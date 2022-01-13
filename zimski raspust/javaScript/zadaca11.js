let fname = prompt("Input your name");
function names(namE){
    for(let i=0;i<namE.length;i++){
        let lastc=namE[i-1];
        let prelast=namE[i-2];
        if(prelast == "a" && lastc == "n"){
            console.log("Hit");
        }
        else{
            console.log("No hit");
        }
    }
}
 
names(fname)