$(function(){

    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:2000
      });

    $('.slick_main').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:".prev1",
        nextArrow:".next1",
        autoplay:2000
      });

    $('.c_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:".prev",
        nextArrow:".next",
       
      });
   
      var mixer =  mixitup ('.mixitup', {
        animation: {
          effects: 'rotateXYZ(40deg)',
          perspectiveDistance: '5000px',
          duration:700
      }
     });



       // Set the date we're counting down to
  var countDownDate = new Date("april 3, 2022 5:20:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "0 0 0 0";
    }
  }, 1000);



                          //  Navbar


 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

                      


 

                  





});

