// Q1.Count Characters
// You are given a string 
// S, and your task is to return an array B (having a size of 2), 
// where B[0] contains the count of character A (uppercase) in string S and 
// B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input.
const countCharacters = (S) => 
{
  let B=[0,0];
  for(let i=0; i<S.length; i++){
    
    if(S[i] == "A")
    {
      B[0]++;
    }    
    else if(S[i] == "D")
    {
      B[1]++;
    }      
  }
  return (B);
};