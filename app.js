console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


let isInteger = 3; 
userInput = prompt("Input a number");
console.log(userInput)

if (userInput < isInteger) { 
  console.log("too low");
} else if (userInput > isInteger) {
  console.log("too high"); 
} else  {
  console.log("Congratulations!!!");
}



let birthMonth = prompt("What is your birth month");
console.log(birthMonth);
birthMonth = birthMonth.toLowerCase();


switch (birthMonth) {
  case "June":
  case "July":
  case "August":
    console.log("You were born during the summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("You were born during the Fall");
    break;
  case "December":
  case "January":
  case "February":
    console.log("You were born during the Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("You were born during the Spring");
    break;
  default:
    console.log("Please Enter a Vaild Month")
    break;
}






let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01" :
    type = "tank top";
    break;
  case "02" :
   type = "T-Shirt";
   break;
  case "03" :
    type = "Long Sleeve";
    break;
  case "04" :
    type = "Sweat Shirt";
    break;
   default : 
    type = "Other";
    
}


switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "Rd":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";   
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}


console.log(`Product: ${size} ${color} ${type}`);