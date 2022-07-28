console.log("COUNTER");
//Q1.Print output
//Closure means that an inner function always has access to the variables
//and parameters of its outer function, even after the outer function has returned.
// function OuterFunction() {

//     var outerVariable = 1;

//     function InnerFunction() {
//         alert(outerVariable);
//     }

//     InnerFunction();
// }
// var func=OuterFunction();

    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;//counter=counter+1;
    };

    return IncreaseCounter;
}

var counter = counter();
   alert(counter());//1
   alert(counter());//2
   alert(counter());//3
   alert(counter());//4

// Q2.
 for (var i = 0; i < 3; i++) {
     setTimeout(function log() {
       console.log(i); // What is logged?
     }, 1000);
   }
   //output=3(3 print after 1 seconds)
// Q3.Write a code to calculate area of a rectangle using inner function
//  In this case outer function should accept parameter length and inner 
//  function should accept parameter breadth.
function areaRectangle(a,b){
    let length = a;
    return function(){
      let breadth = b;
      area = length * breadth;
      console.log(`The area of rectangle is ${area}`);
    }
}
let rectangle =  areaRectangle(5,10);
rectangle();//50

//---------------------------------------------------------------------------------------
// Q4.Take a variable in outer function and create an inner function 
// to increase the counter every time it is called
console.log("closures");

//---------------------------------------------------------------------------------------
// Q5.
//Print Output
var a = 12;
(function () {
  alert(a);
})();
//Output - (alert) 12
//---------------------------------------------------------------------------------------
// Q7.var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);//12
    };
    })();
    x();

//---------------------------------------------------------------------------------------
//Q8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = "  + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar= " + globalVar);
    
        })(456);
    })(123);
    // outerArg = 123
    // innerArg = 456
    // outerVar = a
    // innerVar = b
    // globalVar= xyz
