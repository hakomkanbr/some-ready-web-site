// var activeclass = document.querySelectorAll('#icon-layout li');
// for (var i = 0; i < activeclass.length; i++) {
//  activeclass[i].addEventListener('click', activateClass);
// }
// function activateClass(e) {
//  var previous = e.target.previousElementSibling;
//  var next = e.target.nextElementSibling;
//  e.target.classList.add('active');
//  previous.classList.remove('active');
//  next.classList.remove('active');
// }
// alert('helle');



// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}