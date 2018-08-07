$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").before("<li>Hello!</li>");
    $("ul#webpage").before("<li>Why hello there!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      alert(this.class);
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").before("<li>Goodbye!</li>");
    $("ul#webpage").before("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").before("<li>Stop copying me!</li>");
    $("ul#webpage").before("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
