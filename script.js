$(document).ready(function () {
    // AOS Library Initialization
    AOS.init();

    // Smooth Scroll
    $('nav a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Package Booking
    $('.package .btn').on('click', function () {
        const packageName = $(this).attr('data-package');
        alert('Booking confirmed for Package ' + packageName);
    });

    // Contact Form Submission
    $('#contactForm').submit(function (event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });
});
