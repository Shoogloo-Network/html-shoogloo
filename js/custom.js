
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  $(document).ready(function() {
    $('.tablist').on('click', function() {
        var target = $(this).data('target');
        
        // Remove active class from all tabs and hide all content
        $('.tablist').removeClass('tab-active');
        $('.contlist').hide();
        
        // Add active class to the clicked tab and show the corresponding content
        $(this).addClass('tab-active');
        $(target).show();
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $element = $(entry.target);
        const fromValue = parseInt($element.data('from-value'));
        const toValue = parseInt($element.data('to-value'));
        const duration = parseInt($element.data('duration'));

        $({ counterValue: fromValue }).animate({ counterValue: toValue }, {
          duration: duration,
          easing: 'swing',
          step: function() {
            $element.text(Math.floor(this.counterValue));
          },
          complete: function() {
            $element.text(this.counterValue);
          }
        });

        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  // Select the elements to be observed
  const targetElements = document.querySelectorAll('.counter-number');

  // Observe each element
  targetElements.forEach((element) => {
    counterObserver.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const fadeInLeftObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view2");
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  // Select the element(s) to be observed
  const targetElements = document.querySelectorAll('.fadeInLeft');

  // Observe each element
  targetElements.forEach((element) => {
    fadeInLeftObserver.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const fadeInRightObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view5");
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  // Select the element(s) to be observed
  const targetElements = document.querySelectorAll('.fadeInRight');

  // Observe each element
  targetElements.forEach((element) => {
    fadeInRightObserver.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("in-view");
        }, index * 100); // 100ms delay between each item
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.hex').forEach((element, index) => {
    element.classList.add('fadeInUp');
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("in-view");
        }, index * 100); // 100ms delay between each item
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.hex').forEach((element, index) => {
    element.classList.add('fadeInDown');
    observer.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const fadeInUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view21");
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  // Select the element(s) to be observed
  const targetElements = document.querySelectorAll('.fadeInUp2');

  // Observe each element
  targetElements.forEach((element) => {
    fadeInUpObserver.observe(element);
  });
});




// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
  // Scroll position variables
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  // Check if the user has scrolled to the bottom
  return scrollTop + clientHeight >= scrollHeight - 200; // Adjust 200 as needed for your case
}

// Function to load more content
function loadMoreContent() {
  // Replace this with your logic to load content
  // For example, you might make an AJAX request to fetch more data and append it to the page
  var newContent = '<div>New content here</div>';
  document.getElementById('contentContainer').innerHTML += newContent;
}

// Event listener for scroll events
window.addEventListener('scroll', function() {
  // Check if user has scrolled to the bottom of the page
  if (isScrolledToBottom()) {
      // Load more content
      loadMoreContent();
  }
});


