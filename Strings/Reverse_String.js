// Q9.Reverse the String
// You are given a string 
// S, Your task is to Reverse the string.
// String can contain both upppercase lowercase letters. 
// Note: You have to complete Reverse_String function. No need to take any input.
var Reverse_String = (str) => 
{
   const S = str.split("");
    const reversed = S.reverse();
    const joinStr = reversed.join("");
    return joinStr;  
};
 