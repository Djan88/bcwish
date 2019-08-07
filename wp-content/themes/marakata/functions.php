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
  function users_redirect(){
    wp_redirect(site_url('/'));
    die();
  }
    if(!current_user_can('manage_options')){
      add_action('admin_init','users_redirect');
      add_filter('login_redirect', 'users_redirect');
    }
  function is_user_role( $role, $user_id = null ) {
    $user = is_numeric( $user_id ) ? get_userdata( $user_id ) : wp_get_current_user();

    if( ! $user )
      return false;

    return in_array( $role, (array) $user->roles );
  }
?>
