/*adding navigation menu*/

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Home1";

var button2 = document.createElement("button");
button2.innerHTML = "Change color";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

var body = document.getElementsByTagName("body")[1];
body.appendChild(button2);

// 3. Add event handler
button.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});
