//*********** Global Scope *************** */
// Declare a variable using var outside of any function or block.
// ● Declare a variable using let outside of any function or block.
// ● Declare a variable using const outside of any function or block.
// ● Log all three variables to the console.
// ● Are they accessible globally?
/*
var a = "kabeer";
let b = "Mansoor";
const c = 3.142;

function accessible () {
    console.log("Hello world");
    console.log(a);
    console.log(b);
    console.log(c);
};
accessible();

console.log(a);
console.log(b);
console.log(c);
*/
//Yes they are accessible globally.
//================================================================================


/* Function Scope
● Create a function and declare a variable using var inside the
function.
● Declare a variable using let inside the function.
● Declare a variable using const inside the function.
● Try to log all three variables to the console outside the function.
● What do you observe? */

/*
function funcScope () {
    var a = 5;
    let b = 10;
    const c = 3.142;
}
console.log(a,b,c);
*/
//Errors come (a,b,c) is not defined they are only accessible in the function.
//=====================================================================================


/* Block Scope:

● Use an if statement and declare a variable using var inside the
block.
● Declare a variable using let inside the block.
● Declare a variable using const inside the block.
● Try to log all three variables to the console outside the block.
● What do you observe? */

/*
let condition = true;
if(condition === true){
    var a = "apple";
    let b = "orange";
    const fruitKing = "mango";
};
console.log(a);
console.log(b);
console.log(fruitKing);
*/
//Let and const not accessible outside the block only var is accessible.
//=======================================================================================


/* Hoisting with var:

● Write code where you log a var variable before it is declared.
● What value do you get? */

/*
console.log(a);
var a = "kabeer";
*/
//Output is undefined bcz variable is only declared on top not initialize.
//=======================================================================================


/* Hoisting with let and const:

● Write code where you log a let variable before it is declared.
● Write code where you log a const variable before it is declared.
● What kind of error do you get? */

/*
console.log(letVariable); //Cannot access 'letVariable' before initialization
console.log(constVariable); //Cannot access 'letVariable' before initialization

let letVariable = 2;
const constVariable = 5;
*/
//======================================================================================


/* Re-declaration:

● Try to declare the same variable name twice using var.
● Try to declare the same variable name twice using let.
● Try to declare the same variable name twice using const.
● What happens in each case? */

/*
var a = 5;
let b = 10;
const c = 15;

var a = 20; //value updated re declare successfully
let b = 25;   //Identifier 'b' has already been declared
const c = 22; //Identifier 'c' has already been declared

console.log(a);
console.log(b); 
console.log(c);
*/
//==========================================================================================



/* Re-assignment:

● Declare a variable using var and assign it a value. Then reassign it a
new value.
● Declare a variable using let and assign it a value. Then reassign it a
new value.
● Declare a variable using const and assign it a value. Then reassign it
a new value.
● What happens in each case? */

/*
var a = 5;
let b = 7;
const c = 10;

a = "kabeer";
b = "mansoor";
c = 3.142;

console.log(a); //reassign successfull
console.log(b); //reassign successful
console.log(c); //Error: Assignment to constant variable. we cann't reassign const variable.
*/
//==============================================================================================



/* Temporal Dead Zone (TDZ):

● Declare a let variable inside a block but try to log it before the
declaration.
● Declare a const variable inside a block but try to log it before the
declaration.
● What error do you get? Why? */

/*
console.log(a); //a is not defined
console.log(pi);  //ReferenceError: pi is not defined

{
    let a = 5;
    const pi = 3.142;
}
*/
//================================================================================================



/* When to use var, let, and const:

● Write a piece of code to demonstrate a good use case for var.
● Write a piece of code to demonstrate a good use case for let.
● Write a piece of code to demonstrate a good use case for const. */

