// JavaScript code
var button = document.querySelector('#btn1 a'); // Select the anchor tag within the div#btn1 element

button.addEventListener('click', function() {
  // Change the inner HTML of the anchor tag on click
  button.innerHTML = 'Clicked';
});
var element = document.getElementById("btn1");
var btn = element.querySelector("a.btn");

btn.addEventListener("click", function() {
  btn.innerHTML = "Clicked";
});