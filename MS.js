var i = 0;
var txt = 'Leading manufacturers and distributors of quality Lighting Products.';
var speed = 50;
function typeWriter() 
{
  if (i < txt.length) 
  {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/*Google Maps*/



/*<button onclick="one()">1</button>
<button onclick="two()">2</button>
<button onclick="four()">4</button>
var elements = document.getElementsByClassName("column");

var i;

function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%"; 
    }
}

function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%"; 
    }
}

function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%"; 
    }
}
*/