/*
//Var is used for function scope where you want to declare and update the variable multiple times.
var a = 5;
if(true){
   var a = 10;
    console.log("inside block " + a); //10
};
console.log("Outside block " + a); //10

//let is used when you want to variable to be block scope and you can update it later but not re declare.
let b = "kabeer";
if(true){
    b = "mansoor"
    console.log("inside block " + b); //mansoor
};
function myFunc (){
    let b = "hello";
    console.log(b); //hello bcz it is function scope
}
myFunc()
console.log("outside block " + b); //mansoor

// const is used when you want to a variable to be constant which is not re declare an d re initialize.
const c = "hi";
if(true){
    c = "bye" //TypeError: Assignment to constant variable.
    console.log("inside block " + c); 
};
function myFunc (){
    let c = 3.142;
    console.log(c); //3.142 bcz it is function scope
}
myFunc()
console.log("outside block " + c);  //hi
*/
//==================================================================================



/* String Interpolation:

● Create variables for a person's first name and last name.
● Use a template literal to create a full name string and log it to the
console. */
/*
let firstName = "kabeer";
let lastName = "Mansoor";
let templateLiterals = `My name is ${firstName} and my father name is ${lastName}`;
console.log(templateLiterals);
*/
//===========================================================================================


/* Multi-line Strings:

● Use a template literal to create a multi-line string (e.g., an address) and
log it to the console.*/
/*
let firstName = "kabeer";
let lastName = "Mansoor";
let address = "Garden karachi";
let phoneNo = 1245367;
let profession = "Software Developer";
let degree = "BSCS";

let result = `Hello my name is ${firstName} <br/> 
my father name is ${lastName} <br/>
i live in karachi my address is ${address} <br/>
My contact no is ${phoneNo} <br/>
I'm a professional ${profession} <br/>
I have enrolled in degree program which is ${degree} <br/>`
console.log(result);
*/
//=============================================================================================



/* Simple Expressions:

● Create variables for two numbers.
● Use a template literal to create a string that includes the sum of the
numbers.
● Log the string to the console. */
/*
let a = 5;
let b = 10;
let sum = `The sum of a&b is ${a+b}`
console.log(sum);
*/
//==============================================================================================



/* Function Calls:

● Create a function that takes two numbers and returns their product.
● Use a template literal to call this function inside a string and log the
result to the console. */
/*
let a = +prompt("Enter first Number");
let b = +prompt("Enter Second Number");

function product (a,b){
    return a*b;
}
let result = `The product of 2 numbers is ${product(a,b)}`
console.log(result);
*/
//===========================================================================================



/* Creating a Tagged Template:

● Write a simple tag function that takes a template string and logs it.
● Use this tag function with a template literal. */
/*
function tagFunc (strings){
    console.log(`Template Strings : ${strings}`);
}

tagFunc`Hello world how are you hope u r fine.`;
*/
//============================================================================================



/* Formatting:

● Write a tag function that formats a string by making it uppercase.
● Use this tag function with a template literal and log the result.*/
/*
function greeting (string){
    return string
}
let result = greeting`hello guys my name is and my age is.`
console.log(result);
*/
//=============================================================================================



/* Conditional Logic:

● Create a variable for the current hour.
● Use a template literal to display a different message depending on
whether it's morning (before 12 PM) or afternoon (after 12 PM). */
/*
let hour = new Date().getHours();
console.log(hour)

let time = hour > 12 ? `It's ${hour-12} pm Good Afternoon` : `Good morning It's ${hour} am`;
console.log(time);
*/
//===============================================================================================


/* Loops within Template Literals:

● Create an array of items (e.g., a shopping list).
● Use a template literal to generate an HTML list (<ul> and <li>
elements) from the array and log it to the console.*/
/*
let arr = ["watch","shirt","pant","socks","boots"];
for(let i =0;i<arr.length;i++){
    console.log(`<ul> <li>${arr[i]}</li> </ul>`);
    document.write(`<ul> <li>${arr[i]}</li><br/> </ul>`);
}
*/
//==============================================================================================



/* Escaping Backticks:

● Create a string that includes a backtick character using a template
literal.
● Log the string to the console. */
/*
let str = `this is backtick: \` inside the string `;
console.log(str);
*/
//===============================================================================================



/* Nested Template Literals:

● Create nested template literals to build a more complex string, such as
a nested HTML structure (e.g., a table with rows and cells).
● Log the result to the console. */

