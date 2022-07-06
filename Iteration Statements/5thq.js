// Print the Odds.
// Write a program which takes  a number from user and print all odd
//  numbers in between 2 and N, but print 2 first.
// Note: You have to complete Print_Odd. No need to take any input.
const Print_Odd = (N) => 
{
	  let i = 2;
  {
    console.log(i);
  }

  while(i<N){
    if (i%2 === 0){
      i++;
    }
    console.log (i);
    i++;
  }  
};