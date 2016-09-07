$(document).ready(function(){


  $("#welcome").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 0}, 400);
  });
  $(".roundArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1050}, 400);
  });
  $("#about").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1050}, 400);
  });
  $(".aboutPageArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2000}, 400);
  });
  $("#skills").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2000}, 400);
  });
  $(".skillsPageArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2900}, 400);
  });
  $("#projects").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2900}, 400);
  });
  $("#contact").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 4000}, 400);
  });

});
