//USER INPUT & CONDITIONAL STATEMENT 
/*Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”*/
document.write("<h1> Question 1</h1>")
var city=prompt("please enter your city name :")
if (city=="karachi")
{
document.write("<h1> Welcome to the city of Lights </h1>")
}
else
{
    document.write("<h1> This is only karachiest </h1>")
}

/*2. Write a program to take “gender” as input from user. If t message: Good Morning Ma’am.*/

document.write("<h1> Question 2</h1>")
var city=prompt("please enter your Gender :")
if (city=="male")
{
alert(" Good Morning  ");
}
else
{
    alert(" Good Monring  ");
}

/*3. Write a program to take input color of road traffic signal from the user & show the message according to this table:*/

document.write("<h1> Question 3</h1>")
var light1=prompt("Enter first light color :")
var light2=prompt("Enter second light color:")
var light3=prompt("Enter third light color :")
document.write("<pre><h2> Single Color        Message</h2></pre>")
document.write(light1+" "+ "     Must stop <br>")
document.write(light2+" "+"    Ready to move</pre><br>")
document.write(light3+" "+"      Move Now</pre> <br>")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”*/

document.write("<h1> Question 4</h1>")
var city=+prompt("Enter Remaining fuel :")
if (city<0.25)
{
alert(" Please refill the fuel in your car ")
}
else
{
    alert(" the fuel in your car is in level ")
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Run this script, & check whether alert message would be displayed or not. Record the outputs.
document.write("<h1> Question 5</h1>")
 var a = 7;
if (++a === 7){
alert("given condition for variable a is true");
}
 var b = 90;
if (b++ === 90){
alert("given condition for variable b is true");
}
 var c = 92;
if (c++ === 92){
alert("condition 1 is true");
}
if (c === 92){
alert("condition 2 is true");
}
if (++c < 93){
alert("condition 3 is true");
}
if(c === 93){
alert("condition 4 is true");
}
var materialCost = 88888;
var laborCost = 5858;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("carriot" < "cat"){
alert("carriot is smaller than cat");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
 Take percentage & compute grade as per following table:*/
 document.write("<h1> Question 6</h1>")
 document.write("<h1> MARK SHEET </h1>")
 var math_mark=+prompt("Enter obtained marks :")
 var urdu_mark=+prompt("Enter obtained marks :")
 var eng_mark=+prompt("Enter obtained marks :")
 var total_mark=590;
 var obt_mark=math_mark+urdu_mark+eng_mark
 var percentage=obt_mark*100/total_mark
 if (percentage>=80 && percentage<=100)
 {
     document.write("Total Marks:"+total_mark+"<br>")
     document.write("Mark Obtained:"+obt_mark+"<br>")
     document.write("Percentage :"+percentage+"<br>")
     document.write("Garde : A-one <br>");
     document.write("Remarks: Excellent");
 }
 else if (percentage>=70&& percentage<=79)
 {
     document.write("Total Marks:"+total_mark+"<br>")
     document.write("Mark Obtained:"+obt_mark+"<br>")
     document.write("Percentage :"+percentage+"<br>")
     document.write("Garde : A <br>")
     document.write("Remarks: Good")
 }
 else if (percentage>=60 && percentage<=69)
 {
     document.write("Total Marks:"+total_mark+"<br>")
     document.write("Mark Obtained:"+obt_mark+"<br>")
     document.write("Percentage :"+percentage+"<br>")
     document.write("Garde : B <br>")
     document.write("Remarks: You need to improve")
 }
 else
 {
     document.write("Total Marks:"+total_mark+"<br>")
     document.write("Mark Obtained:"+obt_mark+"<br>")
     document.write("Percentage :"+percentage+"<br>")
     document.write("Garde : Fail")
     
 }

/*7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
a. If user guesses the same number, 
“Close enough to the correct answer”.*/
document.write("<h1> Question 7</h1>")
document.write("<h1> Guess Game </h1>")
 var a=9;
 var num=prompt("Guess the secret number :")
 if (num==a)
 {
     document.write(" Correct answer.")
 }
 else if(num==6)
 {
     document.write("Close enough to the correct answer")

 }
 
 /*8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
is divisible by 3.*/
document.write("<h1> Question 8</h1>")
document.write("<h1> Divisible by 3 </h1>")
var a=prompt("please enter a number :")
if (a%3==0)
{
    document.write("Number is divisivle by 3")
}
else{
    document.write("Number is not divisible by 3")
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*9. Write a program that checks whether the given input is an even number or an odd number.*/
document.write("<h1> Question 9</h1>")
document.write("<h1> Even Number </h1>")
var a=prompt("please enter a number :")
if (a%2==0)
{
    document.write("Even Number")
}
else{
    document.write("Odd Number")
}

/*10. Write a program that takes temperature as input and shows a message based on following criteria
”*/
document.write("<h1> Question 10</h1>")
document.write("<h1> Temperature </h1>")
var a=prompt("please enter a Temperature :")
if (a>40 && a<100)
{
    document.write("It is too hot outside.")
}
else if(a>30 && a<40){
    document.write("The Weather today is Normal.")
}
else if(a>20 && a<30)
{
    document.write("Today’s Weather is cool.")
}
else{
    document.write("OMG! Today’s weather is so Cool.")
}
    
    /*Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
*/
document.write("<h1> Question 11</h1>")
document.write("<h1> Calculator </h1>")
var a=+prompt("please enter a First number :")
var b=+prompt("please enter a First number :")
var u=prompt("please enter a First number :")
if (u=='+')
{
    document.write("Add two numbers:" +(a+b))
}
else if (u=='-')
{
    document.write("SUB two numbers:" +(a-b))
}
else if (u=='*')
{
    document.write("MUL two numbers:" +(a*b))
}
else if (u=='/')
{
    document.write("Divide two numbers:" +(a/b))
}
else 
{
    document.write("Modulus:" +(a%b))
}
