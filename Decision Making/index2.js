console.log("Decision Making");


// Q1.Calculator
// Write a program to make a simple calculator using switch statement
// that takes operator and two numbers from user and print the result after operation.
// Note: You have to complete Calculator. No need to take any input.
const Calculator = (A, B, C) => 
{
	switch (A) {
   case "+": 
     return (B + C);
   case "-": 
     return (B - C);
   case "*":
     return (B * C);
   case "/":
     return (B / C);
      default:
     return ("invalid");
	}
  };

//   Q2.Check whether the condition is fulfilled or not?
//   Write a program that takes a number and prints whether the number is divisible by 6 and 
//   9 or not.
//   Note: You have to complete Check_divisibility. No need to take any input.
const Check_divisibility = (N) => {
    if(N%6==0 && N%9==0){
      return "Divisible by both"
    }
    else{
      return "Not Divisible by both"
    }
};

// Q3.Eligible Voter
//     You are given an integer A, denoting the age of a person, 
//     and your task is to determine whether he/she is eligible to vote or not.
const isEligible = (a) => {
    if(a>=18){
      return "Eligible for Voting"
    }
    else{
      return "Not Eligible for Voting"
    }
};

// Q4.Find Relation
//     PrepBuddy wants you to get familiar with various Relational operators.
//      He provides you with two integer values Xand Y
//      and asks you to find the relation between them.
//      The relationships between integers Xand Y are as follows:
//      If X<Y, it means that Xis smaller than Y.If X>Y, it means that Xis greater than Y.If 
//     X = Y, it means that  Xis equal to Y. 
const findRelation = (x,y) => {
    if(x < y){
      return (x + " is smaller than "+ y);
    }
    else if(x > y){
      return (x + " is greater than "+ y);
    }
    else{
      return (x + " is equal to " + y);
    }
};

// Q5.Find Grades
//     Your school has the following grading system based upon
//      the marks(M) obtained by a student:If M ≤10, the grade will be E.If 11≥M≤20
//      , the grade will be  D.If 21≥M≤30, the grade will be C.If 31≥M≤40, the grade will be 
//     B.If 41≥M≤50, the grade will be A.
const findGrades = (a) => {
    switch (true) {
   case (a<=10): 
     return ("E");
     break;
   case (a>=11 && a<=20): 
     return ("D");
     break;
  case (a>=21 && a<=30): 
     return ("C");
     break;
   case (a>=31 && a<=40): 
     return ("B");
     break;
     case (a>=41 && a<=50): 
     return ("A");
     break;
    }
};

// Q6.Get Value
// You are provided with a table containing some characters
//  and their corresponding values. Your task will be to find
//   the value from the table corresponding to an input character and return it.
//   | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|
// Note: You have to complete getValue function. No need to take any input.
const getValue = (a) => {
    if((a=="P") || (a=="p")){
      return("PrepBytes");
    }
    else if((a=="Z") || (a=="z")){
      return("Zenith");
    }
    else if((a=="E") || (a=="e")){
      return("Expert Coder");
    }
    else if((a=="D") || (a=="d")){
      return("Data Structure");
    }
    else{
      return("You Type Wrong character");
    }
    
  };

//   Q7.Find the maximum out of three numbers.
//   Take three numbers and print the largest number among them
//    if all of three are same print  −1.
//    Note: You have to complete Max_out_of_three. No need to take any input.
const Max_out_of_three = (A,B,C) => {
    if(A>B && A>C){
      return A;
    }else if(B>A && B>C){
      return B;
    }else if(C>A && C>B){
      return C;
    }else{
      return -1;
    }

};

// Q8.Second Smallest
// You are given 3 distinct integers X,Y, and Z,
//  and your task is to find and return the second smallest integer
//   among the three provided integers.
//   Note: You have to complete findSndSmallest function. No need to take any input.
const findSndSmallest = (x,y,z) => {
    if((x>y && x<z) || (x>z && x<y)){
      return x;
    }else if((y>x && y<z) || (y>z && y<x)){
      return y;
    }else{
      return z;
    }
};

// Q9.Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether 
// the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input
const Triangle_Check = (A,B,C) => {
    if(A<90 && B<90 && C<90){
      return "acute";
    }else if((A>90 && A<180) || (B>90 && B<180) || (C>90 && C<180)){
      return "obtuse"
    }else{
      return "invalid"
    }
 };
 