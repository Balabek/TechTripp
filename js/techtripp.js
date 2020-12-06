$(document).ready(function(){


    // Partner Slider
    $('#partnerSlider').slick({
        rtl: false,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                },

            },
            {
                breakpoint: 525,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                },

            },
            {
                breakpoint: 450,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }

        ]
    });



    // Service Slider
    $('#serviceSlider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed:[3000],
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Gallery Slider for Services Inner Page
    $('#serviceGallery').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    // Customer Feedback Slider
    $('#customerFeedbackSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed:[6500],
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 512,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]

    });


    // Dropdown behavior correction
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });


    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -1
        }, 600);
        // $('.collapse').removeClass('in');
    });


    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


});