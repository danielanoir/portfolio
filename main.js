$(document).ready(function(){

  var hideWelcome = function() {
    $(".welcomeText").hide();
  };

  $("#welcome").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.innerContainer').offset().top - 20
    }, 'fast');
  });
  $(".roundArrow").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.aboutPage').offset().top - 20
    }, 'fast');
  });
  $("#about").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.aboutPage').offset().top - 20
    }, 'fast');
  });
  $(".aboutArrowDiv").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.skillsPage').offset().top - 20
    }, 'fast');
  });
  $("#skills").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.skillsPage').offset().top - 20
    }, 'fast');
  });
  $(".skillsArrowDiv").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.projectsPopOut').offset().top - 20
    }, 'fast');
  });
  $("#projects").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.projectsPopOut').offset().top - 20
    }, 'fast');
  });
  $(".projectsArrowDiv").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.projectsPopOut').offset().top - 20
    }, 'fast');
  });
  $("#contact").click(function(e) {
    $('html, body').animate({
      scrollTop: $('.footer').offset().top - 20
    }, 'fast');
  });
});