// let qno20 = document.getElementById('qno20');
/*
let result = qno20.innerHTML = 
`<table>
<tr>
<th>Name</th>
<th>Age</th>
<th>Address</th>
</tr>
<tr>
<td>Kabeer</td>
<td>22</td>
<td>ABC</th>
</tr>
<tr>
<td>Ali</td>
<td>25</td>
<td>xyz</th>
</tr>
</table>`
*/
//====================if dynamic
/*
let arr = [
    {name:"kabeer",age:22,address:"abc"},
    {name:"Ali",age:28,address:"xyz"},
    {name:"Sara",age:20,address:"pqr"},
]
let table = `<table>
<tr>
<th>Name</th>
<th>Age</th>
<th>Address</th>
</tr>`;

for(let i =0; i<arr.length;i++){
    table += `<tr>
<td>${arr[i].name}</td>
<td>${arr[i].age}</td>
<td>${arr[i].address}</td>
</tr>`
}

table += `</table>`;

qno20.innerHTML = table;
*/
//==================================================================================================

//21 simpleCondition
/*
let age = +prompt("Enter your age");
let canVote = age >= 18? "Yes" : "No";
console.log(canVote);
*/
//============================================

//22 Even or Odd
/*
let num = +prompt("Enter a number");
let evenOrOdd = num%2===0? "Number is Even" : "Number is odd";
console.log(evenOrOdd)
*/


//23 Grade Evaluation
/*
let score = 70;

let grade = score >= 90 ? "A Grade" : score >= 80 ? "B Grade" : score >=70 ? "C Grade" : score >=60 ? "D Grade" : score<=50 && score >=0 ? "fail" : "Please Enter a Valid Number";

console.log(grade);
*/


//24 
/*
let isLoggedIn = true;
let statusMessage = isLoggedIn === true ? "Welcome back" : "Please login";
console.log(statusMessage);
*/


//25
/*
let isMember = true;
let purchaseAmount = 100;

let discount = isMember === true && purchaseAmount >= 100 ? "You have got 10 percent discount" : "Sorry you dont get any discount";
console.log(discount);
*/


//26
/*
function largerNumber(a,b) {
    let result = a>b? "A is greater" : "B is greater";
    return result;
};
console.log(largerNumber(30,23));
*/


//27
/*
function greet (name) {
    let msg = name === "" ? "Hello guest!" : `Hello ${name}`;
    return msg;
};
console.log(greet("kabeer"));
*/


//28
/*
let arr = ["eagle","owl","parrot","axe","sparrow"];

let filterArr = arr.filter((element)=>{
    return element.length > 3;
});
console.log(filterArr)
*/


//29
/*
let originalArr = ["hello",23,false,"Haha"];
let copiedArray = [...originalArr];

console.log(originalArr);
console.log(copiedArray);

copiedArray.push("apple");


console.log(originalArr);
console.log(copiedArray);
*/


//30
/*
let arr1 = [22,34,56,78];
let arr2 = [1,2,3,4];

let mergeArr = [...arr1,...arr2];
console.log(mergeArr);
*/


//31
/*
let arr = [1,2,3,4,5];
let arr2 = [25,...arr,45];
console.log(arr2);
*/


//32
/*
let originalObj = {
    name: "kabeer",
    age: 22,
    isStudent: true
};

let copiedObj = {...originalObj};

console.log(originalObj);
console.log(copiedObj);

copiedObj.profession = "Software developer";

console.log(originalObj);
console.log(copiedObj);
*/


//33
/*
let obj1 = {
    name: "kabeer",
    age: 22,
    isStudent : true
};

let obj2 = {
    name: "Mansoor",
    age: 48,
    profession: "Service"
};

let mergeObj = {...obj1,...obj2};
console.log(mergeObj) //second object value over write first object values which have same keys
*/


//34
/*
let obj1 = {
    name: "kabeer",
    age: 22,
    email: "kabeermansoor5@gmail.com"
};

let updatedObj = {...obj1};
updatedObj.email = "kabeerkhan@gmail.com";
console.log(updatedObj);
*/

