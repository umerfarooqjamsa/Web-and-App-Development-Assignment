
/*1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).*/
document.write("<h1>Question 1</h1>")
var char=prompt("Enter number or string:")

if (char>='A' && char<='Z')
{
document.write(char+" is upper case")
}
else if (char>='a' && char<='z')
{
document.write(char+" is lower case")
}
else
{
    document.write(char+" is number")
}

/*2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.*/
document.write("<h1>Question 2</h1>");
var integer1=+prompt("Enter int1 :");
var integer2=+prompt("Enter int2 :");

if (int1>int2 )
{
document.write(int1+" is greater than "+int2)
}
else if (int1<int2)
{
    document.write(int1+" is less than "+int2)
}
else if (int1==int2)
{
    document.write(int1+" is equal "+int2)
}
else
{
    document.write("please enter not other input like string");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.*/
document.write("<h1>Question 3</h1>");
var integer1=+prompt("Enter number :");

if (integer1>0)
{
document.write(integer1+" is psoitive ");
}
else if (integer1<0)
{
    document.write(integer1+" is negative");
}
else if (integer1==0)
{
    document.write(integer1+" is zero");
}
else
{
    document.write("please enter only integer to check");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
/*4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise*/
document.write("<h1>Question 4</h1>")
var char=prompt("Enter character to check vowel:");

if (char.length==1)
{
 if (char=='a'||char=='i'||char=='e'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
{
    document.write(char+" is a Vowel")
}
else
{
    document.write(char+" is not Vowel ");
}
}
else{
    document.write("please enter single character to check Vowel or not");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*5. Write a program that

“Incorrect password” otherwise.*/
document.write("<h1>Question 5</h1>")
var password=prompt("Enter password :")
var pass="Umer FArooq Jamsa";
if (password === "")
{
    alert("Please enter your password :")
    password=prompt("Enter password")
}
else if (password==pass)
{
document.write(password+" Correct! The password you entered matches the original password")
}
else
{
    document.write(char+" Incorrect password ")
}

/*6. This if/else statement does not work. Try to fix it:
v
}*/
document.write("<h1>Question 6</h1>")
var greeting;
var hour = 13;
if (hour < 18) 
{
greeting = "Good day";
document.write(greeting)}
else{
greeting = "Good evening";
document.write(greeting)
}

/*7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements*/
document.write("<h1>Question 7</h1>")
var time=prompt("Enter time :")
if (time>=0000 && time<1900)
{
    document.write("Good Morning");
}
else if (time>=1900 && time<2700)
{
    document.write("Good afternoon");
}
else if (time>=2700 && time<2800)
{
    
    document.write("Good evening");
}
else if (time>=2800 && time<=2959)
{
    
    document.write("Good Night");
}
else{
    document.write("time is not in 24 hour format");
}
