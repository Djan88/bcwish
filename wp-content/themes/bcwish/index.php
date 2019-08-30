<!DOCTYPE html>
<html class="all" lang="en">
<head>
  <meta charset="utf-8">
  <title><?php wp_title(''); ?></title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="<?php bloginfo('template_url'); ?>/img/favicon.png" rel="icon">
  <link href="<?php bloginfo('template_url'); ?>/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="<?php bloginfo('template_url'); ?>/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="<?php bloginfo('template_url'); ?>/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/lib/animate/animate.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/lib/lightbox/css/lightbox.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body>
  <!--==========================
  Header
  ============================-->
  <header id="header">

    <div id="topbar">
      <div class="container">
        <div class="social-links">
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <h1 class="text-light"><a href="#intro" class="scrollto"><span>WIZARDMACHINE</span></a></h1>
        <!-- <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> -->
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="active"><a href="#intro">Вверх</a></li>
          <li><a href="#services">Инструкция</a></li>
          <li><a href="#why-us">Программа</a></li>
          <!-- <li><a href="#portfolio">Portfolio</a></li> -->
          <!-- <li><a href="#team">Team</a></li> -->
          <!-- <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li> -->
          <li><a href="#footer">Обратная связь</a></li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header><!-- #header -->

  <!--==========================
    Intro Section
  ============================-->
  <section id="intro" class="clearfix">
    <div class="container h-100">
      <div class="row justify-content-center align-self-center">
        <div class="col-md-12 intro-info order-md-first order-last">
          <?php if(is_user_logged_in()){ ?>
            <?php if(current_user_can('subscriber')){ ?>
              <h2>Доступ к программе закрыт!<br>Оплатите доступ в личном кабинете<span>и пользуйтесь программой целый год!</span></h2>
              <div>
                <a href="/cabinet" class="btn-get-started">Личный кабинет</a>
              </div>
            <?php } else if (current_user_can('contributor') || current_user_can('administrator')) { ?>
              <h2>Программа для коррекции <br><span>личностных психосоматических проблем!</span></h2>
              <div>
                <a href="#services" class="btn-get-started scrollto">Начать</a>
              </div>
            <?php } ?>
          <?php } else { ?>
            <h2>Программа для коррекции <br><span>личностных психосоматических проблем!</span></h2>
            <div class="row">
              <div class="col-md-12 login_form bounceInUp wow" data-wow-duration="1.4s">
                <h3 class="form_heading">Вход</h3>
                <form name="loginform" id="loginform" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
                    <p class="login_field">
                        <input type="text" name="log" id="user_login" class="input form-control" value="<?php echo esc_attr($user_login); ?>" placeholder="Логин" size="20" /></label>
                    </p>
                    <p class="login_field">
                        <input type="password" name="pwd" id="user_pass" placeholder="Пароль" class="input form-control" value="" size="20" /></label>
                    </p>
                    <?php
                    /**
                     * Fires following the 'Password' field in the login form.
                     *
                     * @since 2.1.0
                     */
                    do_action( 'login_form' );
                    ?>
                    <p class="forgetmenot"><label for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever" <?php checked( $rememberme ); ?> /> <?php esc_attr_e('Remember Me'); ?></label></p>
                    <p class="submit">
                        <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large btn-get-started" value="<?php esc_attr_e('Log In'); ?>" />
                        <?php   if ( $interim_login ) { ?>
                            <input type="hidden" name="interim-login" value="1" />
                        <?php   } else { ?>
                            <input type="hidden" name="redirect_to" value="<?php echo esc_attr($redirect_to); ?>" />
                        <?php   } ?>
                        <?php   if ( $customize_login ) : ?>
                            <input type="hidden" name="customize-login" value="1" />
                        <?php   endif; ?>
                        <input type="hidden" name="testcookie" value="1" />
                    </p>
                    <p class="note_small">У Вас еще нет учетной записи? <span class="toRegistration">Зарегистрируйтесь</span> в "WizardMachine" и узнайте как получить доступ</p>
                </form>
              </div>
              <div class="col-md-12 register_form bounceInUp wow hidden" data-wow-duration="1.4s">
                <h3 class="form_heading">Регистрация</h3>
                <form id="registerform" action="<?php echo site_url('wp-login.php?action=register'); ?>" method="post">
                    <p class="login_field">
                        <input type="text" name="user_login" id="user_login" class="input form-control" value="" placeholder="Придумайте логин" size="20" style="">
                        </label>
                    </p>
                    <p class="login_field">
                        <input type="email" name="user_email" id="user_email" class="input form-control" value="" placeholder="Ваш email" size="25">
                        </label>
                    </p>
                    <p id="reg_passmail">Подтверждение регистрации будет отправлено email.</p>
                    <br class="clear">
                    <input type="hidden" name="redirect_to" value="">
                    <p class="submit"><input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large btn-get-started" value="Регистрация"></p>
                    <p class="note_small">У Вас уже есть учетная запись? <span class="toLogin">Войдите</span> в "WizardMachine" используя свои логин и пароль</p>
                </form>
              </div>
            </div>
          <?php } ?>
          
          <div>
            <!-- <a href="#services" class="btn-get-started scrollto">Начать</a> -->
          </div>
        </div>
        <div class="col-md-6 intro-img order-md-last order-first">
          <img src="<?php bloginfo('template_url'); ?>/img/intro_alt.svg" alt="" class="main_bg img-fluid">
        </div>
      </div>
    <!-- <img src="<?php //bloginfo('template_url'); ?>/img/intro_alt.svg" alt="" class="img-fluid main_bg"> -->
    </div>
  </section><!-- #intro -->

  <main id="main">

    <!--==========================
      About Us Section
    ============================-->
    <!-- <section id="about">

      <div class="container">
        <div class="row">

          <div class="col-lg-5 col-md-6">
            <div class="about-img">
              <img src="<?php //bloginfo('template_url'); ?>/img/about-img.jpg" alt="">
            </div>
          </div>

          <div class="col-lg-7 col-md-6">
            <div class="about-content">
              <h2>About Us</h2>
              <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
              <ul>
                <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section> -->
    <!-- #about -->


    <!--==========================
      Services Section
    ============================-->
    <section id="services">
      <div class="container">

        <header class="section-header">
          <h3>Как это работает?</h3>
          <h4 class="center-block" style="text-align: center;">Пошаговое описание алгоритма работы "WizardMachine"!</h4>
        </header>

        <div class="row">
          <div class="col-md-12 steps">
            <div class="steps_item steps_item_1 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Загрузка и коррекция фото</h4>
              <p class="description">Загрузите фото клиента и при необходимости выполните подрезку. Для этого в "WizardMachine" есть встроенные механизмы</p>
            </div>
            <div class="arrow_box arrow_box_1 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="steps_icon" id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>arrow_horizontal</title><path d="M5.91,188.77c14.72.16,29.5-.27,44.25-.52,7.39-.11,14.76-.17,22.14-.34l22.15-.23q44.28-.36,88.58.34c29.54.47,59.07,1.24,88.6,2.55s59.08,3,88.52,6.52l-.07,1.43c-14.79.46-29.55.68-44.32,1s-29.53.54-44.3.68q-44.29.39-88.6-.12c-29.53-.36-59.07-1.06-88.6-2.43-7.38-.31-14.77-.74-22.15-1.14s-14.77-1-22.15-1.47c-14.75-1.27-29.53-2.25-44.22-4.89Z"/><path d="M290.91,124.11a155.6,155.6,0,0,0,9,13.31c1.57,2.13,3.26,4.17,5,6.15s3.5,3.92,5.34,5.78a138.47,138.47,0,0,0,24.61,19.52c8.9,5.66,18.4,10.51,28,15.44,4.81,2.47,9.63,5,14.37,7.79s9.42,5.88,13.24,10h0l1.32.77-1.71.49c-10.4,3-20.66,5.84-30.82,8.93s-20.2,6.34-30,10.1a193.5,193.5,0,0,0-28.39,13.34,92.53,92.53,0,0,0-24.35,19.69l-1.2-.78A55.12,55.12,0,0,1,284.6,241a72.74,72.74,0,0,1,5.93-5.85q3.11-2.78,6.47-5.24a131.1,131.1,0,0,1,29-15.73,175.58,175.58,0,0,1,31.41-9.27q8-1.59,16.16-2.39a120.4,120.4,0,0,1,16.34-.57l-.39,1.26h0A85.67,85.67,0,0,0,375.26,196c-4.93-2.08-10-4-15-6a192.6,192.6,0,0,1-29.52-14.58,104,104,0,0,1-25.36-21.65,82,82,0,0,1-15.77-29.07Z"/></svg>
            </div>
            <div class="arrow_box arrow_box_2 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="steps_icon" id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1233 567"><title>arrow_horizontal_split-02</title><path d="M292.44,283.52c-1.22.76-2.42,1.53-3.54,2.39a30.94,30.94,0,0,0-3.17,2.75,36.2,36.2,0,0,0-5.2,6.54c-1.51,2.37-2.79,4.9-4.11,7.45-.65,1.28-1.32,2.56-2.06,3.82A16,16,0,0,1,271.7,310l-.33.32v-.42h0c-1.58-5.52-3.07-10.94-5.06-16.18a52.54,52.54,0,0,0-3.55-7.55,24.85,24.85,0,0,0-5.24-6.48l.21-.32a18,18,0,0,1,6.57,5.78,34.53,34.53,0,0,1,4.19,7.71,47.4,47.4,0,0,1,2.47,8.36,39.1,39.1,0,0,1,.79,8.64h0l-.34-.1a22.47,22.47,0,0,0,1.9-3.8l1.62-4a50.58,50.58,0,0,1,3.87-7.85,27.91,27.91,0,0,1,5.76-6.74,21.77,21.77,0,0,1,7.73-4.2Z"/><path d="M900.18,396.14c-.76-1.2-1.52-2.37-2.37-3.47a29.84,29.84,0,0,0-2.73-3.09,32.88,32.88,0,0,0-6.55-4.93c-2.38-1.41-4.92-2.56-7.48-3.77-1.29-.59-2.58-1.21-3.84-1.91a14.18,14.18,0,0,1-3.51-2.56l-.32-.34h.42c2.78-.81,5.51-1.68,8.21-2.6s5.36-1.92,8-3a58.5,58.5,0,0,0,7.53-3.83,27.5,27.5,0,0,0,6.5-5.4l.32.2a19.08,19.08,0,0,1-5.76,6.71,36.52,36.52,0,0,1-7.66,4.47,48.41,48.41,0,0,1-8.34,2.81,34.69,34.69,0,0,1-8.73,1h0l.11-.33a19.65,19.65,0,0,0,3.76,1.79c1.3.51,2.64.95,4,1.45a49.31,49.31,0,0,1,7.88,3.52,25.73,25.73,0,0,1,6.79,5.51,20.86,20.86,0,0,1,4.18,7.6Z"/><path d="M274.5,294.62c.79-5.22.53-10.52.82-15.88a46.61,46.61,0,0,1,1.05-8,32,32,0,0,1,2.81-7.67,41.89,41.89,0,0,1,10.36-12.47c1-.88,2-1.66,3.14-2.55a22,22,0,0,1,3.6-2.14,43.15,43.15,0,0,1,7.71-2.72,112.18,112.18,0,0,1,15.88-2.73c5.33-.58,10.66-.94,16-1.18,10.67-.47,21.33-.49,32-.34,21.31.34,42.59,1.38,63.84,2.59s42.49,2.66,63.72,4.15c42.45,3,84.88,6.13,127.33,8.84q31.83,2,63.68,3.49c21.23,1,42.47,1.79,63.71,2.2,42.46.73,85,.52,127.24-3.38,21.09-2,42.13-4.83,62.71-9.66A238,238,0,0,0,970.35,238a130.65,130.65,0,0,0,27.88-14.31c8.53-5.95,16.1-13.4,21-22.47a54.56,54.56,0,0,0,6.46-29.8,41,41,0,0,0-3.9-14.76,44.21,44.21,0,0,0-9-12.41c-7.42-7.26-16.84-12.34-26.59-16.2a172.57,172.57,0,0,0-30.48-8.49,297.49,297.49,0,0,0-31.51-4.15c-10.58-.85-21.19-1.28-31.81-1.36s-21.26.17-31.85.92l-.08-1c10.62-.91,21.27-1.32,31.92-1.43s21.32.17,32,.93a298.54,298.54,0,0,1,31.78,3.84,175.44,175.44,0,0,1,31,8.28c10,3.84,19.78,8.94,27.72,16.52a47.17,47.17,0,0,1,9.79,13.16,44.06,44.06,0,0,1,4.38,15.87,58.27,58.27,0,0,1-1,16.36,56.3,56.3,0,0,1-5.57,15.44c-5.18,9.74-13.14,17.67-22,23.94a134.68,134.68,0,0,1-28.63,15,241.45,241.45,0,0,1-30.72,9.56c-20.83,5.08-42,8.16-63.28,10.33s-42.57,3.25-63.88,3.84q-16,.43-32,.47t-32-.3c-21.3-.4-42.59-1.16-63.87-2.16s-42.53-2.32-63.77-3.74c-42.48-2.8-84.9-6.38-127.31-9.79-21.2-1.7-42.4-3.42-63.62-4.89S389,242.5,367.8,241.91c-10.62-.28-21.24-.38-31.83,0-5.3.18-10.59.47-15.85,1a109.52,109.52,0,0,0-15.57,2.48,40.5,40.5,0,0,0-7.35,2.49,19.49,19.49,0,0,0-3.27,1.89c-1,.77-2.09,1.6-3.09,2.43a39.72,39.72,0,0,0-10.13,11.72,30.52,30.52,0,0,0-2.8,7.23,46.43,46.43,0,0,0-1.15,7.75c-.38,5.25-.32,10.64-1.27,15.95Z"/><path d="M1029.23,177.43c.31,5.93.29,11.77.11,17.64s-.52,11.72-1,17.57a317.68,317.68,0,0,1-5.15,34.84,245.8,245.8,0,0,1-9.58,34,189.65,189.65,0,0,1-15,32A143.43,143.43,0,0,1,977,341.67,119,119,0,0,1,948.66,363a125.26,125.26,0,0,1-16.18,7.25c-1.38.52-2.79.94-4.19,1.41l-2.1.7-2.13.59c-1.42.38-2.83.81-4.27,1.16l-4.31,1a142.82,142.82,0,0,1-17.43,2.48,158.25,158.25,0,0,1-17.55.48v-1a161.9,161.9,0,0,0,34.38-4.59,138,138,0,0,0,16.44-5.27,122.8,122.8,0,0,0,15.48-7.52,122.29,122.29,0,0,0,26.84-21.22,145.9,145.9,0,0,0,11-13.14,151.77,151.77,0,0,0,9.39-14.39,192.5,192.5,0,0,0,14.41-31.27,260.5,260.5,0,0,0,9.54-33.22,313.11,313.11,0,0,0,5.63-34.21,316.07,316.07,0,0,0,2.12-34.6Z"/></svg>
            </div>
            <div class="arrow_box arrow_box_3 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="arrow_box" version="1.1" id="Слой_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>arrow_horizontal</title><path d="M391.6,190.8c-14.7-0.2-29.5,0.3-44.2,0.5c-7.4,0.1-14.8,0.2-22.1,0.3l-22.1,0.2c-29.5,0.2-59,0.1-88.6-0.3
                c-29.5-0.5-59.1-1.2-88.6-2.6s-59.1-3-88.5-6.5l0.1-1.4c14.8-0.5,29.5-0.7,44.3-1s29.5-0.5,44.3-0.7c29.5-0.3,59.1-0.2,88.6,0.1
                c29.5,0.4,59.1,1.1,88.6,2.4c7.4,0.3,14.8,0.7,22.2,1.1s14.8,1,22.1,1.5c14.8,1.3,29.5,2.2,44.2,4.9L391.6,190.8z"/><path d="M106.6,255.4c-2.8-4.6-5.8-9-9-13.3c-1.6-2.1-3.3-4.2-5-6.1s-3.5-3.9-5.3-5.8c-7.4-7.4-15.7-14-24.6-19.5
                c-8.9-5.7-18.4-10.5-28-15.4c-4.8-2.5-9.6-5-14.4-7.8s-9.4-5.9-13.2-10l0,0l-1.3-0.8l1.7-0.5c10.4-3,20.7-5.8,30.8-8.9
                s20.2-6.3,30-10.1c9.8-3.7,19.3-8.1,28.4-13.3c9.2-5.1,17.4-11.8,24.4-19.7l1.2,0.8c-2.4,5-5.5,9.6-9.3,13.6c-1.9,2.1-3.8,4-5.9,5.9
                c-2.1,1.9-4.2,3.6-6.5,5.2c-9,6.4-18.7,11.7-29,15.7c-10.2,4.1-20.7,7.2-31.4,9.3c-5.3,1.1-10.7,1.9-16.2,2.4
                c-5.4,0.6-10.9,0.8-16.3,0.6l0.4-1.3l0,0c4.5,2.8,9.3,5.3,14.3,7.2c4.9,2.1,10,4,15,6c10.2,4,20.1,8.9,29.5,14.6
                c9.6,5.8,18.1,13.1,25.4,21.6c7.2,8.5,12.5,18.4,15.8,29.1L106.6,255.4z"/>
              </svg>
            </div>
            <div class="arrow_box arrow_box_4 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="steps_icon" version="1.1" id="Слой_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>arrow_horizontal</title><path d="M199.8,6.9c-0.2,14.7,0.3,29.5,0.5,44.2c0.1,7.4,0.2,14.8,0.3,22.1l0.2,22.2c0.2,29.5,0.1,59-0.3,88.6
                c-0.5,29.5-1.2,59.1-2.6,88.6s-3,59.1-6.5,88.5l-1.4-0.1c-0.5-14.8-0.7-29.5-1-44.3s-0.5-29.5-0.7-44.3c-0.3-29.5-0.2-59.1,0.1-88.6
                c0.4-29.5,1.1-59.1,2.4-88.6c0.3-7.4,0.7-14.8,1.1-22.2s1-14.8,1.5-22.2c1.3-14.8,2.2-29.5,4.9-44.2L199.8,6.9z"/><path d="M264.4,291.9c-4.6,2.8-9,5.8-13.3,9c-2.1,1.6-4.2,3.3-6.1,5s-3.9,3.5-5.8,5.3c-7.4,7.4-14,15.7-19.5,24.6
                c-5.7,8.9-10.5,18.4-15.4,28c-2.5,4.8-5,9.6-7.8,14.4s-5.9,9.4-10,13.2l0,0l-0.8,1.3l-0.5-1.7c-3-10.4-5.8-20.7-8.9-30.8
                s-6.3-20.2-10.1-30c-3.7-9.8-8.1-19.3-13.3-28.4c-5.1-9.2-11.8-17.4-19.7-24.4l0.8-1.2c5,2.4,9.6,5.5,13.6,9.3
                c2.1,1.9,4,3.8,5.9,5.9c1.9,2.1,3.6,4.2,5.2,6.5c6.4,9,11.7,18.7,15.7,29c4.1,10.2,7.2,20.7,9.3,31.4c1.1,5.3,1.9,10.7,2.4,16.2
                c0.6,5.4,0.8,10.9,0.6,16.3l-1.3-0.4l0,0c2.8-4.5,5.3-9.3,7.2-14.3c2.1-4.9,4-10,6-15c4-10.2,8.9-20.1,14.6-29.5
                c5.8-9.6,13.1-18.1,21.6-25.4c8.5-7.2,18.4-12.5,29.1-15.8L264.4,291.9z"/>
              </svg>
            </div>
            <div class="arrow_box arrow_box_5 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="steps_icon" id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><title>arrow_horizontal</title><path d="M5.91,188.77c14.72.16,29.5-.27,44.25-.52,7.39-.11,14.76-.17,22.14-.34l22.15-.23q44.28-.36,88.58.34c29.54.47,59.07,1.24,88.6,2.55s59.08,3,88.52,6.52l-.07,1.43c-14.79.46-29.55.68-44.32,1s-29.53.54-44.3.68q-44.29.39-88.6-.12c-29.53-.36-59.07-1.06-88.6-2.43-7.38-.31-14.77-.74-22.15-1.14s-14.77-1-22.15-1.47c-14.75-1.27-29.53-2.25-44.22-4.89Z"/><path d="M290.91,124.11a155.6,155.6,0,0,0,9,13.31c1.57,2.13,3.26,4.17,5,6.15s3.5,3.92,5.34,5.78a138.47,138.47,0,0,0,24.61,19.52c8.9,5.66,18.4,10.51,28,15.44,4.81,2.47,9.63,5,14.37,7.79s9.42,5.88,13.24,10h0l1.32.77-1.71.49c-10.4,3-20.66,5.84-30.82,8.93s-20.2,6.34-30,10.1a193.5,193.5,0,0,0-28.39,13.34,92.53,92.53,0,0,0-24.35,19.69l-1.2-.78A55.12,55.12,0,0,1,284.6,241a72.74,72.74,0,0,1,5.93-5.85q3.11-2.78,6.47-5.24a131.1,131.1,0,0,1,29-15.73,175.58,175.58,0,0,1,31.41-9.27q8-1.59,16.16-2.39a120.4,120.4,0,0,1,16.34-.57l-.39,1.26h0A85.67,85.67,0,0,0,375.26,196c-4.93-2.08-10-4-15-6a192.6,192.6,0,0,1-29.52-14.58,104,104,0,0,1-25.36-21.65,82,82,0,0,1-15.77-29.07Z"/></svg>
            </div>
            <div class="arrow_box arrow_box_6 wow bounceInUp" data-wow-duration="1.4s">
              <svg class="steps_icon" id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1233 567"><title>arrow_long-03</title><path d="M939.18,296.14c-.77-1.22-1.54-2.42-2.39-3.54a32.14,32.14,0,0,0-2.76-3.17,36.15,36.15,0,0,0-6.54-5.19c-2.36-1.51-4.9-2.79-7.45-4.11-1.28-.66-2.56-1.33-3.82-2.07a16.17,16.17,0,0,1-3.52-2.65l-.32-.34h.42c5.52-1.58,11-3.07,16.18-5.05a53.63,53.63,0,0,0,7.55-3.55,25.26,25.26,0,0,0,6.48-5.24l.32.2a18,18,0,0,1-5.78,6.58,34.49,34.49,0,0,1-7.71,4.18,46.57,46.57,0,0,1-8.36,2.47,38.51,38.51,0,0,1-8.64.79h0l.11-.33a24,24,0,0,0,3.79,1.9l4,1.61a50.64,50.64,0,0,1,7.85,3.88,27.47,27.47,0,0,1,6.74,5.75,22,22,0,0,1,4.21,7.73Z"/><path d="M921.93,276.62c22.6-4.5,45.71-6,68.72-6.39,11.51-.19,23-.1,34.5,0s23,.13,34.35-.4,22.75-1.72,33.56-4.8a74.54,74.54,0,0,0,15.51-6.2,60.48,60.48,0,0,0,13.35-9.83,69.31,69.31,0,0,0,10.37-13,92.85,92.85,0,0,0,7.46-15.09,166.85,166.85,0,0,0,8.69-32.89,320.82,320.82,0,0,0,3.67-34.09c.17-2.86.3-5.72.42-8.58l.15-4.28c0-1.42,0-2.84,0-4.26a149.09,149.09,0,0,0-1.29-17,102.26,102.26,0,0,0-9.74-32.5,77.33,77.33,0,0,0-21.35-26.13A93.41,93.41,0,0,0,1090,45.71a145.1,145.1,0,0,0-33.7-5.83,218.54,218.54,0,0,0-34.32.75,235.4,235.4,0,0,0-33.89,5.74l-.2-.74a235.79,235.79,0,0,1,34-6.14,214,214,0,0,1,34.52-1.08,146.34,146.34,0,0,1,34.12,5.65,95,95,0,0,1,31,15.5,79.32,79.32,0,0,1,22.12,26.66,104.74,104.74,0,0,1,10.21,33.17,150,150,0,0,1,1.44,17.31c.06,1.45,0,2.91.08,4.36l-.08,4.33c-.07,2.88-.15,5.76-.27,8.64a322.44,322.44,0,0,1-3.1,34.5,165.59,165.59,0,0,1-8.34,33.79,97.86,97.86,0,0,1-7.61,15.86A69.7,69.7,0,0,1,1125,252.13a64.3,64.3,0,0,1-14.3,10.56,78.33,78.33,0,0,1-16.42,6.6c-11.36,3.12-23,4.21-34.58,4.66s-23.1.1-34.59-.19-23-.72-34.43-.8-22.94.12-34.38.83-22.85,1.93-34.21,3.59Z"/></svg>
            </div>
            <div class="steps_item steps_item_2 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Определение актуальности</h4>
              <p class="description">Загрузите фото клиента. При необходимости выполните подрезку. Для этого в "WizardMachine" есть встроенные механизмы позволяющие удалить с фото ненужные элементы</p>
            </div>
            <div class="steps_item steps_item_3 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Выбор протокола</h4>
              <p class="description">После определения актуальной зоны выберите необходимый протокол в зависимости от актуальности той или оной зоны "V" оси.</p>
            </div>
            <div class="steps_item steps_item_4 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Диагностика ножом</h4>
              <p class="description">В программе есть виртуальная копия ножа "Мараката". Перемещая ее вдоль вертикальной оси можно перцептивно определить актуальность.</p>
            </div>
            <div class="steps_item steps_item_5 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Подготовка</h4>
              <p class="description">Перенесите все зоны с шаблонного изображения на фото клиента. Начните с актуальной. За тем поместите калибровочное кольцо так чтоб клинет оказался в нем целиком. Размер кольца можно изменять.</p>
            </div>
            <div class="steps_item steps_item_6 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Выполнение протокола</h4>
              <p class="description">После переноса зон запустите выполнение протокола. Программа выполняется 25 — 35 мин. В процессе работы нежелательно выключать устройство и переходить на другие вкладки браузера. После выполнения протокола Вам будет доступно два варианта действий</p>
            </div>
            <div class="steps_item steps_item_7 wow bounceInUp" data-wow-duration="1.4s">
              <!-- <div class="icon"></div> -->
              <h4 class="title">Завершение протокола</h4>
              <p class="description">Когда программа выполнится на экране появится модальное окно с сответствующим сообщением и кнопками "Завершить" и "Другой протокол". Клинув на кнопку "Завершить" Вы переместитесь на главную страницу и можете выйти из программы или начать работу с другим клиентом. Кликнув на кнопку "Другой протокол" Вы можете продолжить работу с текущим клиентом по другому протоколу. При этом не надо будет заново проводить каллибровку и расставляться зоны. Вы просто выбираете другой протокол и запускаете выполнение программы.</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- #services -->
    <!--==========================
      Services Section
    ============================-->
    <section id="services" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3>Как это работает?</h3>
          <h4 class="center-block" style="text-align: center;">Пошаговое описание алгоритма работы "WizardMachine"</h4>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-lightbulb-outline" style="color: #ff689b;"></i></div>
              <h4 class="title">Определение</h4>
              <p class="description">Определитесь со своим желанием, запомните, а лучше запишите его чего же именно Вы хотите.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-body-outline" style="color: #e98e06;"></i></div>
              <h4 class="title">Актуализация</h4>
              <p class="description">Представьте себе в картинках и ощущениях, что у вас это уже случилось.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e6fdfc;"><i class="ion-merge" style="color: #3fcdc7; transform: rotate(200deg); display: inline-block;"></i></div>
              <h4 class="title"><a href="">Подготовка</a></h4>
              <p class="description">Расставьте хаотично кружки на экране. За тем произвольно пронумеруйте их</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-more-outline" style="color:#41cf2e; transform: rotate(135deg);"></i></div>
              <h4 class="title"><a href="">Расстановка</a></h4>
              <p class="description">Поставьте кружки в ровную линию. Направление линии можете быть произвольным</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-checkmark-empty" style="color: #2282ff; display: inline-block; transform: scale(1.5);"></i></div>
              <h4 class="title"><a href="">Подтверждение</a></h4>
              <p class="description">Нажмав кнопку «Я это принимаю» Вы берете ответственность за свои желания!</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-calendar-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Результат</a></h4>
              <p class="description">Полученный цифровой код нужно просматривать на протяжении 21 дня, акуализируясь на желании.</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #services -->

    <!--==========================
      Why Us Section
    ============================-->
    <section id="why-us" class="wow fadeIn">
      <div class="container-fluid">
        
        <header class="section-header">
          <h3>Why choose us?</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div class="row">

          <div class="col-lg-6">
            <div class="why-us-img">
              <img src="<?php bloginfo('template_url'); ?>/img/why-us.jpg" alt="" class="img-fluid">
            </div>
          </div>

          <div class="col-lg-6">
            <div class="why-us-content">
              <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>
              <p>
                Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
                et temporibus. Labore est odio.

                Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
              </p>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-diamond" style="color: #f058dc;"></i>
                <h4>Corporis dolorem</h4>
                <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
              </div>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-object-group" style="color: #ffb774;"></i>
                <h4>Eum ut aspernatur</h4>
                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
              </div>
              
              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-language" style="color: #589af1;"></i>
                <h4>Voluptates dolores</h4>
                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
              </div>
              
            </div>

          </div>

        </div>

      </div>

      <div class="container">
        <div class="row counters">

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>
  
        </div>

      </div>
    </section>

    <!--==========================
      Call To Action Section
    ============================-->
    <section id="call-to-action" class="wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title">Call To Action</h3>
            <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section><!-- #call-to-action -->

    <!--==========================
      Features Section
    ============================-->
    <section id="features">
      <div class="container">

        <div class="row feature-item">
          <div class="col-lg-6 wow fadeInUp">
            <img src="<?php bloginfo('template_url'); ?>/img/features-1.svg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
            </p>
          </div>
        </div>

        <div class="row feature-item mt-5 pt-5">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="<?php bloginfo('template_url'); ?>/img/features-2.svg" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
            <p>
             Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
          </div>
          
        </div>

      </div>
    </section><!-- #about -->

    <!--==========================
      Portfolio Section
    ============================-->
    <section id="portfolio" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/app1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">App 1</a></h4>
                <p>App</p>
                <div>
                  <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/web3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Web 3</a></h4>
                <p>Web</p>
                <div>
                  <a href="img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/app2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">App 2</a></h4>
                <p>App</p>
                <div>
                  <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/card2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Card 2</a></h4>
                <p>Card</p>
                <div>
                  <a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/web2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Web 2</a></h4>
                <p>Web</p>
                <div>
                  <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/app3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">App 3</a></h4>
                <p>App</p>
                <div>
                  <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/card1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Card 1</a></h4>
                <p>Card</p>
                <div>
                  <a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/card3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Card 3</a></h4>
                <p>Card</p>
                <div>
                  <a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="<?php bloginfo('template_url'); ?>/img/portfolio/web1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a href="#">Web 1</a></h4>
                <p>Web</p>
                <div>
                  <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #portfolio -->

    <!--==========================
      Clients Section
    ============================-->
    <section id="testimonials">
      <div class="container">

        <header class="section-header">
          <h3>Testimonials</h3>
        </header>

        <div class="row justify-content-center">
          <div class="col-lg-8">

            <div class="owl-carousel testimonials-carousel wow fadeInUp">
    
              <div class="testimonial-item">
                <img src="<?php bloginfo('template_url'); ?>/img/testimonial-1.jpg" class="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="<?php bloginfo('template_url'); ?>/img/testimonial-2.jpg" class="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="<?php bloginfo('template_url'); ?>/img/testimonial-3.jpg" class="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="<?php bloginfo('template_url'); ?>/img/testimonial-4.jpg" class="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                </p>
              </div>

            </div>

          </div>
        </div>


      </div>
    </section><!-- #testimonials -->

    <!--==========================
      Team Section
    ============================-->
    <section id="team" class="section-bg">
      <div class="container">
        <div class="section-header">
          <h3>Team</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 wow fadeInUp">
            <div class="member">
              <img src="<?php bloginfo('template_url'); ?>/img/team-1.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="member">
              <img src="<?php bloginfo('template_url'); ?>/img/team-2.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img src="<?php bloginfo('template_url'); ?>/img/team-3.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="member">
              <img src="<?php bloginfo('template_url'); ?>/img/team-4.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #team -->

    <!--==========================
      Clients Section
    ============================-->
    <section id="clients" class="wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h3>Our Clients</h3>
        </header>

        <div class="owl-carousel clients-carousel">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-1.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-2.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-3.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-4.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-5.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-6.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-7.png" alt="">
          <img src="<?php bloginfo('template_url'); ?>/img/clients/client-8.png" alt="">
        </div>

      </div>
    </section><!-- #clients -->


    <!--==========================
      Pricing Section
    ============================-->
    <section id="pricing" class="wow fadeInUp section-bg">

      <div class="container">

        <header class="section-header">
          <h3>Pricing</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </header>

        <div class="row flex-items-xs-middle flex-items-xs-center">
      
          <!-- Basic Plan  -->
          <div class="col-xs-12 col-lg-4">
            <div class="card">
              <div class="card-header">
                <h3><span class="currency">$</span>19<span class="period">/month</span></h3>
              </div>
              <div class="card-block">
                <h4 class="card-title"> 
                  Basic Plan
                </h4>
                <ul class="list-group">
                  <li class="list-group-item">Odio animi voluptates</li>
                  <li class="list-group-item">Inventore quisquam et</li>
                  <li class="list-group-item">Et perspiciatis suscipit</li>
                  <li class="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" class="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
          <!-- Regular Plan  -->
          <div class="col-xs-12 col-lg-4">
            <div class="card">
              <div class="card-header">
                <h3><span class="currency">$</span>29<span class="period">/month</span></h3>
              </div>
              <div class="card-block">
                <h4 class="card-title"> 
                  Regular Plan
                </h4>
                <ul class="list-group">
                  <li class="list-group-item">Odio animi voluptates</li>
                  <li class="list-group-item">Inventore quisquam et</li>
                  <li class="list-group-item">Et perspiciatis suscipit</li>
                  <li class="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" class="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
          <!-- Premium Plan  -->
          <div class="col-xs-12 col-lg-4">
            <div class="card">
              <div class="card-header">
                <h3><span class="currency">$</span>39<span class="period">/month</span></h3>
              </div>
              <div class="card-block">
                <h4 class="card-title"> 
                  Premium Plan
                </h4>
                <ul class="list-group">
                  <li class="list-group-item">Odio animi voluptates</li>
                  <li class="list-group-item">Inventore quisquam et</li>
                  <li class="list-group-item">Et perspiciatis suscipit</li>
                  <li class="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" class="btn">Choose Plan</a>
              </div>
            </div>
          </div>
      
        </div>
      </div>

    </section><!-- #pricing -->

    <!--==========================
      Frequently Asked Questions Section
    ============================-->
    <section id="faq">
      <div class="container">
        <header class="section-header">
          <h3>Frequently Asked Questions</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </header>

        <ul id="faq-list" class="wow fadeInUp">
          <li>
            <a data-toggle="collapse" class="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="ion-android-remove"></i></a>
            <div id="faq1" class="collapse" data-parent="#faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="ion-android-remove"></i></a>
            <div id="faq2" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="ion-android-remove"></i></a>
            <div id="faq3" class="collapse" data-parent="#faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="ion-android-remove"></i></a>
            <div id="faq4" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq5" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="ion-android-remove"></i></a>
            <div id="faq5" class="collapse" data-parent="#faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq6" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="ion-android-remove"></i></a>
            <div id="faq6" class="collapse" data-parent="#faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section><!-- #faq -->

  </main>

  <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">

        <div class="row">

          <div class="col-lg-6">

            <div class="row">

                <div class="col-sm-6">

                  <div class="footer-info">
                    <h3>Rapid</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                  </div>

                  <div class="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                    <form action="" method="post">
                      <input type="email" name="email"><input type="submit"  value="Subscribe">
                    </form>
                  </div>

                </div>

                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>

                  <div class="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                      A108 Adam Street <br>
                      New York, NY 535022<br>
                      United States <br>
                      <strong>Phone:</strong> +1 5589 55488 55<br>
                      <strong>Email:</strong> info@example.com<br>
                    </p>
                  </div>

                  <div class="social-links">
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                  </div>

                </div>

            </div>

          </div>

          <div class="col-lg-6">

            <div class="form">
              
              <h4>Send us a message</h4>
              <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>

                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>

                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>

          </div>

          

        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
        -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- #footer -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  <!-- Uncomment below i you want to use a preloader -->
  <!-- <div id="preloader"></div> -->
  <?php wp_footer(); ?>
  <!-- JavaScript Libraries -->
  <script src="<?php bloginfo('template_url'); ?>/lib/jquery/jquery.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/jquery/jquery-migrate.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/easing/easing.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/mobile-nav/mobile-nav.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/wow/wow.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/waypoints/waypoints.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/counterup/counterup.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/isotope/isotope.pkgd.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/lightbox/js/lightbox.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="<?php bloginfo('template_url'); ?>/contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="<?php bloginfo('template_url'); ?>/js/main.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>

</body>
</html>
