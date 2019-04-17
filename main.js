$(document).ready(function(){
    $(window).scroll(function() {
        $(".slideanimy").each(function(){
          var pos = $(this).offset().top;
          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
        });
        $(".slideanim-right").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("slide-right");
            }
        });
        $(".slideanim-left").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("slide-left");
            }
        });
    }); 
});