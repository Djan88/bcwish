            <?php if(!is_front_page()){ ?>
                <footer class="footer" role="contentinfo">
                    
                    <?php if(is_user_logged_in() && current_user_can('administrator') && wp_is_mobile()) { ?>
                      <div id="inner-footer" class="wrap-mobile cf">
                    <?php } else { ?>
                      <div id="inner-footer" class="wrap cf">
                    <?php } ?>

                        <nav role="navigation">
                            <?php wp_nav_menu(array(
                            'container' => '',                              // remove nav container
                            'container_class' => 'footer-links cf',         // class of container (should you choose to use it)
                            'menu' => __( 'Footer Links', 'bonestheme' ),   // nav name
                            'menu_class' => 'nav footer-nav cf',            // adding custom nav class
                            'theme_location' => 'footer-links',             // where it's located in the theme
                            'before' => '',                                 // before the menu
                        'after' => '',                                  // after the menu
                        'link_before' => '',                            // before each link
                        'link_after' => '',                             // after each link
                        'depth' => 0,                                   // limit the depth of the nav
                            'fallback_cb' => 'bones_footer_links_fallback'  // fallback function
                            )); ?>
                        </nav>

                        <p class="source-org copyright"><span>&copy; <?php echo date('Y'); ?> <a href="/" class="homelink"><?php bloginfo( 'name' ); ?></a>. Версия 5.2</span><span> <?php if(is_user_logged_in()){ ?>| <a href="/kabinet">Личный кабинет</a> | 
                            <a href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba">Выйти</a></span><?php } ?><span class="supportlink">Поддержка пользователей: <a href="mailto:info@chikurov.com">info@chikurov.com</a></span></p>
                    </div>

                </footer>
            <?php } ?>

        </div>
            <!-- Modal -->
            <div class="modal fade" id="myModal_login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">Вход для сертифицированных пользователей</h4>
                        </div>
                        <div class="modal-body">
                            <div class="login__form" id="loginform">
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
                            <div class="login__form hidden" id="registerform">
                                <form id="registerform" action="<?php echo site_url('wp-login.php?action=register'); ?>" method="post">
                                    <p>
                                        <label for="user_login">Придумайте логин<br>
                                        <input type="text" name="user_login" id="user_login" class="input" value="" size="20" style="">
                                        </label>
                                    </p>
                                    <p>
                                        <label for="user_email">E-mail<br>
                                        <input type="email" name="user_email" id="user_email" class="input" value="" size="25">
                                        </label>
                                    </p>
                                    <p id="reg_passmail">Подтверждение регистрации будет отправлено на ваш e-mail.</p>
                                    <br class="clear">
                                    <input type="hidden" name="redirect_to" value="">
                                    <p class="submit"><input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Регистрация"></p>
                                    <p class="note_small">У Вас уже есть учетная запись? <span class="toLogin">Войдите</span> в "WizardMachine" используя свои логин и пароль</p>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal two -->
            <div class="modal fade" id="myModal_choice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal_menu">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">Выбор режима работы</h4>
                        </div>
                        <?php if(is_user_logged_in()){ ?>
                        <div class="modal-body">
                            <a href="/wizard" class="button button-primary button-large btn_choice_prot <?php if(current_user_can('subscriber')){ ?>button-no<?php } ?>">Выбор протокола</a>
                            <a href="/knife_diagnostic" class="button button-primary button-large btn_choice_prot_knife <?php if(current_user_can('subscriber')){ ?>button-no<?php } ?>">Диагностика ножом</a>
                            <a href="/kabinet" class="button button-primary button-large btn_choice_prot">Личный кабинет</a>
                            <?php if(current_user_can('administrator')){ ?>
                                <a href="/wp-admin" class="button button-primary button-large btn_choice_prot">Административная панель</a>
                            <?php } ?>
                            <div class="version">
                                <?php echo do_shortcode( '[theme_switcha_select text="Выберите версию"]' ); ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="modal-footer">
                            <a href="https://cloud.mail.ru/public/Kbmz/qmbeahoCs" target="_blank" class="button button-primary button-large button__main">Руководство пользователя</a>
                            <a href="http://help.yandex.ru/common/support/screenshot.xml" target="_blank" class="button button-primary button-large button__main btn_choice_screen">Как сделать "скриншот" экрана</a>
                            <a href="https://cloud.mail.ru/public/Ep18/Rtg37KpVW" target="_blank" class="button button-primary button-large button__main">Книга "Биологическое центрирование"</a>
                            <?php if(is_user_logged_in()){ ?>
                                <a href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba" class="button button-primary button-large button__main btn_choice_screen">Выйти</a>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Wizardtyerapy -->
            <div class="modal fade modal_link" id="wizardtherapy" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal_menu">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <a href="https://school-bc.ru/" target="_blank"><img src="<?php bloginfo('template_url'); ?>/library/images/wizardtherapy.png" alt="wizardtherapy"></a> 
                        </div>
                    </div>
                </div>
            </div>
        <?php // all js scripts are loaded in library/bones.php ?>
        <?php wp_footer(); ?>
        <script src="<?php bloginfo('template_url'); ?>/library/js/jquery-ui.min.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/jquery.ui.touch-punch.min.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/jquery.Jcrop.min.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/exif.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/vivus.min.js"></script>
        <script src='<?php bloginfo('template_url'); ?>/library/js/sweet-alert.min.js'></script>
        <script src='<?php bloginfo('template_url'); ?>/library/js/buzz.min.js'></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/howler.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/canvas.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/easypie.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/bootstrap.js"></script>
        <script src="<?php bloginfo('template_url'); ?>/library/js/pieChartPlugin.js"></script>
        <script src='<?php bloginfo('template_url'); ?>/library/js/protocols.js'></script>
        <script src='<?php bloginfo('template_url'); ?>/library/js/script-magic.js'></script>
        <?php if(is_front_page()) { ?>
            <script>
                var window_height = jQuery(window).height();
                jQuery('#main').css('height', window_height+'px');
                var count_animation = 0,
                    rotateVal = 0;
                phaseTen = setInterval(function(){
                    if (count_animation <= 134400){                                                                         //90
                        // tickSound.play();
                        jQuery('.wings_home').css({
                            transform: 'rotate(-'+rotateVal+'deg) scale(1)'
                        });
                        count_animation += 1;
                        rotateVal += 1.5;
                    } else {
                        clearInterval(phaseOne);
                        count_animation = 0
                    }
                }, 250);
            </script>
        <?php } ?>
        <?php if(is_user_logged_in()&&is_front_page()) { ?>
            <script>
                //Отображение меню в модали
                jQuery('#myModal_choice').modal('show');
            </script>
        <?php } ?>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter49362922 = new Ya.Metrika2({
                            id:49362922,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/tag.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks2");
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/49362922" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </body>

</html> <!-- end of site. what a ride! -->
