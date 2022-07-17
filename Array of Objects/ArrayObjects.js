console.log("working");

let studentRecords = [ 
        {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } 
        ];
    // Question 1 : We are interested in retrieving only the name of
    //  the students and all the names should be in caps.
    // ['JOHN', 'BABA', 'YAGA', 'WICK']
        let names = studentRecords.map( stu => stu.name.toUpperCase());
        console.log(names);
        
        // OUTPUT=(4)['JOHN', 'BABA', 'YAGA', 'WICK']

    // Q2."Question 2: Suppose we have the same dataset as above but
    //  this time we want to get the details of students who scored
    //   more than 50 marks.
    // [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
    let stu = studentRecords.filter(stu => stu.marks > 50);
    console.log(stu);

//  Output=0:{name: 'John', id: 123, marks: 98}
//         1:{name: 'Wick', id: 115, marks: 75}

    // Q3.Question 3: Retrieve the details of students who scored more than 
    // 50 marks and have id greater than 120.
    let markid = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
    console.log(markid);

    // outpot={name: 'John', id: 123, marks: 98}

    // Q4.Question 4: Consider the same scenario we have discussed above,
    //  but this time we would like to know the sum total of the marks of the students.
    let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
    console.log(totalMarks);
    // output=241
    // Q5.Question 5: This time we want to get only the names of 
    // the students who scored more than 50 marks from the same dataset used above.
    let onlyName = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)

        console.log(onlyName);
        output:['John', 'Wick']

// Q6. Question 6: This time we are required to print the sum of
//  marks of the students with id > 120.
let totalMarksid = studentRecords.filter(stu => stu.id > 120).reduce(
    (acc,curr) => acc + curr.marks ,0)
    console.log(totalMarksid);
    output:143

    // Q7.Question 7: This time we are required to print the total 
    // marks of the students with marks greater than 50 after a grace 
    // of 15 marks has been added to those students who scored less than 50.]
    let totalgraceMarks = studentRecords.map(function(stu){ 
        if(stu.marks < 50){
            stu.marks += 15;}
        return stu;
    }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);

    console.log(totalgraceMarks);
    output:233

    //  Q8.Create 6 objects , each object will have name, class, roll no as
    //  properties. Store these objects in an array of objects. 
        const studentClass = class{
            constructor(Name,Class,Roll){
                this.Name = Name;
                this.Class = Class;
                this.Roll = Roll;
            }
        }
        const obj1 = new studentClass('Sanjay','b.tech',1);
        const obj2 = new studentClass('Virat','b.tech',2);
        const obj3 = new studentClass('Joe Root','b.tech',3);
        const obj4 = new studentClass('Rohit','b.tech',4);
        const obj5 = new studentClass('Smith','b.tech',5);
        const obj6 = new studentClass('Buttler','b.tech',6);

        let studentDetails = [obj1,obj2,obj3,obj4,obj4,obj5,obj6];
        console.log(studentDetails);

 // output=(7) [studentClass, studentClass, studentClass, studentClass, studentClass, studentClass, studentClass]
// 0: studentClass {Name: 'Sanjay', Class: 'b.tech', Roll: 1}
// 1: studentClass {Name: 'Virat', Class: 'b.tech', Roll: 2}
// 2: studentClass {Name: 'Joe Root', Class: 'b.tech', Roll: 3}
// 3: studentClass {Name: 'Rohit', Class: 'b.tech', Roll: 4}
// 4: studentClass {Name: 'Rohit', Class: 'b.tech', Roll: 4}
// 5: studentClass {Name: 'Smith', Class: 'b.tech', Roll: 5}
// 6: studentClass {Name: 'Buttler', Class: 'b.tech', Roll: 6}
// length: 7
// [[Prototype]]: Array(0)