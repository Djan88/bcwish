jQuery(function() {
  jQuery('.toLogin').on('click', function(event) {
    jQuery('.register_form').addClass('hidden').removeClass('bounceInUp');
    jQuery('.login_form').removeClass('hidden').addClass('bounceInUp');
  });
  jQuery('.toRegistration').on('click', function(event) {
    jQuery('.login_form').addClass('hidden').removeClass('bounceInUp');
    jQuery('.register_form').removeClass('hidden').addClass('bounceInUp');
  });

  //Скрываем возможно загруженное изображение
  jQuery('#main img:first-child').addClass('returned hidden');

  
});
