$(document).ready(function () {
  $('#mybtn').click(function () {
    // Toggles the css "display: block" and "display: none" when the button #mybtn is clicked
    $('#myModal').toggle();
  });

  $('.burger').click(function () {
    $('.navbar').toggleClass('active');
  });

  $(window).click(function (e) {
    // If the clicked element is not the burger nor the navbar itself
    if (!$(e.target).closest('.burger').length && !$(e.target).closest('.navbar').length) {
      // If the navbar has the class active
      if ($('.navbar').hasClass('active')) {
        $('.navbar').removeClass('active');
      }
    }

    // If modal is vislbe and clicked element is not the modal button nor the modal itself
    if ($('#myModal:visible') && !$(e.target).closest('#mybtn').length && !$(e.target).closest('.modalbox').length) {
      // Adds the css "display: none"
      $('#myModal').hide();
    }
  });

  var lastScrollTop = 0;
  $('body').scroll(function (event) {
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
});