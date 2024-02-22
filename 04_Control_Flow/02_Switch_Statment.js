// switch case is used to test multiple conditions

// basic sytnax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month =3;

// break is used to break the control flow wherever the key matches the whole code 
// below it will be executed including the default statement, to break that flow we use break statement
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:  // here we an use strings as well to check the conditions numbers are not necessary
        console.log("February");
        break;
    case 3:
        console.log("March");
        // break;  // if we dont't use break the below lines will be executed automatically

    case 4:
        console.log("April");
        // break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Not a valid month")
        break;
}


