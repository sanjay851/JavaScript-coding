console.log('JQuery');
// Q1.Create a button , on click of which you should be able to hide a paragraph text, 
// create another button onclick of which this paragraph should be visible.
function toggleText(){
    var x = document.getElementById("Myid");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//Using hide() method to hide <p/> element.
//jQuery hide() method: This method is used for hiding the web elements.
$(document).ready(function(){
    $("#btn").click(function(){
      $("#p1").hide();
    })
    $("#btn2").click(function(){
      $("#p1").show();
    });
  });


//   Q2.Create an ajax call, by using 
//   this api "https://jsonplaceholder.typicode.com/todos/12" 
//   and print the title as the heading of the page
$(".btn").click(function(){
    $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/25",
    type: "GET",
    success: function(data){
    console.log(data);
    document.getElementById("SomeText").innerText = data.title;
    }
        })
    })