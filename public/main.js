
$(document).ready(function(){

  var hideWelcome = function() {
    $(".welcomeText").hide();
  }

  $(function(){
    $(document).scroll(function() {
      hideWelcome();
      if($(document).scrollTop() >= 0 && $(document).scrollTop() <=800)
      $(".welcomeText").fadeIn("slow", function() {
      })
    })
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 1200) {
      $('.skillsPopOut').slideDown("slow");
    } else {
      $('.skillsPopOut').slideUp('slow');
    }
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 600) {
      $('.aboutPopOut').slideDown("slow");
    } else {
      $('.aboutPopOut').slideUp('slow');
    }
  })

  $("#welcome").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 0}, 400);
  });
  $(".roundArrow").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 950}, 400);
  });
  $("#about").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 950}, 400);
  });
  // $(".aboutPageArrow").click(function() {
  //   var offset = $(this).offset();
  //   $('html, body').animate({scrollTop: 2300}, 400);
  // });
  $("#skills").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 1850}, 400);
  });
  // $(".skillsPageArrow").click(function() {
  //   var offset = $(this).offset();
  //   $('html, body').animate({scrollTop: 2400}, 400);
  // });
  $("#projects").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 2950}, 400);
  });
  $("#contact").click(function() {
    var offset = $(this).offset();
    $('html, body').animate({scrollTop: 4000}, 400);
  });

});
