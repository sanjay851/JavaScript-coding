console.log("Working");

// Q1.Add two Numbers
// You are provided with two numbers 
// A and B
// Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.

const AddTwoNumbers = (a,b) => {
    return a+b;
}

// Q2.Find if the conditions are obeyed or not?
// You are given two number first as 
// A and second as B and check if both conditions (A<10and A>B)
//  are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.
const Is_Valid = (a,b) => {
    if(a<10 && a>b){
      return true;
    }
    else{
      return false;
    }
  };

//   Q3.Check the conditons
//   You are given two numbers A and B .You need to do the following checks:
//     1.if both are divisible by 10 console true.
//     2.if both are not divisible by 10 console false.
//     3.if one of them only is divisible by 10 console true.
//     Use operator to do this.
//     Note: You have to complete Check function. No need to take any input.
const Check = (A, B) => 
{
    return ((A%10===0 && B%10===0) || (A%10===0 || B%10===0))?"true":"false";
};

// Q4.Find the first digit of a 4 digit number
// You are provided a four digit number N only. 
// Your task is to print out the first digit of that number.
// Note: You have to complete First_Digit function. No need to take any input.
const First_Digit = (n) => {
    return(n-(n%1000))/1000;
 };

//  Q5.Find the last digit of a 4 digit number
//     You are provided a four digit number N only. 
//     Your task is to print out the last digit of that number.
//     Note: You have to complete Last_Digit function. No need to take any input.
const Last_Digit = (n) => {
    return n%10;
 };

//  Q6.Find the remainder
//     You are provided with two numbers A and B where A as  divisor and  B as 
//     dividend.Your task is find the remainder.
//     Note: You have to complete Find_the_remainder function. No need to take any input.
const Find_the_remainder = (a,b) => {
    return(b % a );
};

// Q7.Multipy two Numbers
// You are provided with two numbers A and B
// . Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.
const Multiply_two_number = (a,b) => {
    return(a*b);
};

// Q8.Marks Calculator
// Shyam has got his marks in three subjects as A, B, and C
//  (out of 100).Write a program to calculate his total marks and his average.
//  Note: You have to complete Sum and Average functions. No need to take any input.
const Sum = (A, B, C) => 
{
 return(A+B+C);
};

const Average = (A, B, C) => 
{
 return(A+B+C)/3;
};

  
