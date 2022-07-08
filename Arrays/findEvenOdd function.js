// Q4.Even Odd
// You are given an array Acontaining N
// integer elements, and your task is to return an array B
//  (having a size equal to 2), where B[0]
//  contains the sum of all even elements of array A and B [1]
//  has the sum of all odd elements of the array A.
// Note: You have to complete findEvenOdd function. No need to take any input.
// Input Format
// The first line of the input contains an integer N
// , denoting the number of elements in the array A.The second line of the input contains 
// N space-separated integers, denoting the elements of array A.
const findEvenOdd = (N, Arr) => 
{
    let odd_sum= 0;
    let even_sum= 0;
    let B=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 === 0 ){
        even_sum += Arr[i];
      }
      else{
        odd_sum += Arr[i];
      }
    }
    B[0]=even_sum ;
    B[1]=odd_sum;
    return B; 
};