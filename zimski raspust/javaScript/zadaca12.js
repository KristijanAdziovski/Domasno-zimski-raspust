let grade = prompt("Enter a grade ");
let newGrade= grade.toLowerCase();
function test(input){
    switch (input){
        case "a":
            console.log("Excellent job");
            break;
            case "b":
                console.log("Good job");
                break;
                case "c":
                    console.log("Passed");
                    break;
                    case "d":
                        console.log("Not so god");
                        break;
                        case "f":
                            console.log("Failed")
                            break;
                            default:
                                console.log("Unknown grade!")
    }
}
test(newGrade)