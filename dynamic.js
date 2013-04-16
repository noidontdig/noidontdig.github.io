$(document).ready(function(){
  $(".button").click(function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });
});
