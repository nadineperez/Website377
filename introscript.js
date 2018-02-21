/*adding navigation menu*/

// 1. Create the button
var btn = document.createElement("button");
btn.innerHTML = "Home3";

var btn2 = document.createElement("button");
btn2.innerHTML = "Change color";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
//body.appendChild(btn);
body.appendChild(btn2);

// 3. Add event handler
btn.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});
