$(document).ready(function () {

  $('.with-dropdown').mouseenter (
    function() {
      $('.with-dropdown .dropdown').removeClass('active');
      $(this).children('.dropdown').addClass('active');

    }
  );





});