//35
/*
let user = {
    name: "kabeer",
    age: 22,
    email: "abc@gmail.com"
};

let updatedUser = {
    ...user,
    email: "xyz@gmail.com",
    address: "abc road karachi"
};

console.log(updatedUser);
*/


//36 
/*
let numbers = [2,4,6];
function sum (a,b,c){
    return a+b+c;
};
console.log( sum(...numbers));
*/


//37
/*
let arr1 = [1,2,3,4];
let arr2 = [34,321,23,44];
let arr3 = [13,20,39,45];

function combineArrays (...args) {
   return args.flat();
};

console.log(combineArrays(arr1,arr2,arr3));
*/


//38
/*
let a =5;
let b =35;
let c =52;
let d =15;
function multiply(a,...arr){
//  let result = arr.map((data)=> data *a);
//  return result;
//without built in method:
let newArr = [];
for(let i=0;i<arr.length;i++){
    newArr.push(arr[i]*a);
}
return newArr
};
console.log(multiply(a,b,c,d));
*/


//39
/*
let nestedArr = [[1,2,3],[34,67,86],[98,100,23]];
let shallowCopy = [...nestedArr];

console.log(nestedArr);
console.log(shallowCopy);

shallowCopy[1]=[25,50,27,100];
console.log(nestedArr);
console.log(shallowCopy);
*/


//40
/*
function sum (...args) {
    let sumNum=0;
    for(let i=0;i<args.length;i++){
          sumNum += args[i];
          
    }
    return sumNum;   
};

console.log(sum(2,5,4,6,7,89,100));
*/


//41
/*
function average (...args) {
    let averageSum = 0;
    for(let i =0 ; i < args.length ; i++){
        averageSum += args[i];
    }
    return averageSum/args.length
};

console.log(average(5,6,5,4));
*/


//42
/*
let numbers = [23,34,56,78,90];

let [first,...rest] = numbers;

console.log(first);
console.log(rest);
*/


//43
/*
let colors = ['red','green','blue','gray','yellow'];
let [ , , ...remainingColors] = colors;
console.log(colors);
console.log(remainingColors);
*/


//44
/*
let obj = {
    name: "kabeer",
    age: 22,
    email: "kabeermansoor5@gmail.com",
    profession: "Software Developer"
};

let {name,age,...rest} = obj;
console.log(name);
console.log(age);
console.log(rest);
*/


//45
/*
let student = {
    id: 1,
    name: "kabeer",
    grades: 'A',
    info: {
        age: 22,
        major: "BSCS"
    },
};

let {id,name,info:{major,age},...rest} = student;
console.log(id);
console.log(name);
console.log(major);
console.log(age);
console.log(rest);
*/


//46
/*
function filterEven (...args) {
    let newArr = [];
    for(let i=0;i<args.length;i++){
        if(args[i] % 2 === 0){
            newArr.push(args[i]);
        }
    }
    return newArr;
};

console.log(filterEven(2,34,55,45,67,22,10));
*/


//47
/*
function combineAndSort (...args) {
    let mergeArr = args.flat();
    let sortArr = mergeArr.sort((a,b)=>a-b);
    return sortArr;
};

console.log(combineAndSort([2,4,5,6],[3,45,67,34],[78,90,45]));
*/


//48
/*
let fruits = ['apple','banana','cherry'];

let [firstFruit,secondFruit,thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
*/


//49
/*
let colors = ['red','green','blue','yellow'];

let [primaryColor, , tertiaryColor, ] = colors;
console.log(primaryColor);
console.log(tertiaryColor);
*/


//50
/*
let numbers = [1,2,3,4,5];
let [firstNumber,...remainingNumbers] = numbers;

console.log(firstNumber);
console.log(remainingNumbers);
*/


//51
/*
let person = {
    name: "kabeer",
    age: 22,
    city: "karachi"
};

let {name,age,city} = person;

console.log(name);
console.log(age);
console.log(city);
*/


//52
/*
let car = {
    make: 2002,
    model: 'xb205',
    year: 2005
};

let {make:carMake,model:carModel,year:carYear} = car;

console.log(carMake);
console.log(carModel);
console.log(carYear);
*/


