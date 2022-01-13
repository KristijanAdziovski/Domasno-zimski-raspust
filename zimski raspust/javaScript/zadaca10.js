let fName = prompt("Input your name");
function input(ime){
    for(let i=0;i<ime.length;i++){
        if(ime[0] == "a" || ime[0] == "e" || ime[0] == "i" || ime[0] == "o" || ime[0] == "u"){
            let zaedno =ime.concat(" Hit")
            console.log(`Hit ${zaedno}`);
        }
        else{
            console.log(ime);
        }
    }
}
input(fName)