// Q2.Count the Heads
// Tina is given a string  S which contains the first letter of all the student 
// names in her class. She got a curiosity to check how many people have their
//  names starting from the same alphabet. So given a string  S , 
//  she decided to write a code that finds out the count of characters that 
//  occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.
var Count_Occ = (s) => 
{
   let result = '';
  const uniqueSet = new Set(s.split(''));
  let array = [];
  for(const element of uniqueSet){
    array.push(element);
  }
  array.sort();
  for(let i in array){
    let count = 0;
    for(let j in s){
      if(array[i] === s[j]){
        count++;
      }
    }
    if(count > 1){
      result +=array[i]+count;
    }
  }
  return result; 
};