//53
/*
let setting = {
    theme: "black",
};

let {theme,language = "English"} = setting;

console.log(theme);
console.log(language);
*/


//54
/*
let nestedArray = [[1,2],[3,4],[5,6]];

let [[a],[b],[c]] = nestedArray;

console.log(a);
console.log(b);
console.log(c);
*/



//55
/*
let profile = {
    username: "kabeer",
    details: {
        email: "abc@gmail.com",
        address: "karachi",
    },
};

let {username,details:{email},details:{address}} = profile;

console.log(username);
console.log(email);
console.log(address);
*/


//56
/*
let data = {
    id: 1,
    info: {
        name: 'Alice',
        age: 25
    },
};

let {id,info:{name},info:{age}} = data;

console.log(id);
console.log(name);
console.log(age);
*/



//57
/*
function printCoordinates ([x,y]) {
    console.log(`the value of x is ${x} and the value of y is ${y}`);
    
};

printCoordinates([2,5]);
*/


//58
/*
function displayUser ({name,age}) {
    console.log(`My name is ${name} and my age is ${age}`);
};
displayUser({name: "kabeer",age:22});
*/


//59
/*
let book = {
    title: "Hitler",
    author: "abc",
    year: 1979
};

console.log(Object.keys(book));
*/


//60
/*
let student = {
    name: 'kabeer',
    age: 22,
    grade: 'A',
    school: 'MBCS'
};

let lengthOfObjectKeys = Object.keys(student);
console.log(lengthOfObjectKeys);
console.log(lengthOfObjectKeys.length);
*/

//61
/*
let product = {
    name: "samsung",
    price: 70000,
    category: "S series"
};

let keys = Object.keys(product);
console.log(keys);
for(let i=0;i<keys.length;i++){
    console.log(keys[i]);
}
*/


//62
/*
let movie = {
    title: "Avengers endgame",
    director: "Paul Heyman",
    year: 2019,
    genre: "abc"
};
console.log(Object.values(movie));
*/


//63
/*
let scores = {
    english: 67,
    science: 50,
    math: 70
};
let Objvalues = Object.values(scores);
console.log(Objvalues);
let sum = 0;

function sumNum () {
for(let i=0;i<Objvalues.length;i++){
    sum += Objvalues[i];
}
console.log(sum);
}

sumNum();
*/


//64
/*
let user = {
    username: "kabeer",
    email: "abc@gamil.com",
    location: "karachi"
};

let objValues = Object.values(user);

for(let i=0;i<objValues.length;i++){
    console.log(objValues[i]);
}
*/


//65
/*
let car = {
    make: 2002,
    model: 2004,
    year: 2004
}

console.log(Object.entries(car));
*/


//66
/*
let person = {
   fName: "kabeer",
   lName: "Mansoor",
   age: 22
};
console.log(Object.entries(person));
*/


//67
/*
let setting = {
    theme: "blue",
    notification: "whatsapp",
    privacy: "password"
};
let arrays = Object.entries(setting);

for(let i=0;i<arrays.length;i++){
    console.log(arrays[i]); 
};
*/


//68
/*
let inventory = {
    apples: 20,
    banana: 5,
    oranges: 15,
    grapes: 10
};

let objKeys = Object.keys(inventory).filter((key)=> inventory[key]>10);
console.log(objKeys);
*/


//69
/*
let temperature = {
    morning: 291,
    afternoon: 297,
    evening: 285,
}

let covertTemp = Object.fromEntries(Object.entries(temperature).map(([key,value])=> [key,value-273]))
console.log(covertTemp);
*/


//70
/*
let roles = {
    admin: "ali",
    editor: "farrukh",
    viewer: "audience"
}

let swapItems = Object.fromEntries(Object.entries(roles).map(([key,value])=>[value,key]));
console.log(swapItems);
*/


//71


// function filterAndMap ([filterFunc,mapFunc]) {

