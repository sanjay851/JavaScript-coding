console.log("Maps and Sets");

// Q1."Problem:
// You are given a string (STR) of length N, consisting of only the lower case 
    // English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.
// Input:
// abcadeecfb
// Output:
// abcdef"
function duplicate(str){
    const dupli_char = [...new Set(str)]
    console.log(dupli_char.join('')); 
}
    duplicate("abcadeecfb");
    // output:abcdef

    // Q2."Problem:
    // You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
    // Input:
    // abcadeecfb
    //  Output:
    // a=2
    // b=2
    // c=2
    // d=1
    // e=2
    // f=1"
    function count_alpha(Str){
        let a = Str.split('');
        let count = {};
      a.map((item) =>{
      if(count[item]){
         count[item] += 1;
      }
      else{
          count[item] = 1;
      }
    })
      for (s in count){
        console.log(`${s} = ${count[s]}`);
      }
    }
    count_alpha("abcadeecfb");

    output:
        a = 2
        b = 2
        c = 2
        d = 1
        e = 2
        f = 1
    
