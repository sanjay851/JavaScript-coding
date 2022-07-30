console.log('Promises');
//Q1.Write one example explaining how you can write a callback function ?
//A function is a block of code that performs a certain task when called. For example,
// function
// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter'); // Hi Peter
//In the above program, a string value is passed as an argument to the greet() function.
// In JavaScript, you can also pass a function as an argument to a function.
//  This function that is passed as an argument inside of another function 
//  is called a callback function. For example,
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
// Output:Hi Peter
// I am callback function
// In the above program, there are two functions. While calling the greet() function,
//  two arguments (a string value and a function) are passed.
// The callMe() function is a callback function.
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
// Q2."Write callback function to print numbers from 1 to 7, 
// in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
// 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4 
// 5
// 6
// 7"
const printNumber = () => {
    let indexSix = [1,2,3,4,5,6,7];
    console.log(indexSix);
    setTimeout(() => {
        console.log(indexSix[0]);
    }, 1000);
    setTimeout(() => {
        console.log(indexSix[1]);
    }, 2000);
    setTimeout(() => {
        console.log(indexSix[2]);
    }, 3000);
    setTimeout(() => {
        console.log(indexSix[3]);
    }, 4000);
    setTimeout(() => {
        console.log(indexSix[4]);
    }, 5000);
    setTimeout(() => {
        console.log(indexSix[5]);
    }, 6000);
    setTimeout(() => {
        console.log(indexSix[6]);
    }, 7000);
}
printNumber();

//Explain callback hell.
// callback are just the name /convention for using javascript .
// it is intead of immediately returinning results like other functions.takes some time to 
// produce the results. so, if we stuck in some particular call which prevents 
//us from making further calls ends us into callback hell .
// the structrure of callback hell looks likes pyramid /arrow shape . 
// this make ourcode like haphazard and makes is hard to understand. 
// we should always try to avoid using multiple callbacks to end up falling
// in to callback hell .
// we uses promises to prevent using callbacks and there by avoiding callback hell .
 const getEmpId = () => {
    setTimeout(() => {
        console.log("fetching the ID's");
        let id = [1,2,3,4,5];
        console.log(id);
        setTimeout(() =>{
            let empDetails = {
                fName : "Harsh",
                lName : "Bajaj",
                age : 28 ,
            }
            console.log(`The name of the employee is ${empDetails.fName} 
            ${empDetails.lName} and the age is ${empDetails.age}`);
            setTimeout(() => {
                empDetails.gender = "Male",
                console.log(`The name of the employee is ${empDetails.fName} 
            ${empDetails.lName} and the age is ${empDetails.age} and gender is ${empDetails.gender}`);
            },2000)
        },2000 )
    }, 2000);
 }

 getEmpId();

// Q3."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
//  2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
const promsieFunction = new Promise((res,rej) => {

        res();
    })

    promsieFunction
        .then(() => {
            setTimeout(()=>{
                console.log("1");
            },1000);
        })

        .then(() => {
            setTimeout(()=>{
             console.log("2");
            },2000);
        })
        .then(() => {
            setTimeout(()=>{
                console.log("3");
            },3000);
        })
        .then(() => {
            setTimeout(()=>{
                console.log("4");
            },4000);
        })
        .then(() => {
            setTimeout(()=>{
                console.log("5");
            },5000);
        })
        .then(() => {
            setTimeout(()=>{
                console.log("6");
            },6000);
        })
        .then(() => {
            setTimeout(()=>{
                console.log("7");
            },7000);
        });


// Q4.Create a promise function accepting a argument, if yes is passed to the function 
// then it should go to resolved state and print Promise Resolved, and if nothing is passed 
// then it should go to reject state and catch the error and print Promise Rejected 
const acceptArgu = new Promise((resolve,reject) => {  
    setTimeout(() => {
          resolve();
          reject();       
      },2000);
  })
  acceptArgu      
     .then((data) => {
        console.log("the promise resolved");//the promise resolved
    })
    .catch((error) => {
        console.log("the promise rejected");
    });

 //5.Create examples to explain callback function
 const callBackFun = () =>{
   let num = ["1","2","3","4","5"];
       console.log(num); //['1', '2', '3', '4', '5']
 } 
 setTimeout(callBackFun,2000);
//Q6.Create examples to explain callback hell function

const getEmployeeID= () => {
    setTimeout(() => {
        console.log("fetching the ID's");
        let id = [1,2,3,4,5];
        console.log(id);
    },10000);
};
getEmployeeID();

//Q7.Create examples to explain promises function
const promiseStu = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let stuName = ["Rohit","Mohit","Virat"];
       resolve(stuName);
       reject();
    },3000);
})
promiseStu
.then((names)=>{
    console.log("promise names",names);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("resolved promise !");
});
//Q8.Create examples to explain async await function
let promiseAsync = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('Here Promise resolved')}, 1000); 
                     });
                    async function asyncFunc() {
                    let result = await  promiseAsync; 
                    console.log(result);
                        console.log('this is async/await');
                     }
                        asyncFunc();

//Q9.Create examples to explain promise.all function
let promiseOne = Promise.resolve(100);
let promiseTwo = 500;
let promiseThree = new Promise(function(resolve, reject) {
    resolve(" Get Here promise all");
    reject();
});

Promise.all([promiseOne, promiseTwo, promiseThree])
.then(function(values) {
    setTimeout(()=>{
        console.log(values);//[100, 500, ' Get Here promise all']
    },2000)    
});