// };
/*
let arr = [1,2,3,4,5,6,7,8,9,10];

function filterAndMap (arr,filterFunc,mapFunc) {
   const filterData = arr.filter(filterFunc) ;
   const mapData =  filterData.map(mapFunc);
   return mapData;
};

function filterFunc (num) {
    return num % 2 !== 0;
}

function mapFunc (num) {
    return num * num;
}

const result = filterAndMap(arr,filterFunc,mapFunc);
console.log(result);
*/


//72
/*
let arr = ["apple","banana","dates","cherry"];

function sortAndReduce (arr,sortFunc,reduceFunc) {
    let sortData = sortFunc(arr);
    let reduceData = reduceFunc(sortData);
    return reduceData;
};

function sortFunc (arr) {
    return arr.sort();
};

function reduceFunc (arr) {
    return arr.reduce((acc,current)=>{
        return `${acc} ${current}`
    });
}

const result = sortAndReduce(arr,sortFunc,reduceFunc);
console.log(result);
*/



//73
/*
function greet(name, printGreeting){
    console.log(name);
    printGreeting();
};
function printGreeting () {
    console.log( `Welcome in the call back function!`);
}

greet("kabeer",printGreeting);
*/


//74
/*
function fetchData (displayData) {
    setTimeout(()=>{
        displayData();
    },3000);
    console.log("Hello world");
};

function displayData () {
    console.log("Data is here......");
}

fetchData(displayData);
*/


//75
/*
let add = (a,b) => {
    return a+b;
};

console.log(add(3,5));
*/


//76
/*
let arr = [1,2,3,4,5];

let newArr = (arr) => { 
   let arr2 = arr.map((data)=>{
        return(  data * data);
    })
    console.log(arr2);
}

newArr(arr)
*/


//77
/*
let outer = () => {
    let x = "hello";
    function inner () {
        console.log(x);
    };
    inner();
};

outer();
*/



//78
/*
function createCounter () {
    let count= 0;
    return function () {
        count++;
        console.log(count);
    }
};

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Counter 1");
counter1();
counter1();
counter1();
console.log("Counter 2");
counter2();
counter2();
*/


//79
/*
function greet (name,greetingMsg = "hello"){
    console.log(`${greetingMsg} ${name}`);
};
greet("kabeer");
greet("kabeer","How are you hope u r fine");
*/


//80
/*
function calculateArea (w=5,h=10) {
    let area = w*h;
    console.log(area);
};

calculateArea();
calculateArea(25,67);
*/


//81
/*
let arr = [1,2,3,4,5];

let newArr = arr.map((data)=>{
    return data*data
});

console.log(newArr);
*/


//82
/*
let words = ["apple", "banana","cherry"];

let newWords = words.map((data)=> {
    return data.toUpperCase()
});

console.log(newWords);
*/



//83
/*
let numbers = [1, 2, 3, 4, 5, 6, 7,8, 9, 10];

let filterNum = numbers.filter((data)=> {
    return data % 2 == 0
});

console.log(filterNum);
*/


//84
/*
let words = ["apple", "banana", "cherry", "date"];

let filterWords = words.filter((data)=> {
    return data.length>5;
});

console.log(filterWords);
*/


//85
/*
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((data)=>{
    console.log(data);
})
    */


//86
/*
let words = ["apple", "banana","cherry"];
words.forEach((data)=>{
    console.log(data.length);
});
*/


//87
/*
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc,current)=>{
    return acc + current;
},0);
console.log(sum);
*/


//88
/*
let words = ["Hello", "world","this", "is", "JavaScript"];

let newString = words.reduce((acc,curr)=>{
    return `${acc} ${curr}`
})

console.log(newString);
*/


//89
/*
let numbers = [1, 3, 5, 7, 8];
 let result = numbers.some((data)=>{
    return data % 2 == 0;
 })

console.log(result);
*/


//90
/*
let words = ["apple", "banana","cherry", "date"];
let result = words.some((data)=>{
    return data.length>5;
});
console.log(result);
*/


//91
/*
let numbers = [2, 4, 6, 8, 10];
let check = numbers.every((data)=>{
    return data % 2 === 0;
});
console.log(check);
*/


