// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city = prompt("Enter Your City");
// if (city == "karachi" || city == "Karachi") {
//   alert("“Welcome to city of lights”");
// } else {
//   alert("You are From: " + city);
// }
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Enter Your Gender");
// if (gender == "Male" || gender == "male") {
//   alert("“Good Morning Sir”");
// } else if (gender == "Female" || gender == "female") {
//   alert("Good Morning Ma’am");
// } else {
//   alert("You have Entered Wrong Input");
// }
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// var signal = prompt("Enter  color of road traffic signal");
// if (signal == "Red" || signal == "red") {
//   alert("Must Stop");
// } else if (signal == "Yellow" || signal == "yellow") {
//   alert("Ready to move");
// } else if (signal == "Green" || signal == "green") {
//   alert("Move now");
// } else {
//   alert("You have Entered Wrong Input");
// }
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// var fuel = +prompt("Enter remaining fuel in litres");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("You have fuel in your car");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// var a = 4;
// // debugger;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
//     else{
//         alert("given condition for variable b is not true"); 
//     }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
    // if (false){
    // alert("False");
    // }
    // if("car" < "cat"){
    //     alert("car is smaller than cat");
    //     }
        var num1 = +window.prompt("Enter First Number: ");
        var num2 = +window.prompt("Enter Second Number: ");
        var operand = prompt("Enter Operand: ")
        result1 = num1 + num2;
        result2 = num1 - num2;
        result3 = num1 * num2;
        result4 = num1 / num2;
        result5 = num1 % num2;
        // debugger;
        if(operand == "+")
        {
            document.write("result of Addition: "+result1)
        console.log("result of Addition: "+result1);
        }
       else if(operand == "-")
        {
            document.write("result of Subtraction: "+result2)
            console.log("result of Subtraction: "+result2);
        }
       else if(operand == "*")
        {
            document.write("result of Multiplication: "+result3)
        console.log("result of Multiplication: "+result3);
        }
        else if (operand== "/")
        {
            document.write("result of division: "+result4)
            console.log("result of division: "+result4)
        }
        else if (operand== "%")
        {
            document.write("result of Modulas: "+result5)
            console.log("result of Modulas: "+result5)
        }
        else{
            document.write("You have Entered wrong Operand")
            console.log("You have Entered wrong Operand")
        }