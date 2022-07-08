// Q5.Find whether the number is present or not
// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.
// Note: You have to complete Find_Num. No need to take any input.
const Find_Num = (array,N,M) => 
{
  for (let i=0; i<N ; i++){
    if(M === array[i]){
      return ('YES') ;
    }
  }
  return ('NO') ;
};