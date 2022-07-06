// Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum
//  of the digits present in the number.
// Note: You have to complete Number_Sum. No need to take any input.
const Number_Sum = (N) => 
{
	let a,b = 0;
	while (N){
	  a = N % 10;
	  b = b+a;
	  N = parseInt (N/10);
	}
	return b;
};