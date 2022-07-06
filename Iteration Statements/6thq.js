// Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .
// Note: You have to complete Print_pattern. No need to take any input.
const Print_pattern = (N) => 
{
for( i = 0 ; i < N ;i++){
  let star= '*';
  for(j = 0 ; j < i ; j++){
  star = star + '*';
}
  console.log(star);     
}
};

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);