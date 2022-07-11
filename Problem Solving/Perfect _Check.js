// Q3.Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it,
//  Perfect Numbers are integers that are equal to the sum of all its 
//  divisors except that number itself.
// Now, You are given an integer N
// , write a program to check whether the given number is a Perfect Number or not.
// Note: You have to complete Perfect _Check function. No need to take any input.
var Perfect_Check = (N) => 
{
   var temp = 0;
   for(var i=1;i<=N/2;i++)
     {
         if(N%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === N && temp !== 0)
        {
       return "YES";
        } 
     else
        {
       return "NO";
        }   
};