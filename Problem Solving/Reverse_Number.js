// Q4.Reverse a Number.
// Write a program which takes a numebr 
// N as input from the user and You need to reverse the number.
// Note: You have to complete Reverse_Number function. No need to take any input.
var Reverse_Number = (N) => 
{
  return (parseFloat(N.toString().split('')
  .reverse().join('')) * Math.sign(N));

};