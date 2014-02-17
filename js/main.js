$(document).ready(function () {

    $('#container .center-box .slider:last').addClass('last');
    $('.footer-nav ul li:last').addClass('last');
    $('.main-nav ul li:last').addClass('last');
    $('.bread-crumbs ul li:last').addClass('last');
    $('.channels-box .other-channel:last').addClass('last');
    $('.program ul li:last').addClass('last');
    $('.program ul li:first').addClass('first');
    $('.radio-box .input-box:last').addClass('last');
    $('.season-row ul li:last-child').addClass('last');
    $('.contacts-row ul li:last').addClass('last');
    $('.questions .accordion .other-question:last').addClass('last');
    $('.widgets-row .other-widget:last').addClass('last');
    $('.order-box .order-row:last').addClass('last');
    $('.other-rating img:first').addClass('first');
    $('.radio-button-box .input-box:last-child').addClass('last');
    $('.catalog-row .global-pix:nth-child(4n+3)').addClass('column-3');
    $('.catalog-row .global-pix:nth-child(4n)').addClass('column-4');
    $('.order-box .catalog-row:last').addClass('last');
    $('.pack-box-row .pack-box:last-child').addClass('last');
    $('.order-row .my-films:last-child').addClass('last');
    $('.main-content.map ul li:last').addClass('last');


    //remove default input text
    $('input[type=text], input[type=password], textarea').each(function () {
        var default_value = this.value;
        $(this).focus(function () {
            if (this.value == default_value) {
                this.value = '';
            }
        });
        $(this).blur(function () {
            if (this.value == '') {
                this.value = default_value;
            }
        });
    });

    //$("ul.tabs").tabs("div.panes > div");
    $(".tabs-box").tabs();

    $('.checkbox').uniform();
    $('.radio').uniform();
    $('.radio2').uniform();
    $('.radio3').uniform();

    $(".accordion h3:first").addClass("active");
    $(".accordion p:not(:first)").hide();

    $(".accordion h3").click(function () {

        $(this).next("p").slideToggle("slow")
            .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h3").removeClass("active");
    });
    // accordion //

    $('a.up').fadeOut(0);

    $('a.up').on("click", function () {
        var percentage = 100;
        var height = $(document).height();
        var remove = +height / +100 * +percentage;
        var spaceFromTop = +height - +remove;
        $('html,body').animate({ scrollTop: spaceFromTop }, 'slow', function () {
        });
    });


    $('.calendar').click(function (e) {

        $('.ui-datepicker').fadeIn(300);

        $(".calendar").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });

        e.stopPropagation();

        $('body').click(function () {
            $('.ui-datepicker').fadeOut(300);
        });

        $('.ui-datepicker').click(function (e) {
            e.stopPropagation();
        });

    });


    // hide #back-top first
    $(".up").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.up').fadeIn();
            } else {
                $('.up').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


});

$(window).load(function () {

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 202,
        minItems: 5,
        maxItems: 5
    });

    $('.flexslider2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 300,
        minItems: 3,
        maxItems: 3,
        itemMargin: 20
    });

});