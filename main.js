$(document).ready(function(){
    $("#main").click(function(){
        $("#im-andy").addClass("fadeOutRight");
        $("#im-andy").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $("#im-andy").css({display:"none"});
            $("#hi").css({display:"block"}).addClass("animated slideInLeft");
        });
    });
});