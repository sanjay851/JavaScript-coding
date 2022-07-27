console.log("Inheritance and Prototype");
// Q1.Create 2 objects - parent and child. Attach methods to parent and use 
// those methods in child object using parents prototype
const FirstPrototype = {
    getDetails(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
}
FirstPrototype.details = function(){
    console.log(`The person name is ${this.fName} ${this.lName} and the person age is ${this.age}`);
}

const firstObj = Object.create(FirstPrototype);
firstObj.getDetails('rohit', 'kunal', 25);
firstObj.details();

const secondObj = Object.create(FirstPrototype);
secondObj.getDetails('smith', 'jhon', 35);
secondObj.details();

// Q2.Write code to explain prototype chaining
const PrototypeOne = {
    gettingDetails(fName, lName, marks){
        this.fName = fName;
        this.lName = lName;
        this.marks = marks;
    },
    displayDetails(){
        console.log(`The name of the person is ${this.fName} ${this.lName} and the person  marks is ${this.marks}`);
    },
}

const firstPerson = Object.create(PrototypeOne);
firstPerson.gettingDetails('Virat', 'dhoni', 75);
firstPerson.displayDetails();

const addDetails = Object.create(PrototypeOne);

addDetails.addmarks = function(fName, lName, marks, totalmarks){
    PrototypeOne.gettingDetails.call(addDetails, fName, lName, marks,totalmarks);
    this.totalmarks = totalmarks;
}

addDetails.display = function(){
    console.log(`The ,name of the person is ${this.fName} ${this.lName} and the person  got marks ${this.marks} for swimming and total marks is ${this.totalmarks}`);
}

const secondDetails = Object.create(addDetails);
secondDetails.addmarks('Rahul', 'Goutam', 55, 75);
secondDetails.display();

const thirdDetails = Object.create(addDetails);
thirdDetails.addmarks('Krishna', 'Bhola', 55, 60);
thirdDetails.display();

// Q3.Add a method to calculate sum of all elements in Array in array's
//  protype, use that method to calculate sum for multiple arrays
  mainPrototype.calculateTotalPoints =function(arrayOfPoints){
    let sum = 0;
    for(let i in arrayOfPoints){
        sum+= arrayOfPoints[i];
    }
    console.log(`He / She earned total of ${sum}.`);
}

let rohitPoints = [49, 59, 83, 39, 88];

mainPrototype.calculateTotalPoints(rohitPoints);

let kunalPoints = [95, 90, 88, 68, 45];

mainPrototype.calculateTotalPoints(kunalPoints);

// Q4.Write a JavaScript function to
//  retrieve all the names of object's own and inherited properties.
const firstProperty = {
    name: 'Dhoni',
    age : 22
}
const secondProperty = {
    yearOfBirth : 2000
}

secondProperty.__proto__ = firstProperty;
function inheritedPropertyNames(){
    for(let i  in secondProperty){
        console.log(i);
    }
}
inheritedPropertyNames();