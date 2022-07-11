// Q2.Check whether the year is Leap year or not.
// Write a program which takes an year 
// N as input from the user and find out whether the given year is a Leap Year or not.
// Note: You have to complete Check_Leap function. No need to take any input
var Check_Leap = (year) => 
{
   const Feb = new Date(year, 1, 29).getDate() === 29;
    if (Feb) {
        return ("Leap Year");
    } else {
        return ("Non Leap Year");
    }
};