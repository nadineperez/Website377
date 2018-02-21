/*adding navigation menu*/

// 1. Create buttons
var button = document.createElement("button1");
button1.innerHTML = "Home";

var button = document.createElement("button2");

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);
body.appendChild(button2);

// 3. Add event handlers
button1.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});

button1.addEventListener ("click", function() {
  changeColor();
});

function changeColor() {
        document.getElementById('button2').style.color = 'red'
        return false;
} 


