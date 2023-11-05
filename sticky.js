// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky_func()};

// Get the navbar
var navbar = document.getElementById("mytopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_func() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}