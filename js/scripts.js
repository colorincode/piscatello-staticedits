/*!
 * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
console.log("Script is loading");
(function($) {
    "use strict"; // Start of use strict

    // Hover Navbar homepage

    $(".mainNav--home").hover(function() {
            //$(".navbar-homepage", this).toggle();
            $(this).addClass("navbar-white");
            $(".navbar-homepage").css("display", "block");;
        },
        function() {
            $(this).removeClass("navbar-white");
            $(".navbar-homepage").css("display", "none");
        }
    );


    // Hover project info

    $(".project-image-info").hover(function() {
        $(".project-info-cont", this).toggle();;
    });


    // Splash Screen FadeOut

    setTimeout(function() {
        $(".splashs").hide("slow", "swing");
    }, 6000);

    // cycle through portfolio images

    var _intervalId;

    function fadeInLastImg() {
        var backImg = $('#porfolio-fullscreen div:first');
        backImg.hide();
        backImg.remove();
        $('#porfolio-fullscreen').append(backImg);
        backImg.fadeIn("slow")
    };

    _intervalId = setInterval(function() {
        fadeInLastImg();
    }, 6000);

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 600) {
            $(".mainNav--project").addClass("navbar-scroll");
            $(".mainNav--project").addClass("navbar-white");
        } else {
            $(".mainNav--project").removeClass("navbar-scroll");
            $(".mainNav--project").removeClass("navbar-white");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Resize project image with scroll

    /* $(window).scroll(function (event) {
         var scroll = $(window).scrollTop();
         // Do something
         console.log(scroll);
         if(scroll > 500) {
             console.log("greater than 500");
            $(".project-image").css("width", "100%");
         }
     }); */

    /* fade in text */

    $(window).on("load", function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) {
                        $(this).fadeTo(500, 1);
                        console.log(this);
                        $(this).css("top", 0);
                    }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) {
                        $(this).fadeTo(500, 0);
                        console.log("one");
                    }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });


})(jQuery); // End of use strict

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'right',
    autoPlay: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.carousel', {
    // options
});

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal1", "fade-in-top") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal2", "fade-in-bottom") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// new ScrollMagic.Scene({
//         triggerElement: "#trigger5",
//         triggerHook: 0.5, // show, when scrolled 10% into view
//         duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
//         offset: 20 // move trigger to center of element
//     })
//     .setClassToggle("#reveal3", "fade-in-top-2") // add class to reveal
//     // .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);