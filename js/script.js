$(document).ready(function() {
    var menu = $("#wrap-header");

    $(window).scroll(function(event) {
        var height = $(window).scrollTop();
        if (height > 100) {
            $(menu).addClass("bg-header");
        } else {
            $(menu).removeClass("bg-header");
        }
    });

    //Zoom Footer
    function zoomfooter() {
        var window = document.documentElement.clientHeight;
        // var window = $(document.documentElement).innerHeight();
        console.log(window);
        var banner = $("#wrap-banner").outerHeight();
        var service = $("#wrap-service").outerHeight();
        var details = $("#wrap-details").outerHeight();
        var footer = $("#wrap-footer");
        var totalweb1;
        totalweb1 = banner + service + details;
        console.log(totalweb1);
        if (window > totalweb1) {
            $(footer).addClass("fixwindow");
        } else {
            $(footer).removeClass("fixwindow");
        }
    }
    // End zoom footer

    zoomfooter();
    window.onresize = function() {
        zoomfooter();
    }
});