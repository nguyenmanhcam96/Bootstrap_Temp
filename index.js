$(document).ready(function() {
    $('#goTop').on('click', function(e) {
        $("html, body").animate({ scrollTop: $("#top").offset().top }, 500);
        return false;
    });
});