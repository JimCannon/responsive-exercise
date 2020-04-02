$(document).ready(function () {

  $('.interest-box').click(function () {
    var modalId = $(this).data('modal');
    console.log(modalId);
    $(modalId).toggle();
  });


  $('.burger').click(function () {
    $('.navbar').toggleClass('active');
    $('.navbar-overlay').toggleClass('active');
  });

  $(window).click(function (e) {
    // If the clicked element is not the burger nor the navbar itself
    if (!$(e.target).closest('.burger').length && !$(e.target).closest('.navbar').length) {
      // If the navbar has the class active
      if ($('.navbar').hasClass('active')) {
        $('.navbar').removeClass('active');
      }
      if ($('.navbar-overlay').hasClass('active')) {
        $('.navbar-overlay').removeClass('active');
      }
    }

    // If modal is vislbe and clicked element is not the modal button nor the modal itself
    if ($('.modal:visible') && !$(e.target).closest('.container.interest-boxes').length && !$(e.target).closest('.modalbox').length) {
      // Adds the css "display: none"
      $('.modal').hide();
    }
  });

  /* WAYPOINTS */

  $('.animate').each(function() {
    $(this).waypoint({
      offset: '80%',
      handler: () => {
        const animateClass = $(this).data('animate');
        $(this).addClass('animated').addClass(animateClass);
      }
    });
  });

  /* SCROLL */

  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    // if (st > lastScrollTop) {
    if (st > 40) {
      // downscroll code
      $('.navbar').addClass('expand');
    } else {
      // upscroll code
      $('.navbar').removeClass('expand');
    }
    lastScrollTop = st;
  });

  $('.topbtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 0);
  });

  $('body').scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.topbtn').fadeIn();
    } else {
      $('.topbtn').fadeOut();
    }
  });

});