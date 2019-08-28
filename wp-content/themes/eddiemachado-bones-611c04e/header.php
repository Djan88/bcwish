<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

    <head>
        <meta charset="utf-8">

        <?php // force Internet Explorer to use the latest rendering engine available ?>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title><?php wp_title(''); ?></title>

        <?php // mobile meta (hooray!) ?>
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
        <!-- <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png"> -->
        <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
        <!--[if IE]>
            <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
        <![endif]-->
        <?php // or, set /favicon.ico for IE10 win ?>
        <meta name="msapplication-TileColor" content="#f01d4f">
        <!-- <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/favicon.png"> -->

        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

        <?php // wordpress head functions ?>
        <?php wp_head(); ?>
        <?php // end of wordpress head ?>

        <?php // drop Google Analytics Here ?>
        <?php // end analytics ?>
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/jquery-ui.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/jquery.Jcrop.min.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/style-magic.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/bootstrap.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/animate.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/sweet-alert.css">
        <!--/sprypay.tag.check:54d91f053a839/-->
    </head>

    <body <?php body_class(); ?>>
        <?php if(is_front_page()){ ?>
            <?php if(!is_user_logged_in()){ ?>
                <div class="wrapper_home wr">
                    <div class="wr_in">
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/tower.png" class="tower_home" alt="">
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/wings.png" class="wings_home" alt="">
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/outdoor_board.gif" class="outdoor"   data-toggle="modal" data-target="#myModal_choice"  alt="">
                        <div class="window_light wl_down"></div>
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/w.gif" class="wings_step" alt="">
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/door.gif"  data-toggle="modal" data-target="#myModal_login" class="wings_door" alt="">
                    </div>
                </div>
            <?php } else { ?>
                <?php if(current_user_can('contributor') || current_user_can('administrator')){ ?>
                    <div class="wrapper_home wr">
                        <div class="wr_in">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/tower.png" class="tower_home" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/wings.png" class="wings_home" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/outdoor_board.gif" class="outdoor"   data-toggle="modal" data-target="#myModal_choice"  alt="">
                            <div class="window_light wl_up"></div>
                            <a class="btn btn_sm btn_warning wings_door_closed" href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba">
                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/door.png" class="door_closed" alt="">
                            </a>
                        </div>
                    </div>
                <?php } else { ?>
                    <div class="wrapper_home wr">
                        <div class="wr_in">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/tower.png" class="tower_home" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/wings.png" class="wings_home" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/outdoor_board.gif" class="outdoor"   data-toggle="modal" data-target="#myModal_choice"  alt="">
                            <div class="window_light wl_up"></div>
                            <a class="btn btn_sm btn_warning wings_door_closed" href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba">
                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/door.png" class="door_closed" alt="">
                            </a>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>
        <?php } ?>
        <div id="container" <?php if(current_user_can('subscriber')){ ?>class="subscriber_wrapper"<?php } ?>>

            <?php if(!is_front_page()){ ?>

                    
                    <?php if(is_user_logged_in() && current_user_can('administrator') && wp_is_mobile()) { ?>
                        <header class="header header-mobile" role="banner">
                            <div id="inner-header" class="wrap-mobile cf">
                    <?php } else { ?>
                        <header class="header" role="banner">
                            <div id="inner-header" class="wrap cf">
                    <?php } ?>

                        <?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
                        <!-- <p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p> -->

                        <?php // if you'd like to use the site description you can un-comment it below ?>
                        <?php // bloginfo('description'); ?>


                        <!-- <nav role="navigation">
                            <?php wp_nav_menu(array(
                            'container' => false,                           // remove nav container
                            'container_class' => 'menu cf',                 // class of container (should you choose to use it)
                            'menu' => ( 'The Main Menu' ),  // nav name
                            'menu_class' => 'nav top-nav cf',               // adding custom nav class
                            'theme_location' => 'main-nav',                 // where it's located in the theme
                            'before' => '',                                 // before the menu
                        'after' => '',                                  // after the menu
                        'link_before' => '',                            // before each link
                        'link_after' => '',                             // after each link
                        'depth' => 0,                                   // limit the depth of the nav
                            'fallback_cb' => ''                             // fallback function (if there is one)
                            )); ?>

                        </nav> -->
                        <?php if(is_user_logged_in()){ ?>
                            <div class="btn btn_sm btn_warning btn__wizard hidden" >Выполнить</div>
                            <div class="btn btn_sm btn_warning btn__next hidden" >Выбрать протокол <span>›</span></div>
                            <div class="btn-group btn-group-graf hidden" data-toggle="buttons">
                                <label class="btn btn_sm btn_warning btn__graf">
                                    <input type="radio" name="grafOps" id="option1"> С графиком
                                </label>
                                <label class="btn btn_sm btn_warning btn__nograf">
                                    <input type="radio" name="grafOps" id="option3"> Без графика
                                </label>
                            </div>
                            <div class="btn btn_sm btn_warning btn__clgraf hidden" >ОЧИСТИТЬ ГРАФИК</div>
                            <div class="btn btn_sm btn_warning btn__crop hidden" >Обрезать фото</div>
                            <div class="btn btn_sm btn_warning btn_back invisible"><span>‹</span> Назад</div>
                        <?php }?>

                    </div>

                </header>
            <?php } ?>
