$(document).ready(function(){

    // Smooth scrolling for navigation links
    $('.navbar-nav a').on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            var hash = this.hash;

            // Animate scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash to URL after scroll
                window.location.hash = hash;
            });
        }
    });

    // Scroll-triggered animations
    function checkVisibility() {
        var $window = $(window);
        var windowHeight = $window.height();
        var windowScrollTop = $window.scrollTop();

        $('.fade-in').each(function() {
            var $element = $(this);
            var elementTop = $element.offset().top;
            
            // Trigger animation when element is about 150px from the bottom of the viewport
            if (elementTop < (windowScrollTop + windowHeight - 150)) {
                $element.addClass('is-visible');
            }
        });
    }

    // Initial check on page load and on scroll/resize events
    checkVisibility();
    $(window).on('scroll resize', checkVisibility);
    
});