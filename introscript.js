/*adding navigation menu*/

// 1. Create buttons
var button1 = document.createElement("button1");
button1.innerHTML = "Home";

var button2 = document.createElement("button2");
button1.innerHTML = "Change color";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);
body.appendChild(button2);

// 3. Add event handlers
button1.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});



