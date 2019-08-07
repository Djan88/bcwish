<?php
  /* редирект с login на /wp-login.php  и с admin на /wp-admin */
  add_action('template_redirect', 'kama_login_redirect');
  function kama_login_redirect(){
      if(!is_user_logged_in()){
    if( strpos($_SERVER['REQUEST_URI'], 'login')!==false )
      $loc = '/';
    elseif( strpos($_SERVER['REQUEST_URI'], 'wp-login')!==false )
      $loc = 'wp-login.php?action=login';
    elseif( strpos($_SERVER['REQUEST_URI'], 'admin')!==false )
      $loc = '/wp-admin/';
    elseif( strpos($_SERVER['REQUEST_URI'], 'registration')!==false )
      $loc = 'wp-login.php?action=register';
    if( $loc ){
      header( 'Location: '.get_option('site_url').$loc, true, 303 );
      exit;
    }
      }
  }

  

  //fix for cookie error while login.
  setcookie(TEST_COOKIE, 'WP Cookie check', 0, COOKIEPATH, COOKIE_DOMAIN); 
  if ( SITECOOKIEPATH != COOKIEPATH ) 
  setcookie(TEST_COOKIE, 'WP Cookie check', 0, SITECOOKIEPATH, COOKIE_DOMAIN);

  /* Отключаем админ панель для всех, кроме администраторов. */
  if (!current_user_can('administrator')):
    show_admin_bar(false);
  endif;
?>
