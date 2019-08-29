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
              <div class="icon"><svg class="steps_icon" id="human" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.cls-1{fill:none;stroke:#1bb1dc;stroke-miterlimit:10;stroke-width:5px;}</style></defs><title>human_in_frame</title><path d="M110,114H90a3,3,0,0,1-3-3s-1-9-1-21,1-21,1-21a3,3,0,0,1,3-3h20a3,3,0,0,1,3,3s1,18,1,21-1,21-1,21A3,3,0,0,1,110,114Z"/><path d="M77,80c2.83-7.36,5-14,13-14,1.86,0,2.13.83,3,2.44l0,.08a3.6,3.6,0,0,1-1.42,4.84C89,74.94,84.38,78.75,83,87c-1.48,8.86-1,17.68-1,22,0,6-8,6-8,0C74,106.75,72,93,77,80Z"/><path d="M122.14,80c-2.83-7.36-5-14-13-14-1.86,0-2.13.83-3,2.44l0,.08a3.6,3.6,0,0,0,1.42,4.84c2.72,1.58,7.3,5.39,8.68,13.64,1.48,8.86,1,17.68,1,22,0,6,8,6,8,0C125.14,106.75,127.14,93,122.14,80Z"/><circle cx="100" cy="52" r="12"/><rect x="85.16" y="106.94" width="12" height="52.07" rx="5.41" ry="5.41" transform="translate(10.84 -6.82) rotate(4.55)"/><rect x="103.16" y="106.94" width="12" height="52.07" rx="5.41" ry="5.41" transform="translate(228.53 256.86) rotate(175.45)"/><rect class="cls-1" x="34.5" y="18.5" width="128" height="169"/><rect x="29" y="13" width="12" height="12"/><rect x="157" y="13" width="12" height="12"/><rect x="157" y="182" width="12" height="12"/><rect x="157" y="91" width="12" height="12"/><rect x="29" y="91" width="12" height="12"/><rect x="29" y="182" width="12" height="12"/></svg></div>
              <h4 class="title">Загрузка и коррекция фото</h4>
              <p class="description">Загрузите фото клиента и при необходимости выполните подрезку. Для этого в "WizardMachine" есть встроенные механизмы</p>
            </div>
            <div class="arrow_box">
              
            </div>
            <div class="steps_item steps_item_2 wow bounceInUp" data-wow-duration="1.4s">
              <div class="icon"><svg id="marakata" class="steps_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.cls-3{fill:#fff;}.cls-4{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:1.22px;}</style></defs><title>marakata</title><path d="M10.49,103a179.3,179.3,0,0,1,22-6.46q11-2.58,22-4.32a396.94,396.94,0,0,1,44.17-4.39,290.08,290.08,0,0,1,44.29.94,222.35,222.35,0,0,1,22.22,3.41,134.79,134.79,0,0,1,22.28,6.47l0,1.7a135.3,135.3,0,0,1-22,7.47,219,219,0,0,1-22,4.41,290.19,290.19,0,0,1-44.21,2.94A397.15,397.15,0,0,1,55,112.78q-11.08-1.23-22.21-3.32A180,180,0,0,1,10.51,104Z"/><path class="cls-3" d="M111.53,88.53a11.54,11.54,0,0,0-1.35,3c-.33,1.06-.65,2.12-.91,3.2-.55,2.16-1,4.33-1.45,6.52s-.81,4.39-1.19,6.59l-1.11,6.64h0a58.73,58.73,0,0,1,.22-6.76,63.44,63.44,0,0,1,.92-6.7,49.93,49.93,0,0,1,1.67-6.58,30.57,30.57,0,0,1,1.26-3.16,9.45,9.45,0,0,1,1.92-2.83Z"/><path class="cls-3" d="M100.08,89l-.62,1.21c-.24.38-.52.73-.77,1.11A26.39,26.39,0,0,1,97,93.45c-.61.66-1.24,1.29-1.88,1.93l-2,1.82a78.82,78.82,0,0,1-8.57,6.43,72.62,72.62,0,0,1-9.32,5.3c-.79.41-1.64.72-2.46,1.08s-1.67.65-2.52.93A21.52,21.52,0,0,1,65,112V112a36.7,36.7,0,0,0,9.75-4c3.09-1.68,6.07-3.57,9-5.55s5.75-4.08,8.53-6.25l2.06-1.66,2-1.72A23.26,23.26,0,0,0,99.92,89Z"/><path class="cls-3" d="M128.4,98.49a4.61,4.61,0,0,1,.53-2,2.14,2.14,0,0,1,.79-.82,1.8,1.8,0,0,1,1.18-.2,4.59,4.59,0,0,1,2,1,7.12,7.12,0,0,1,1.55,1.51,7.9,7.9,0,0,1,1.16,4.12,6.84,6.84,0,0,1-1.08,4.2,2.6,2.6,0,0,1-1,.8,2.16,2.16,0,0,1-1.3.12,4.25,4.25,0,0,1-1.94-1.2,13.64,13.64,0,0,0-3.11-2.39,17.27,17.27,0,0,0-7.67-2v-.06a15.26,15.26,0,0,1,8,1.42,13.33,13.33,0,0,1,3.42,2.37,3.32,3.32,0,0,0,1.49.88,1.2,1.2,0,0,0,1.25-.56,4.28,4.28,0,0,0,.67-1.65,7.93,7.93,0,0,0,.19-1.89,7.57,7.57,0,0,0-.9-3.63A6.53,6.53,0,0,0,132.37,97a4.1,4.1,0,0,0-1.59-.92,1.34,1.34,0,0,0-1.46.61,5,5,0,0,0-.72,1.8Z"/><path class="cls-3" d="M155.5,95.5s3,9,1,9h-16Z"/><path class="cls-3" d="M162.49,95.51a9.28,9.28,0,0,0-1.42-.69,2.48,2.48,0,0,0-1.35-.2c-.66.16-.7,1.28-.6,2.24a9.87,9.87,0,0,0,.72,2.85,5.57,5.57,0,0,0,1.61,2.28,2.67,2.67,0,0,0,2.4.49,6.26,6.26,0,0,0,2.41-1.56,5.5,5.5,0,0,1,3.12-1.41,4.58,4.58,0,0,1,3.15.94l-.06.1a4.64,4.64,0,0,0-3-.25,5,5,0,0,0-2.43,1.49,7.08,7.08,0,0,1-2.85,1.94,3.85,3.85,0,0,1-1.88.13,4.16,4.16,0,0,1-1.72-.78,7.87,7.87,0,0,1-2.72-6.17,6,6,0,0,1,.23-1.74,2.24,2.24,0,0,1,.5-.88,1.5,1.5,0,0,1,1-.46,2.81,2.81,0,0,1,1.69.57,6,6,0,0,1,1.21,1.09Z"/></svg></div>
              <h4 class="title">Определение актуальной зоны по фото</h4>
              <p class="description">В программе есть виртуальная копия ножа "Мараката". Перемещая ее вдоль вертикальной оси можно перцептивно определить актуальность.</p>
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
