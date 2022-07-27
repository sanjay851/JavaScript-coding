console.log("functions");
//Q1.Create one function with zero parameter having a console statement;
function myFunction(){
    console.log("empty parameter");
    }
    myFunction();//empty parameter
//--------------------------------------------------------------------------------------
// Q2.Create one function which takes two values as a parameter and 
// print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    let add = a + b;
    console.log(' sum of ' + a + ' , ' + b + ' is: ' + add);
}
add(3,4);
//--------------------------------------------------------------------------------------
//Q3.Create one arrow function
// Arrow function is one of the features introduced in the ES6 version of JavaScript.
//  It allows you to create functions in a cleaner way compared to regular functions. 
//  For example,
//Arrow functions allow us to write shorter function syntax:
//The syntax of the arrow function is:
//let myFunction = (arg1, arg2, ...argN) => {
 //   statement(s)
//}
//let greet = () => console.log('Hello');
//greet(); // Hello
let greet = () =>{

 console.log('Hello');
}
greet(); // Hello

//--------------------------------------------------------------------------------------
//Q4."Print output: 
    var x = 21;
    var girl = function () {
    console.log(x);
    var x = 20;
    };
    girl();//Undefined
    //-----------------------------------------------------------------------------------
    //Q5."Print output: 
        var x = 21;
        girl ();//undefined
        console.log(x)//21
        function girl() {
            console.log(x);
            var x = 20;
        };
//---------------------------------------------------------------------------------------
//Q6."Print output
    var x = 21;
     a();//functions.js:53 Uncaught ReferenceError: a is not defined
     b();//functions.js:54 Uncaught ReferenceError: b is not defined
     console.log(a);//functions.js:55 Uncaught ReferenceError: a is not defined
    a = function() {
    x = 20;
    console.log(x);
    };
    b = function()
    {
    x = 40;
   console.log(x);
    };
//---------------------------------------------------------------------------------------
//Q7.Write a function that accepts parameter n and returns factorial of n
//The iterative approach
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);
  //output=24

