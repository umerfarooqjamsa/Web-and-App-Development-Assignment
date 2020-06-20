/// Assignment: MATH EXPRESSIONS
/*Q1. Wr
browser:
*/
document.write("<h1>Question 1</h1>")
var a=90;
document.write("Result:<br>"+"The value of a is :"+a+"<br><br>")
document.write("The value of ++a is :"+(++a)+"<br>"+"Now value of a is :"+a+"<br><br>")
document.write("The value of a++ is :"+(a++)+"<br>"+"Now value of a is :"+a+"<br><br>")
document.write("The value of ++a is :"+(--a)+"<br>"+"Now value of a is :"+a+"<br><br>")
document.write("The value of ++a is :"+(a--)+"<br>"+"Now value of a is :"+a+"<br>")

//Q2. What will be the output in variables a, b & result after execution of the following script:
document.write("<h1>Question 2</h1>")
var a=23;
var b=9;
--a;
--a - --b;
--a - --b + ++b;
var result=--a - --b+ ++b + b--;
document.write("a is :"+a+"<br>"+"b is :"+b+"<br>")
document.write("result: "+result+"<br><br>")

//3. Write a program that takes input a name from user & greet the use.
var name = prompt("Please enter your name:");
document.write("<h1> Welcome to our website :"+name+"<br>")
//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5
//should be displayed by default.
document.write("<h1>Question 4</h1>");
var table=prompt("Please enter table number:",5);
document.write(table+" x 1 = "+table*1+"<br>"+table+" x 2 = "+table*2+"<br>"+table+" x 3 = "+table*3+"<br>"+table+" x 4 = "+table*4+"<br>"+table+" x 5 = "+table*5+"<br>"+table+" x 6 = "+table*6+"<br>"+table+" x 7 = "+table*7+"<br>"+table+" x 8 = "+table*8+"<br>"+table+" x 9 = "+table*9+"<br>"+table+" x 10 = "+table*10+"<br><br>")

/*Q6. Take

result in browser like this.(Hint: user table)*/
document.write("<h1>Question 6</h1>");
var math="Math";
var eng="English";
var urdu="Urdu";
var total_mark=200;
var math_mark=+prompt("Enter obtained marks :");
var urdu_mark=+prompt("Enter obtained marks :");
var eng_mark=+prompt("Enter obtained marks :");
var total_obt_mark=math_mark+urdu_mark+eng_mark;
document.write("<h6> Subject &nbsp; Total_Marks  Obtained_Marks  Percentage% </h6>")
document.write(eng +" &nbsp;&nbsp;&nbsp; &nbsp;"+total_mark+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  "+eng_mark+" &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; "+((eng_mark*100)/100)+"%<br>")
document.write(math+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;"+total_mark+"&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  "+math_mark+" &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; "+((math_mark*100)/100)+"%<br>")
document.write(urdu +" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;"+total_mark+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  "+urdu_mark+"&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; "+((urdu_mark*100)/100)+"%<br>");
document.write(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;"+(total_mark*3)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  "+total_obt_mark+" &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; "+((total_obt_mark*100)/300)+"%<br>")
