/*adding navigation menu*/

// 1. Create the buttons
var btn = document.createElement("button");
btn.innerHTML = "Home";

var btn2 = document.createElement("button");
btn2.innerHTML = "Change color";

var btn3 = document.createElement("button");
btn3.innerHTML = "Display a message";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(btn);
body.appendChild(btn2);
body.appendChild(btn3);

// 3. Add event handlers
btn.addEventListener ("click", function() {
  location.assign("http://nadineperez.github.io/");
});

btn2.addEventListener ("click", function() {
  document.body.style.background = "red";
  alert("Consider color changed!");
}

btn3.addEventListener ("click", function() {
  alert("Consider message displayed!");
});
