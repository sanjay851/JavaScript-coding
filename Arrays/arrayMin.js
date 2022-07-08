// Q10.Congratulations on making up to this question.
//  Let us give you a fairly simple array problem to solve. 
//  If you know how to iterate through the array, you will easily be able to solve this.
//  The problem statement is simple- given 
// N elements, find the minimum and maximum numbers among those elements.
function arrayMin(arr) {
    let min = arr[0];
       for (let x of arr){
       if (min > x){
       min = x;
       }
     }
        return (min);
 }
 function arrayMax(arr) {
   let max = arr[0];
       for (let y of arr){
       if (max < y){
       max = y;
       }
     }
        return (max);
 }
 