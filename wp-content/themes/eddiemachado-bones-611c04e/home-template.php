<?php
/*
 Template Name: Home Template
*/
?>

<?php get_header(); ?>

<div id="content">
    <?php if(!is_user_logged_in() || current_user_can('subscriber')){ ?>
        <?php if(current_user_can('subscriber')){ ?>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="vitrin vitrin-content vitrin-article vitrin-centered">
                            Вы видите это сообщение, потому, что зарегистрированы на сайте <a href="http://wizardmachine.ru/">"WizardMachine"</a> но на данный момент не имеете действующего доступа к программе.<br>
                            Узнайте как получить доступ к программе по <a href="#howto">этой ссылке</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
        <div class="col-md-12">
          <h1 class="vitrin_heading">Интерактивный веб-проект "WizardMachine"</h1>
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="vitrin vitrin-content">
                <p>Добрый день!</p>
                <p>
                  <b>"WizardMachine"</b> — это интерактивный веб-проект для коррекции индивидуальных личностных проблем. Работа осуществляется по цифровой фотографии пациента. Для эффективной работы в программе оператору необходимо обладать базовыми навыками биологического центрирования и прочесть книгу Чикурова Юрия Валентиновича <b>"Биологическое Центрирование. Практическое руководство".</b>
                </p>
                <p>
                  Программа существует уже более 4 лет. За это время программа значительно расширилась. Пользователю доступен ряд основных протоколов разработанных для коррекции актуальности той или иной зоны, а так-же несколько специальных.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 vitrin">
          <h2>Из чего состоит функционал программы.</h2>
          <div class="row">
            <div class="col-sm-12">
              <div class="vitrin">
                <p class="vitrin-content">
                    Приобретая программу Вы получите на свою электронную почту подробное руководство в формате PDF с наглядными изображениями и описанием каждой из возможностей программы.
                    Каждый шаг в программе хорошо докумментирован и не позволит Вам сделать "что-то не то...".<br>
                    Программа работает по встроенным протоколам. Проведя все приготовления оператору останется только нажать кнопку "Выполнить", всю дальнейшую работу "WizardMachine" выполнит самостоятельно, в автоматическом режиме.<br>
                    Каждому пользователю доступна техническая поддержка 7 дней в неделю.
                </p>
                <p>
                    <h3>"WizardMachine". Учебный фильм</h3>
                    <iframe style="display: block;margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/9XI9Z7kHmmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 vitrin">
            <h2>Как приобрести доступ к "WizardMachine"?</h2>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="vitrin vitrin-content vitrin-centered">
                        Стоимость получения доступа к программе на 1 год составляет <div class="vitrin-price">35 000 руб.</div> Через год и далее Вы сможете продлить Вашу учетную запись за <div class="vitrin-price">25 000 руб.</div>
                        <a name="howto"></a>
                    </div>
                    <div class="vitrin vitrin-content vitrin-pay">
                        <b>Чтоб получить доступ к программе необходимо сделать следующее:</b>
                        <?php if(is_user_logged_in()){ ?>
                            <p>
                                <span class="article_main">— </span><span class="reg_login toLogin" data-toggle="modal" data-target="#myModal_login">Войдите</span> на сайт. Если у Вас еще нет учетной записи "WizardMachine" — <span class="reg_login toRegistration" data-toggle="modal" data-target="#myModal_login">зарегистрируйтесь</span>.</br>
                                <i style="text-align: center;">(В дальнейшем войти в программу можно будет кликнув на "дверь мельницы")</i>
                            </p>
                        <?php } ?>
                        <p>
                            <span class="article_main">— </span> Войдите в <a target="_blank" href="/kabinet">личный кабинет</a> пользователя.
                        </p>
                        <p>
                            <span class="article_main">— </span> Выберите вкладку <b>"Все доступы"</b>, нажмите "Приобрести" -> "Оплатить через "Робокасса" -> Выберите удобный для Вас способ и произведите оплату.</br>
                            <i style="text-align: center;">(Напоминаем что начиная со второго года пользователи "WizardMachine" получают скидку на продление лицензии 30%. Оплату продления со скидкой можно произвести на вкладке "Текущий доступ")</i>
                        </p>
                        <p>
                            По завершении оплаты на Вашу почту поступит письмо с подтверждением. С этой минуты Ваш доступ к программе "WizardMachine" активен! Приятного пользования!
                        </p>
                    </div>
                    <div class="vitrin vitrin-content vitrin-centered">
                        Если у Вас возникли вопросы напишите на <a href="mailto:info@chikurov.com">info@chikurov.com</a>. Вам оперативно ответят!
                        <p>В теме письма укажите пожалуйста "Вопрос по WizardMachine"</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 vitrin">
            <h4>Юридическая информация:</h4>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="vitrin-centered">
                        <p><a href="mailto:info@chikurov.com">info@chikurov.com</a> / +7 (495) 135-25-48</p>
                        <p>ОГРНИП: 314910224600336</p>
                        <p>ИНН: 7706092528</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer vitrin" role="contentinfo">
            <div id="inner-footer" class="wrap cf">
                <p class="source-org copyright">© 2018 <a class="homelink" href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba">Выйти</a> Версия 4.2.2 <span class="supportlink">Поддержка пользователей: <a href="mailto:wizardmachine@yandex.ru">wizardmachine@yandex.ru</a></span>
                </p>
            </div>
        </footer>
    <?php } ?>
</div>


<?php get_footer(); ?>