//92
/*
let words = ["elephant", "giraffe","hippopotamus"];

let result = words.every((data)=>{
    return data.length > 5;
});
console.log(result);
*/


//93
/*
let numbers = [1, 3, 5, 7, 8];
let findNum = numbers.find((data)=>{
    return data %2 ===0;
});
console.log(findNum);
*/


//94
/*
let words = ["apple", "banana","cherry", "date"];
let result = words.find((data)=>{
    return data.length > 5;
});
console.log(result);
*/


//95
/*
let numbers = [1, 3, 5, 7, 8];
let findNum = numbers.findIndex((data)=>{
    return data %2 ===0;
});
console.log(findNum);
*/


//96
/*
let words = ["apple", "banana","cherry", "date"];
let result = words.findIndex((data)=>{
    return data.length > 5;
});
console.log(result);
*/


//97
/*
let delay = () => {
    return new Promise ((resolve,reject)=>{
        resolve('hello world');
        reject('sorry try again')
        })
};

setTimeout(()=>{
    console.log(delay()); 
},2000)
*/


//98
/*
let fetchData = () => {
    return new Promise ((resolve,reject)=> {
        setTimeout(()=>{
            let obj = { name: "Kabeer", age:22};
            resolve(obj);
        },2000)
       
    });
};

fetchData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
*/

//99
/*
let fetchUserData = () => {
    return new Promise ((resolve,reject)=>{
        let data = {name:"kabeer"};
        let check = data.hasOwnProperty('age')
        if(check === true){
            resolve(data);
        }else{
            reject('Object does not contain age property')
        }
    })
}
fetchUserData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
*/


//100
/*
let getWeather = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const weatherData = {
                city: 'New York',
                temperature: 25,
                condition: 'Sunny'
              };
              resolve(weatherData);
              reject("error")
        },1000)
    })
}
getWeather().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
*/




//101
/*
let sayHello = async () => {
    console.log("wait for 2 seconds");
    let pro = await new Promise((resolve)=>setTimeout(()=>resolve('resolve '),2000));
    console.log(pro);
};
sayHello();
*/


//102
/*
let getUserData = async (fetchUserData) => {
    await fetchUserData();
    fetchUserData().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
};

let fetchUserData = () => {
    let data = {
        username: "kabeer",
        age:30
    }
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
            // reject(err)
        },2000)
    })
};

getUserData(fetchUserData);
*/


//103
/*
let fetchUser = () => {
    return new Promise ((resolve,reject)=>{
       setTimeout(()=>{
        let data = {name:"kabeer",age:22};
        resolve(data);
       },2000);
    })
};

let fetchPosts = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let posts = ["CEO","Manager","CTO"];
        resolve(posts);
        },3000);
    });
};

let getUserAndPosts = async (fetchUser,fetchPosts) => {
    let users = await fetchUser();
    let allPosts = await fetchPosts();

    console.log(users);
    console.log(allPosts); 
};

getUserAndPosts(fetchUser,fetchPosts);
*/


//104
/*
let fetchUser = () => {
    return new Promise ((resolve,reject)=>{
       setTimeout(()=>{
        let data = {name:"kabeer",age:22};
       let check = data.hasOwnProperty('profession');
        if(check === true){
            resolve(data)
        }else{
            reject("Property is not found")
        }
       },2000);
    })
};

async function getUserInfo(fetchUser) {
    try {
        let result = await fetchUser(); 
        console.log(result); 
    } catch (error) {
        console.log("Error:", error);  
    }
};

getUserInfo(fetchUser);
*/


//105
/*
let apiCall = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let data = {id:Math.floor(Math.random()*100), value:Math.random().toFixed(2)};
            let check = data.hasOwnProperty('id');
            if(check===true){
                resolve(data);
            }else{
                reject('Property not found');
            }
        },2000)
    })
};


let getData = async () => {
   try{
    let result1 = await apiCall();
    console.log(result1);

    let result2 = await apiCall();
    console.log(result2);
    
    let result3 = await apiCall();
    console.log(result3);
   }
   catch(error){
        console.log(error);
   }
    
};

getData();
*/