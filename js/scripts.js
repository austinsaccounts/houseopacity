$(document).ready(function() {
  // $(alert("asdf"));
  $(".col-md-4").click(function(){
    $(this).children("p").toggle();
    $(this).children("img").toggleClass("imagestyle2");
  });
});
