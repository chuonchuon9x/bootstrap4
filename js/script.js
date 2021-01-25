$(document).ready(function() {
    var menu = $("#wrap-header");
    $(window).scroll(function(event) {
        var height = $(window).scrollTop();;
        if (height > 100) {
            $(menu).addClass("bg-header");
        } else {
            $(menu).removeClass("bg-header");
        }
    });
});