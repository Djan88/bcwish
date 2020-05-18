<!DOCTYPE html>
<html class="all" lang="en">
<head>
  <meta charset="utf-8">
  <title><?php wp_title(''); ?></title>
  <meta name="viewport" content="user-scalable=no" />
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/fav180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/fav32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/fav16.png">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">

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
  <link href="<?php bloginfo('template_url'); ?>/css/JCrop.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/jquery-ui.min.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/sweetalert.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
  <link href="<?php bloginfo('template_url'); ?>/css/zones_position.css" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body>
  <!--==========================
  Header
  ============================-->
  <header id="header" class="hidden">
    <button type="button" class="wizard_crop hidden header_btn"><i class="fa fa-crop"></i></button>
    <a href="/" class="wizard_to_start hidden header_btn"><i class="fa fa-arrow-left"></i></a>
    <button type="button" class="wizard_to_what_way hidden header_btn">
      <i class="fa fa-arrow-left"></i>
    </button>
    <button type="button" class="wizard_to_protList hidden header_btn">
      <i class="fa fa-arrow-left"></i>
    </button>
    <button type="button" class="wizard_to_protDiag hidden header_btn">
      <i class="fa fa-arrow-left"></i>
    </button>
    <button type="button" class="wizard_clean_graf hidden header_btn">
      <i class="fa fa-trash"></i>
    </button>
    <button type="button" class="wizard_play header_btn hidden">
      <i class="fa fa-play-circle wizard_start_icon"></i>
    </button>
    <button type="button" class="wizard_stop hidden header_btn" data-toggle="popover" data-placement="bottom" title="Протокол остановлен!" data-content="Выполнение протокола будет приостановлено по окончании текущей фазы. Все данные будут сохранены">
      <span class="wizard_percent">0%</span>
      <i class="fa fa-stop-circle wizard_stop_icon"></i>
    </button>
    <?php if(is_user_logged_in()){ ?>
      <?php 
        $cur_user_id = get_current_user_id();
        $user = get_userdata($cur_user_id);
        $user_date  =  strtotime($user->user_registered);
        $cur_date  =  strtotime("now");
        $date_diff = $cur_date - $user_date;
        if ($date_diff < 259000) {
          $new_registred = 1;
        } else {
          $new_registred = 0;
        }
      ?>
    <?php } ?>
    <?php if(current_user_can('subscriber') && $new_registred == 0) { ?>

    <?php } else if(current_user_can('contributor') || current_user_can('administrator') || (current_user_can('subscriber') && $new_registred == 1)) { ?>
      <div class="wizard_heading float-left">Загрузите первое фото</div>
    <?php } ?>
    <div id="topbar">
      <div class="container">
        <div class="social-links">
          <a target="_blank" href="https://www.instagram.com/dr.chikurov/" class="instagram"><i class="fa fa-instagram"></i></a>
          <a target="_blank" href="https://www.youtube.com/watch?v=nu73-7soe8g&t=191s" class="youtube"><i class="fa fa-youtube"></i></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100012253260685&pnref" class="facebook"><i class="fa fa-facebook"></i></a>
          <a target="_blank" href="https://vk.com/id139677998" class="vk"><i class="fa fa-vk"></i></a>
          <a target="_blank" href="https://chikurov.com" class="site"><i class="fa fa-globe"></i></a>
        </div>
      </div>
    </div>
    <div class="container container_main container container_main_main">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <h1 class="text-light"><a href="/" class="to_home scrollto"><span><span class="acent">W</span>IZARD<span class="acent">D</span>UOS</span></a></h1>
        <!-- <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> -->
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <?php if(is_user_logged_in()){ ?>
            <li><a href="/">Программа</a></li>
            <li><a href="/kabinet">Личный кабинет</a></li>
            <?php if(current_user_can('administrator')){ ?>
              <li><a href="/wp-admin">Панель управления</a></li>
            <?php } ?>
          <?php } else { ?>
            <li class="active"><a href="#intro">Вход</a></li>
            <li><a href="#services">Инструкция</a></li>
          <?php } ?>
          <li>
            <?php //echo do_shortcode( '[theme_switcha_select text="Выберите версию"]' ); ?>
          </li>
          <li><a class="mobile-nav-toggle mobile-nav-toggle_open" href="" data-toggle="modal" data-target="#mail">Обратная связь</a></li>
          <li><a target="_blank" href="https://www.youtube.com/watch?v=9XI9Z7kHmmY&t=95s">Обучающее видео</a></li>
          <?php if(is_user_logged_in()){ ?>
            <li><a href="/wp-login.php?action=logout&_wpnonce=0d90a53269">Выход</a></li>
          <?php } ?>
          <li>
            <div class="social-links">
              <a target="_blank" href="https://www.instagram.com/dr.chikurov/" class="instagram"><i class="fa fa-instagram"></i></a>
              <a target="_blank" href="https://www.youtube.com/user/ThePractik01/" class="youtube"><i class="fa fa-youtube"></i></a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100012253260685&pnref" class="facebook"><i class="fa fa-facebook"></i></a>
              <a target="_blank" href="https://vk.com/id139677998" class="vk"><i class="fa fa-vk"></i></a>
              <a target="_blank" href="https://chikurov.com" class="site"><i class="fa fa-globe"></i></a>
            </div>
          </li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header><!-- #header -->

  <!--==========================
    Intro Section
  ============================-->
  <div class="container">
    <div class="row wizard_operation">
      <div class="col-sm-6 col-md-6 wizard_templates wizard_templates_mw wow fadeInLeft" id="template">
        <img src="<?php bloginfo('template_url'); ?>/img/mw.png" alt="" class="wizard_template wizard_template_1">
        <div class="ring draggable" id="ring">
          <div class="zone zone_ring"></div>
        </div>
        <!-- <div class="zone zone_movable zone_v0 draggable">V0</div> -->
        <div class="zone zone_movable zone_v1 draggable">V1</div>
        <div class="zone zone_movable zone_v2 draggable">V2</div>
        <div class="zone zone_movable zone_v3 draggable">V3</div>
        <div class="zone zone_movable zone_v4 draggable">V4</div>
        <div class="zone zone_movable zone_v5 draggable">V5</div>
        <div class="zone zone_movable zone_v- draggable">V-</div>

        <div class="zone zone_movable zone_d2 draggable">D2</div>
        <div class="zone zone_movable zone_d2_ draggable">D2</div>
        <div class="zone zone_movable zone_d3 draggable">D3</div>
        <div class="zone zone_movable zone_d4 draggable">D4</div>
        <div class="zone zone_movable zone_d5 draggable">D5</div>
        <div class="zone zone_movable zone_d6 draggable">D6</div>

        <div class="zone zone_movable zone_s2 draggable">S2</div>
        <div class="zone zone_movable zone_s2_ draggable">S2</div>
        <div class="zone zone_movable zone_s3 draggable">S3</div>
        <div class="zone zone_movable zone_s4 draggable">S4</div>
        <div class="zone zone_movable zone_s5 draggable">S5</div>
        <div class="zone zone_movable zone_s6 draggable">S6</div>

        <div class="zone zone_movable zone_alt_v1 draggable">V1</div>
        <div class="zone zone_movable zone_alt_v2 draggable">V2</div>
        <div class="zone zone_movable zone_alt_v3 draggable">V3</div>
        <div class="zone zone_movable zone_alt_v4 draggable">V4</div>
        <div class="zone zone_movable zone_alt_v5 draggable">V5</div>
        <div class="zone zone_movable zone_alt_v- draggable">V-</div>

        <div class="zone zone_movable zone_alt_d2 draggable">D2</div>
        <div class="zone zone_movable zone_alt_d2_ draggable">D2</div>
        <div class="zone zone_movable zone_alt_d3 draggable">D3</div>
        <div class="zone zone_movable zone_alt_d4 draggable">D4</div>
        <div class="zone zone_movable zone_alt_d5 draggable">D5</div>
        <div class="zone zone_movable zone_alt_d6 draggable">D6</div>

        <div class="zone zone_movable zone_alt_s2 draggable">S2</div>
        <div class="zone zone_movable zone_alt_s2_ draggable">S2</div>
        <div class="zone zone_movable zone_alt_s3 draggable">S3</div>
        <div class="zone zone_movable zone_alt_s4 draggable">S4</div>
        <div class="zone zone_movable zone_alt_s5 draggable">S5</div>
        <div class="zone zone_movable zone_alt_s6 draggable">S6</div>

        <div class="zone zone_movable zone_hidden zone_hidden_1 hidden draggable"></div>
        <div class="zone zone_movable zone_hidden zone_hidden_2 hidden draggable"></div>
        <div class="zone zone_movable zone_hidden zone_hidden_3 hidden draggable"></div>
        <div class="zone zone_movable zone_hidden zone_hidden_4 hidden draggable"></div>
      </div>
      <div class="col-sm-12 col-md-12 wizard_way">
        <button class="btn btn-success wizard_play wizard_play_inline">START</button>
        
      </div>
    </div>
  </div>


  <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg hidden">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="footer-info">
                  <h3><span class="acent">W</span>izard<span class="acent">D</span>uos</h3>
                  <p>Проведите диагностику смещая любое фото, а затем выберите протокол!</p><p><b>Инверсный протокол</b>  -  любые позиции фото людей любого пола по отношению друг к другу</p>
                  <p><b>Классический протокол</b>  -  фото мужчины слева , фото женщины справа</p>
                  <p><b>Мужской протокол</b>  -  фото более старшего мужчины над фото более младшего мужчины</p>
                  <p><b>Женский протокол</b>  -  фото более младшей женщины над фото более старше женщины</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-sm-4">
            <h4>Новости школы</h4>
            <p>Подпишитесь на новости <b>"Школы Доктора Чикурова"</b> и <b>"WizardDuos"</b> в любой из социальных сетей. Будет интересно, гарантируем!</p>
            <div class="social-links">
              <a target="_blank" href="https://www.instagram.com/dr.chikurov/" class="instagram"><i class="fa fa-instagram"></i></a>
              <a target="_blank" href="https://www.youtube.com/user/ThePractik01/" class="youtube"><i class="fa fa-youtube"></i></a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100012253260685&pnref" class="facebook"><i class="fa fa-facebook"></i></a>
              <a target="_blank" href="https://vk.com/id139677998" class="vk"><i class="fa fa-vk"></i></a>
              <a target="_blank" href="https://chikurov.com" class="site"><i class="fa fa-globe"></i></a>
            </div>
          </div> -->
          <div class="col-sm-4">
            <div class="form">
              <h4>Есть вопрос? Есть ответ!</h4>
              <p>У Вас остались вопросы? Нужна помощь в освоениии <b>"WizardDuos"</b>? Хотите сказать нам спасибо? Воспользуйтесь формой ниже. Вам оперативно ответят!<br><button class="form_triger" data-toggle="modal" data-target="#mail"><i class="fa fa-envelope"></i></button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer><!-- #footer -->

  <!-- <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a> -->
  <!-- Uncomment below i you want to use a preloader -->
  <!-- <div id="preloader"></div> -->
  <?php wp_footer(); ?>
  <!-- JavaScript Libraries -->
  <script src="<?php bloginfo('template_url'); ?>/js/jquery-ui.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/jquery.ui.touch-punch.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/easing/easing.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/mobile-nav/mobile-nav.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/lib/wow/wow.min.js"></script>
  <!-- <script src="<?php //bloginfo('template_url'); ?>/lib/waypoints/waypoints.min.js"></script> -->
  <!-- <script src="<?php //bloginfo('template_url'); ?>/lib/counterup/counterup.min.js"></script> -->
  <!-- <script src="<?php //bloginfo('template_url'); ?>/lib/owlcarousel/owl.carousel.min.js"></script> -->
  <script src="<?php bloginfo('template_url'); ?>/lib/isotope/isotope.pkgd.min.js"></script>
  <!-- <script src="<?php //bloginfo('template_url'); ?>/lib/lightbox/js/lightbox.min.js"></script> -->
  <!-- Contact Form JavaScript File -->
  <!-- <script src="<?php //bloginfo('template_url'); ?>/contactform/contactform.js"></script> -->

  <!-- Template Main Javascript File -->
  <script src="<?php bloginfo('template_url'); ?>/js/main.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/JCrop.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/exif.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/sweetalert.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/vivus.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/howler.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/gsap.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/protocols.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
  
  <div class="modal fade" id="mail" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">Обратная связь</h4>
        </div>
        <div class="modal-text">
          <?php echo do_shortcode('[contact-form-7 id="262" title="Обратная связь"]')?>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
