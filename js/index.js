$(document).ready(function(){
  $(".target1").hide();
  $(".target2").hide();
  
  $("#trigger1").click(function(){
  $("#intro").fadeOut();
  $(".target1").show();
  });
      
  $("#trigger2").click(function(){
  $(".target1").fadeOut();
  $(".target2").show();
  });
  
  $("#trigger3").click(function(){
  $(".target2").fadeOut();
  $("#intro").show();
  });
  
  
  
});