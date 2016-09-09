
$(document).ready(function(){

  var hideWelcome = function() {
    $(".welcomeText").hide();
  }

  // $(window).scroll(function(){
  //   if($(this).scrollTop() > 600) {
  //     $('.aboutPopOut').slideDown("slow");
  //   } else {
  //     $('.aboutPopOut').slideUp('slow');
  //   }
  // })
  // $(window).scroll(function(){
  //   if($(this).scrollTop() > 1200) {
  //     $('.skillsPopOut').slideDown("slow");
  //   } else {
  //     $('.skillsPopOut').slideUp('slow');
  //   }
  // })

  $("#welcome").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 0}, 400);
  });
  $(".roundArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 830}, 400);
  });
  $("#about").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 830}, 400);
  });
    $(".aboutArrowDiv").click(function() {
      var offset = $(this).offset();
      $('html, body').animate({scrollTop: 1750}, 400);
    });
  $("#skills").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1750}, 400);
  });
  $(".skillsArrowDiv").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2750}, 400);
  });
  $("#projects").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2750}, 400);
  });
  $(".projectsArrowDiv").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 4000}, 400);
  });
  $("#contact").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 4000}, 400);
  });

});
