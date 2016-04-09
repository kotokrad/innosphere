(function() {
  $('#nav-button-menu').click(function(){
    $('#main-nav').toggleClass('show');
  });

  $('#search-form').removeClass('show');

  $('#main-nav ul a:not(#nav-link-home)').click(function(e){
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      $('#main-nav').removeClass('show');
      if ($(this).is('#nav-link-search')) {
        $('#search-form').addClass('show');
      }
  });

  $('#search-button').click(function(){
    $('#search-form').toggleClass('show');
  });

  $('#nav-button-address').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#address").offset().top
      }, 'slow');
  });

  $('#top-button').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
      }, 600);
  });

  var $inputs = $('#s-text-input, #s-color-input');
  $inputs
  .change(function() {
      $inputs.val($(this).val());
    })
  .focusin(function() {
      $('#color-picker').addClass('focus');
    })
  .focusout(function() {
      $('#color-picker').removeClass('focus');
    });

  $('.radio-input')
  .focusin(function() {
      $('.radio-label').addClass('focus');
    })
  .focusout(function() {
      $('.radio-label').removeClass('focus');
    });

  function enableMap(state) {
    $('#map-overlay')
    .css('pointer-events', state ? 'none' : 'auto');
    $('#map').css('border-color', state ? '#f17398' : '#f0f0f0')
    if (state) {
      $('html, body').animate({
        scrollTop: $("#map").offset().top
      }, 400);
      $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll touchmove', function(e){
        enableMap(false);
        $(document).off('mousewheel DOMMouseScroll MozMousePixelScroll touchmove')
      });
    }
  }
  $(document).click(function(e) {
    var state = $(e.target).is('#map-overlay')
    enableMap(state);
  });

  $( "#contact-form" ).validate({
    rules: {
      fname: {
        required: true
      },
      lname: {
        required: false
      },
      email: {
        required: true
      },
      phone: {
        required: false
      },
      message: {
        required: true
      },
    },
    errorPlacement: function(error, element) { }
  });

  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      margin:10,
      nav:true,
      navContainer:'.owl-nav',
      navText: '',
      dots:true,
      responsive:{
        0:{
          items:1
        },
        300: {
          items:2
        },
        600:{
          items:3
        },
        850: {
          items:4
        },
        1130:{
          items:5
        }
      }
    });
  });
})();