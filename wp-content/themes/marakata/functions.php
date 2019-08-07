<?php
  /* редирект с login на /wp-login.php  и с admin на /wp-admin */
  add_action('template_redirect', 'kama_login_redirect');
  function kama_login_redirect(){
      if(!is_user_logged_in()){
    if( strpos($_SERVER['REQUEST_URI'], 'login')!==false )
      $loc = '/';
    elseif( strpos($_SERVER['REQUEST_URI'], 'wp-login')!==false )
      $loc = '/';
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

  add_filter("login_redirect", "sp_login_redirect", 10, 3);

  function sp_login_redirect($redirect_to, $request, $user){
      if(is_array($user->roles))
          if(in_array('administrator', $user->roles))
              return home_url('/wp-admin/');
      return home_url();
  }

  //fix for cookie error while login.
  setcookie(TEST_COOKIE, 'WP Cookie check', 0, COOKIEPATH, COOKIE_DOMAIN); 
  if ( SITECOOKIEPATH != COOKIEPATH ) 
  setcookie(TEST_COOKIE, 'WP Cookie check', 0, SITECOOKIEPATH, COOKIE_DOMAIN); Источник: http://jkeks.ru/jkeks.ru/archives/8175

  /* Отключаем админ панель для всех, кроме администраторов. */
  if (!current_user_can('administrator')):
    show_admin_bar(false);
  endif;
?>
