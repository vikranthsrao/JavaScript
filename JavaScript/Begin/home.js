//Day 1
console.log("Hi Welcome")
console.log("Hello")
//alert("Danger!!!")

//Variables

var str="Text variable";
console.log(str);
var number=7;
console.log(number);
document.getElementById('no').innerHTML="Hey There";
//var age=prompt("Enter your age");
//document.getElementById('age').innerHTML=age;

//Numbers

var n1=10.5;
n1+=20;
n1--;
console.log(n1);

/*function
1.Create function
2.Call function
*/

function fun()
{
    console.log("This is Function");
}
fun();

//String concatination

/*function greeting()
{
    var name=prompt("Whta is your name?");
    console.log("Hello "+name);
}
greeting();*/



//Best method of function

function greet(myname)
{
    console.log("Hi " + myname);
}

/*var name=prompt("Enter name?");
greet(name);*/

function sum(n1,n2)
{
    var res=n1+n2;
    console.log("Result="+res);
}
sum(10,15);


//while loop
var i=0;
while(i<100)
{
    i+=1;
    console.log(i);
}
//for loop
for(let i=1;i<=100;i++)
{
    console.log(i);
}




//Data types
let num=10;//number
let name="T20";//string
let employee={firstname : "Vikranth",lastname:"Rao"};//object
let fruit=['apple','mango','banana'];//array or list
let f=false;//boolean
let un;//undefined
let n=null;//null value
console.log(num+" "+name+" "+employee+" "+fruit+" "+f+" "+un+" "+n);
document.getElementById('display').innerHTML=num+" "+name+" "+employee+" "+fruit+" "+f+" "+un+" "+n;

//Day 2

//String Methods
let fruits="banana";
let morefruit='apple,mango,orange';
console.log(fruits.length);
console.log(fruits.charAt(2));
console.log(fruits.indexOf("an"));
console.log(fruits.slice(2,6));
console.log(fruits.split(""));//Split by character
console.log(morefruit.split(','));//split by comma


//Array Methods
let animal=['dog','cat','tiger','lion'];
let bird=new Array('crow','parrot','peackock','penguin');//2nd Method to declare array

console.log(animal.length);
console.log(animal.toString());
console.log(animal.join('#'));
console.log(animal.pop(),animal);//removes last ele from array
console.log(animal.push("cow"),animal);//appends
console.log(animal.shift(),animal)//removes first ele
console.log(animal.unshift('deer'),animal)//adds first ele
console.log(animal.concat(bird));//concats two arrays

let s=[10,2,8,027,999,745,10,7];
console.log(s.sort(function (a,b){return a-b;}));//sort in ascending order
console.log(s.sort(function (a,b){return b-a;}));//sort in descending order


let no=new Array();
for(let i=0;i<10;i++)
{
    no.push(i);
}
console.log(no);





//Objects in Javascript or Dictionary

let student={first:'Anil',
            last:'Kumar',
            age:58,
            weight:70,
            studentinfo:function std(){return this.first +'\n'+ this.last +'\n'+this.age}
            };
//student.last="Rao";
console.log(student.first,student.last);
console.log(student.studentinfo());




//if else statement
var age=45;//prompt("Enter age");
if(age>=18 && age<=80)
{
console.log("Valid audince")
}
else{
    console.log("Not my audience")
}

//switch statment
//var ch=prompt("Enter number")
var text="";
switch(10)
{
    case 1:text='Case 1';
            break;
    case 2:text='Case 2';
            break;
    case 10:text='Case 10';
            break;
    default:text='Invalid entry';
}
console.log(text);

//time 1:36:40