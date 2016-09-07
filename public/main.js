
$(document).ready(function(){

  var hideWelcome = function() {
    $(".welcomeText").hide();
  }
  var hideSkills = function() {
    $(".skillsPopOut").hide();
  }
  $(function(){
    $(document).scroll(function() {
      hideWelcome();
      if($(document).scrollTop() == 0)
      $(".welcomeText").fadeIn("slow", function() {
      })
    })
  })



  $("#welcome").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 0}, 400);
  });
  $(".roundArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 600}, 400);
  });
  $("#about").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 600}, 400);
  });
  $(".aboutPageArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1500}, 400);
  });
  $("#skills").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1500}, 400);
  });
  $(".skillsPageArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2400}, 400);
  });
  $("#projects").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2400}, 400);
  });
  $("#contact").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 4000}, 400);
  });

});
