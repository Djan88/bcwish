<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/style/images/favicon.png">
<title><?php wp_title(''); ?></title>
<!-- Bootstrap core CSS -->
<link href="<?php bloginfo('template_url'); ?>/style/css/bootstrap.min.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style/css/plugins.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style/css/prettify.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style/css/color/orange.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style/type/fontello.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/style/type/budicons.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="style/js/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<?php wp_head(); ?> 
</head>
<body class="full-layout">
<div id="preloader"><div id="status"><div class="spinner"></div></div></div>
<div class="body-wrapper">
  <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header"> <a class="btn responsive-menu" data-toggle="collapse" data-target=".navbar-collapse"><i></i></a>
      <!-- <div class="navbar-brand text-center"> <a href="index.html"><img src="<?php //bloginfo('template_url'); ?>/style/images/logo.png" alt="" data-src="<?php //bloginfo('template_url'); ?>/style/images/logo.png" data-ret="<?php //bloginfo('template_url'); ?>/style/images/logo@2x.png" class="retina" /></a> </div> -->
      <!-- /.navbar-brand --> 
    </div>
    <!-- /.navbar-header -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="current"><a href="#home" class="hint--right" data-hint="К Началу"><i class="budicon-home-1"></i><span>К Началу</span></a></li>
        <?php if(is_user_logged_in()){ ?>
          <li><a href="#nine" class="hint--right nine_link" data-hint="Оцифратор">9<span>Оцифратор</span></a></li>
        <?php } else { ?>
          <li><a href="#login" class="hint--right" data-hint="Войти"><i class="budicon-lock"></i><span>Войти</span></a></li>
        <?php } ?>
        <?php if(is_user_logged_in()){ ?>
          <?php if(is_user_role('administrator')) { ?>
            <li><a href="/wp-admin" class="hint--right" data-hint="Панель"><i class="budicon-setting"></i><span>Панель</span></a></li>
          <?php } ?>
        <?php } ?>
        <li><a href="#about" class="hint--right" data-hint="Что это такое?"><i class="budicon-book-1"></i><span>Что это такое?</span></a></li>
        <li><a href="#contact" class="hint--right" data-hint="Техподдержка"><i class="budicon-support"></i><span>Техподдержка</span></a></li>
        <li><a href="https://chikurov.com" target="_blank" class="hint--right" data-hint="Кто это придумал?"><i class="budicon-author"></i><span>Кто это придумал?</span></a></li>
        <!-- <li><a href="#elsewhere" class="hint--right fancybox-inline" data-hint="Elsewhere" data-fancybox-width="325" data-fancybox-height="220"><i class="icon-heart-empty-1"></i><span>Elsewhere</span></a></li> -->
      </ul>
      <!-- /.navbar-nav --> 
    </div>
    <!-- /.navbar-collapse -->
    <!-- <div id="elsewhere" style="display:none;">
      <h1>Me, Elsewhere</h1>
      <div class="divide20"></div>
      <ul class="social">
        <li><a href="#"><i class="icon-s-twitter"></i></a></li>
        <li><a href="#"><i class="icon-s-facebook"></i></a></li>
        <li><a href="#"><i class="icon-s-instagram"></i></a></li>
        <li><a href="#"><i class="icon-s-flickr"></i></a></li>
        <li><a href="#"><i class="icon-s-pinterest"></i></a></li>
        <li><a href="#"><i class="icon-s-linkedin"></i></a></li>
      </ul>
    </div> -->
    <!-- /#elsewhere --> 
  </nav>
  <!-- /.navbar -->
  
  <section id="home" class="naked">
    <div class="fullscreenbanner-container revolution">
      <div class="fullscreenbanner">
        <ul>
          <li data-transition="fade"> <img src="<?php bloginfo('template_url'); ?>/style/images/dummy.png" alt="slidebg1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="repeat">
            <h1 class="tp-caption caption large sfb" data-x="center" data-y="center" data-voffset="-25" data-speed="900" data-start="1000" data-endspeed="100" data-easing="Sine.easeOut">"Девяточка"</h1>
            <div class="tp-caption small tp-fade fadeout tp-resizeme" data-x="center" data-y="center" data-voffset="25" data-speed="100"
			data-start="1500"
			data-easing="Power4.easeOut"
			data-splitin="chars"
			data-splitout="chars"
			data-elementdelay="0.03"
			data-endelementdelay="0"
			data-endspeed="100"
			data-endeasing="Power1.easeOut"
			style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;">Психофизическая трансформационная игра</div>
            <div class="arrow smooth">
              <?php if(is_user_logged_in()){ ?>
                <a href="#nine"><i class="icon-down-open-big"></i></a>
              <?php } else { ?>
                <a href="#login"><i class="icon-down-open-big"></i></a>
              <?php } ?>
            </div>
          </li>
        </ul>
        <div class="tp-bannertimer"></div>
      </div>
      <!-- /.fullscreenbanner --> 
    </div>
    <!-- /.revolution --> 
  </section>
  <!-- /#home -->
  
  <div class="container">
    <?php if(is_user_logged_in()){ ?>
      <section id="nine" class="nine">
        <div class="box">
          <h2 class="section-title pull-left">Оцифратор</h2>
          
        </div>
        <!-- /.box --> 
      </section>
      <!-- /#login -->
    <?php } else { ?>
      <section id="login" class="login">
        <div class="box">
          <h2 class="section-title pull-left">Введите Ваши логин и пароль</h2>
          <div class="login__form">
            <div class="container main-header">
              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <form name="loginform" id="loginform" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
                    <p>
                        <label for="user_login"><?php _e('Username') ?><br />
                        <input type="text" name="log" id="user_login" class="input" value="<?php echo esc_attr($user_login); ?>" size="20" /></label>
                    </p>
                    <p>
                        <label for="user_pass"><?php _e('Password') ?><br />
                        <input type="password" name="pwd" id="user_pass" class="input" value="" size="20" /></label>
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
                        <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="<?php esc_attr_e('Log In'); ?>" />
                <?php   if ( $interim_login ) { ?>
                        <input type="hidden" name="interim-login" value="1" />
                <?php   } else { ?>
                        <input type="hidden" name="redirect_to" value="/" />
                <?php   } ?>
                <?php   if ( $customize_login ) : ?>
                        <input type="hidden" name="customize-login" value="1" />
                <?php   endif; ?>
                        <input type="hidden" name="testcookie" value="1" />
                    </p>
                    <p class="note_small">Вопросы связанные с получением доступа на проект "MARAKATA" можно задать на <a class="bablosadres" href="mailto:info@chikurov.com" style="color: #fff;">info@chikurov.com</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box --> 
      </section>
      <!-- /#login -->
    <?php } ?>
    <section id="about">
      <div class="box">
        <h2 class="section-title">Who is Behind All This</h2>
        <div class="row">
	      <div class="col-md-5 col-md-push-7 col-sm-12">
            <figure class="frame"><img src="<?php bloginfo('template_url'); ?>/style/images/art/about.jpg" alt="" /></figure>
          </div>
          <!-- /column -->
          <div class="col-md-7 col-md-pull-5 col-sm-12">
            <p class="lead">Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna. </p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus. </p>
            <p>Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p>Fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla.</p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="clearfix"></div>
        <div class="divide40"></div>
        <h2 class="section-title">My Services</h2>
        <div class="divide10"></div>
        <div class="services-1">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-heart icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Wedding Photography</h5>
                <p>Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column -->
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-gender-female icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Birth Photography</h5>
                <p>Vestibulum id ligula porta euismod semper. Aenean lacinia bibendum vestibulum. Cum sociis natoque.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column -->
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-meal icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Food Photography</h5>
                <p>Aenean eu leo quam. Pellente ornare sem lacinia quam venenatis vestibulum sagittis montes, nascetur ridiculus mus.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column --> 
			<div class="divide30"></div>
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-bag icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Fashion Photography</h5>
                <p>Fusce dapibus commodo, tortor mauris condimentum nibh, ut fermentum massa. Maecenas sed diam eget risus.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column -->
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-diamond icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Jewelery Photography</h5>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis sit amet non magna sit amet.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column -->
            <div class="col-md-4 col-sm-6">
              <div class="icon"> <i class="budicon-cocktail icn"></i> </div>
              <!-- /.icon -->
              <div class="text">
                <h5>Drink Photography</h5>
                <p>Morbi leo risus, porta ac consectetur ac at eros. Cras mattis consectetur purus. Cras mattis consectetur purus.</p>
              </div>
              <!-- /.text --> 
            </div>
            <!-- /column --> 
          </div>
          <!-- /.row --> 
        </div>
        <!-- /.services --> 
        
      </div>
      <!-- /.box --> 
    </section>
    <!-- /#about -->
    
    <section id="contact">
      <div class="box">
        <h2 class="section-title">Get in Touch with Me</h2>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <div class="divide20"></div>
        <div class="row text-center services-2">
          <div class="col-md-3 col-sm-6"> <i class="budicon-map"></i>
            <p>Moon Street Light Avenue <br />
              14/05 Jupiter, JP 80630</p>
          </div>
          <div class="col-md-3 col-sm-6"> <i class="budicon-telephone"></i>
            <p>00 (123) 456 78 90 <br />
              00 (987) 654 32 10 </p>
          </div>
          <div class="col-md-3 col-sm-6"> <i class="budicon-mobile"></i>
            <p>00 (123) 456 78 90 <br />
              00 (987) 654 32 10 </p>
          </div>
          <div class="col-md-3 col-sm-6"> <i class="budicon-mail"></i>
            <p> <a class="nocolor" href="mailto:#">manager@email.com</a> <br />
              <a class="nocolor" href="mailto:#">asistant@email.com</a> </p>
          </div>
        </div>
        <!-- /.services-2 -->
        <div class="divide30"></div>
        <div class="form-container">
          <div class="response alert alert-success"></div>
          <form class="forms" action="contact/form-handler.php" method="post">
            <fieldset>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-row text-input-row name-field">
                    <label>Name</label>
                    <input type="text" name="name" class="text-input defaultText required"/>
                  </div>
                  <div class="form-row text-input-row email-field">
                    <label>Email</label>
                    <input type="text" name="email" class="text-input defaultText required email"/>
                  </div>
                  <div class="form-row text-input-row subject-field">
                    <label>Subject</label>
                    <input type="text" name="subject" class="text-input defaultText"/>
                  </div>
                </div>
                <div class="col-sm-6 lp5">
                  <div class="form-row text-area-row">
                    <label>Message</label>
                    <textarea name="message" class="text-area required"></textarea>
                  </div>
                  <div class="form-row hidden-row">
                    <input type="hidden" name="hidden" value="" />
                  </div>
                  <div class="nocomment">
                    <label for="nocomment">Leave This Field Empty</label>
                    <input id="nocomment" value="" name="nocomment" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="button-row pull-right">
                    <input type="submit" value="Send Message" name="submit" class="btn btn-submit bm0" />
                  </div>
                </div>
                <div class="col-sm-6 lp5">
                  <div class="button-row pull-left">
                    <input type="reset" value="Clear Message" name="reset" class="btn btn-submit bm0" />
                  </div>
                </div>
                <input type="hidden" name="v_error" id="v-error" value="Required" />
                <input type="hidden" name="v_email" id="v-email" value="Enter a valid email" />
              </div>
            </fieldset>
          </form>
        </div>
        <!-- /.form-container --> 
        
      </div>
      <!-- /.box --> 
    </section>
    <!-- /#contact -->
    
    <footer class="footer box">
      <p class="pull-left">© 2015 Lumos. All rights reserved. Theme by <a href="http://elemisfreebies.com">elemis</a>.</p>
      <ul class="social pull-right">
        <li><a href="#"><i class="icon-s-rss"></i></a></li>
        <li><a href="#"><i class="icon-s-twitter"></i></a></li>
        <li><a href="#"><i class="icon-s-facebook"></i></a></li>
        <li><a href="#"><i class="icon-s-dribbble"></i></a></li>
        <li><a href="#"><i class="icon-s-pinterest"></i></a></li>
        <li><a href="#"><i class="icon-s-instagram"></i></a></li>
        <li><a href="#"><i class="icon-s-vimeo"></i></a></li>
      </ul>
      <div class="clearfix"></div>
    </footer>
    <!-- /footer --> 
    
  </div>
  <!-- /.container --> 
</div>
<!-- /.body-wrapper --> 
<?php wp_footer(); ?>
<script src="<?php bloginfo('template_url'); ?>/style/js/bootstrap.min.js"></script> 
<script src="<?php bloginfo('template_url'); ?>/style/js/jquery.themepunch.tools.min.js"></script> 
<script src="<?php bloginfo('template_url'); ?>/style/js/classie.js"></script> 
<script src="<?php bloginfo('template_url'); ?>/style/js/plugins.js"></script> 
<script src="<?php bloginfo('template_url'); ?>/style/js/scripts.js"></script>  
<script>
	jQuery.backstretch(["<?php bloginfo('template_url'); ?>/style/images/art/bg3_1.png"]);
</script>
</body>
</html>
