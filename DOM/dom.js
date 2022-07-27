console.log("Document Oject Model");

// Q1.Write the code to access element which is having id as "text"
var text = document.getElementById('text');
//console.log(text);
text.innerText = "Elevation Academy - Full Stack web development career"
text.style.backgroundColor='orange';
//text.innerHTML = '<h1>hello Sanjay</h1>'

//Q2.Write the code to access element which is having tag as "h1"
var tagName = document.getElementsByTagName('h1');
//console.log(tagName[0]);

tagName[0].innerText = 'PrepBytes';
tagName[0].style.color = 'skyblue';

//Q3.Write the code to access element which is having class as "box"
var box = document.getElementsByClassName('box');
// console.log(box);
box[0].innerText = "Dom Box";
box[0].style.backgroundColor = 'grey';
box[0].style.height = '30px';
box[0].style.width = '30px';
box[0].style.textAlign = 'center';
box[0].style.padding = '50px';
box[0].style.borderRadius = '10px';
//----------------------------------------------------------------------------------------
// Q4."<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
var change = document.getElementsByTagName("h2");
change[0].innerText='Hello World';
change[0].style.color='green';
change[0].style.color='green';
//---------------------------------------------------------------------------------------
// Q5.Create three cards on HTML page and arrange them using flex property 
// in row or horizontal direction and also create button at the bottom 
// named "Change Flex direction". When user clicks on this button, 
// the cards arrangement should be changed to vertical direction.
function changeDirection(){
    document.getElementById("flex").style.flexDirection = 'column'
    document.getElementsByClassName('box1')[1].style.backgroundColor = 'red'
    document.getElementsByClassName('box1')[2].style.backgroundColor = 'orange'
}
var colorChange = document.getElementById("btn");
colorChange.style.color = 'greenyellow';
colorChange.style.backgroundColor = 'blue';
//---------------------------------------------------------------------------------------
// Q6.What’s the difference between window vs document?
//DONE IN HTML PAGE
// Q7."<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute 
// and give the id value as ""heading"" in the above given h1 tag using DOM functions"
function set() {
    var change = document.getElementsByTagName("h1")[1];
    change.style.color='red';
    change.setAttribute("id","heading");
}
// Q8.Create an HTML page having content as Hello world and a button named Replace Text.
//  When user will click on this button page content should 
//  be changed to "Welcome to Elevation academy"
function replaceText(){
    var replace = document.getElementsByTagName('h1')[2];
    replace.innerText='Welcome to Elevation academy'
    replace.style.color='blue'
}
// Q9.Write code to implement timer clock using JS -- display HH:MM:SS -- 
// the time should keep updating every second
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
         session = "AM";
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();
// Q10.Create a select drop down for selecting Year 20-21, 21-22 etc.
//  Print the item text selected
    let slectOption=document.getElementById('year');
    function setYear(){
    var Year = slectOption.options[slectOption.selectedIndex].innerText;
     document.getElementById('showbox').innerText= `${Year}`;
    }
// ------------------------------------------------------------------------------------
// Q11."Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } else {
      alert("Invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }
 //--------------------------------------------------------------------------------------
 //----
 function yearValidation(year,ev) {
    var text = /^[0-9]+$/;
    if(ev.type=="blur" || year.length==4 && ev.keyCode!=8 && ev.keyCode!=46) {
      if (year != 0) {
          if ((year != "") && (!text.test(year))) {
              alert("Please Enter Numeric Values Only");
              return false;
          }
          if (year.length != 4) {
              alert("Year is not proper. Please check");
              return false;
          }
          var current_year=new Date().getFullYear();
          if((year < 1995) || (year > current_year))
              {
              alert("Year should be in range 1995 to current year");
              return false;
              }
          return true;
      } }
  }
