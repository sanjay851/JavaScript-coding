// Q9.Unique Color Shirt
// Prepbuddy is very tasteful of clothes. 
// He has N numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, 
// whenever he see there are two or more shirts with the same color, 
// he removes all the shirt of that color from his wardrobe. Now, 
// he wants to know how many M unique color shirts are left in the wardrobe. 
function Unique_Shirts (arr,N) {

    let unique = arr.filter((value) => 
    arr.indexOf(value) === arr.lastIndexOf(value));
         return(unique.length);
   
   }