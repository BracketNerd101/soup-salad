// jQuery(document).ready(function() {
// 		var offset = 220;
// 		var duration = 500;
// 		jQuery(window).scroll(function() {
// 			if (jQuery(this).scrollTop() > offset) {
// 				jQuery('.crunchify-top').fadeIn(duration);
// 			} else {
// 				jQuery('.crunchify-top').fadeOut(duration);
// 			}
// 		});
//
// 		jQuery('.crunchify-top').click(function(event) {
// 			event.preventDefault();
// 			jQuery('html, body').animate({scrollTop: 0}, duration);
// 			return false;
// 		})
// 	});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
