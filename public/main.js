
$(document).ready(function(){

  if(window.addEventListener){
      window.addEventListener('scroll',scroll)
  }else if(window.attachEvent){
      window.attachEvent('onscroll',scroll);
  }
  function scroll(ev){
      var st = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
      if(!st){
              $(".contactPopOut").hide(); {
                console.log("scrolled top")
              }
              $(".welcomeText").fadeIn("slow", function() {
              })
      }else if((st+document.documentElement.clientHeight)>=document.documentElement.scrollHeight ){

            $(".contactPopOut").fadeIn("slow", function() {
              console.log('bottom')
            $(".welcomeText").hide();
            });
      }
  }

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
