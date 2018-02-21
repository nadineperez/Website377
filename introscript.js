// 1. Create buttons
var button = document.createElement("button");
button.innerHTML = "Home";

//var button2 = document.createElement("button");
//button1.innerHTML = "Change color";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
//body.appendChild(button2);

// 3. Add event handlers
button.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});

/*
button1.addEventListener ("click", function() {
  changeColor();
});

function changeColor() {
        document.getElementById('button2').style.color = 'red'
        return false;
} 
*/

