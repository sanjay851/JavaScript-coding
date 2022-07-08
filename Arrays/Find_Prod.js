console.log("Arrays");
// In JavaScript, array is a single variable that is used to store different elements.
//  It is often used when we want to store list of elements and access them by a single
//   variable.
const array=['hello', 'world', 'welcome'];// Here, words is an array.
    console.log(array);
    
    // empty array
const myList = [ ];
console.log(myList);

// array of numbers
const numberArray = [ 2, 4, 6, 8];
    console.log(numberArray);

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];
    console.log(stringArray);

    // array with mixed data types
const newData = ['work', 'exercise', 1, true];
    console.log(newData);

    // Q1.Find the Product.
    // Write a program that takes an array as input from the user 
    // and find out the product of the elements.
    // Note: You have to complete Find_Prod. No need to take any input.
    // Input Format
    // The input contains a single number N, followed by Nnumbers as array elements.
    // Output Format
    // Return the required answer.
    const Find_Prod = (array, N) => 
{
 
   let prod = 1;
  for (let i = 0;i<N;i++)
  {
    prod = prod * array[i];
  }
  return prod;  

};
console.log( Find_Prod);
    
