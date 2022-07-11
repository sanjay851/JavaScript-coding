// Q3.Count the Vowels
// You are given a string S
//  containing both uppercase and lowercase letters. You need to find out the 
//  number of vowels in the given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
var Count_Vowels= (S) => 
{
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  for(let i in S){
    for(let j in vowels){
      if(vowels[j] === S[i].toLowerCase()){
        count++;
      }
    }
  }
  return count;    
};