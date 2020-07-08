$(document).ready(() => {

    var slider = $("#slider");

    slider.cycle({
        fx: "scrollLeft",
        speed: 1000,
        timeout: 2000,
        pager: "#slider-pager",
    })

    $("#slider-pager a").each(function() {
        $(this).text("");
    })

})