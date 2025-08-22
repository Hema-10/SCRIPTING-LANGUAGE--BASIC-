$(document).ready(function() {
  $("#animateBtn").click(function() {
    $(".portfolio-img").each(function(index) {
      $(this).delay(index * 300).animate({
        opacity: 1,         // fade in
        width: "250px",     // grow size
        height: "250px"     // grow size
      }, 1000); // 1 second animation
    });
  });
});
