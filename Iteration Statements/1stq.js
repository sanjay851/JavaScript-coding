// Find the number of digits
// Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits. No need to take any input.
const Find_Digits = (N) => 
{
	 var count=0;
	
  if(N>=1)
  count++;
  
  while(N/10>=1)
  {
    N= N/10;
    ++count;
  }
return count;

};