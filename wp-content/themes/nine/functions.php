<?php
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
