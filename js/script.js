$(document).ready(function () {

  $('.with-dropdown').mouseenter(
    function() {
      $('.with-dropdown .dropdown').removeClass('hide');
      $(this).children('.dropdown').addClass('show');
    }
  );

  $('.with-dropdown').mouseleave(
    function() {
      $('.with-dropdown .dropdown').removeClass('show');
      $(this).children('.dropdown').addClass('hide');
    }
  )





});
