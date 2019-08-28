jQuery(function() {
    var cur_screen = 0,
        nextScreen,
        croppedImg,
        curChoice,
        protocol,
        checkPoints,
        checkPointsMobile,
        protocolName,
        checkV3,
        knife,
        grafSt = 'graf',
        knifeDate,
        knifeDateOld = null,
        knifeDateDiff,
        knife_rate_class,
        knife_rate_class_dotted,
        main_heading,
        curUrl = window.location.pathname,
        pointsStatus = true,
        v3status = true,
        curV = 'V3',
        actualV,
        curVZone = '#draggable3',
        popupStatus1,
        cur_time,

        supportsStorage = function(){
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        };
    // Управление графиком ножа
    if(supportsStorage && localStorage.getItem('grafSt')){
        grafSt = localStorage.getItem('grafSt');
        console.log(grafSt);
    }
    if(grafSt === 'graf'){
        jQuery('.btn__graf').button('toggle');
        jQuery('.btn__clgraf').removeClass('disabled');
        console.log('1')
    } else {
        jQuery('.btn__nograf').button('toggle');
        jQuery('.btn__clgraf').addClass('disabled');
        console.log('2')
    }
    jQuery('.btn__clgraf').on('click', function (event) {
        if(!jQuery(this).hasClass('disabled')){
            jQuery('.knife_rate').detach();
        }
    });
    jQuery('.btn__graf').on('click', function (event) {
        grafSt = 'graf';
        localStorage.setItem('grafSt', grafSt);
        jQuery('.btn__clgraf').removeClass('disabled');
        jQuery('.btn__graf').addClass('active');
        jQuery('.btn__nograf').removeClass('active');
    });
    jQuery('.btn__nograf').on('click', function (event) {
        grafSt = 'nograf';
        localStorage.setItem('grafSt', grafSt);
        jQuery('.btn__clgraf').addClass('disabled');
        jQuery('.knife_rate').detach();
        jQuery('.btn__graf').removeClass('active');
        jQuery('.btn__nograf').addClass('active');
    });
    // Анимация ножа
    jQuery('.knife').draggable({
        containment: '#inner-content',
        axis: 'y',
        drag: function() {
            if(jQuery('.btn__graf').hasClass('active')){
                knife = jQuery('.knife').css('top');
                knife = knife.substr(0, knife.length - 2);
                knifeDate = new Date();
                knifeDateDiff = knifeDate - knifeDateOld;
                knife_rate_class = 'knife_rate-'+knife;
                knife_rate_class_dotted = '.knife_rate-'+knife;
                jQuery('.knife-wrap').append('<div class='+knife_rate_class+'></div>');
                jQuery(knife_rate_class_dotted).addClass('knife_rate').css({
                    top: +knife+45+'px',
                    width: knifeDateDiff*2+'px'
                });
                knifeDateOld = knifeDate;
            }
        }
    });
    //Скрываем возможно загруженное изображение
    jQuery('#main img:first-child').addClass('returned hidden');
    //Функция проверки положения точек
    checkPoints = function(){
        jQuery('.itemlist_item_dr').each(function() {
            if(parseFloat(jQuery(this).css('left')) < 450){
                pointsStatus = false;
                console.log('status '+pointsStatus);
            }
        });
    }
    checkPointsMobile = function(){
        jQuery('.itemlist_item_sm').each(function() {
            if(parseFloat(jQuery(this).css('top')) < 35){
                pointsStatus = false;
                console.log('status '+pointsStatus);
            }
        });
    }

    function openPopupOne(){
      jQuery('#wizardtherapy').modal('show');
    }

    // Рекланые баннеры
    //Получение данных из локального хранилища
    if(supportsStorage && localStorage.getItem('popupStatus1')){
      popupStatus1 = parseFloat(localStorage.getItem('popupStatus1'))+2592000000;
    }
    cur_time = new Date().getTime();
    console.log(popupStatus1);
    console.log(cur_time);
    console.log(cur_time - popupStatus1);
    if (popupStatus1 && popupStatus1 < cur_time) {
      setTimeout(openPopupOne, 5000);
      // jQuery('#book_down').on('hidden.bs.modal', function (e) {
      //   setTimeout(openPopupTwo, 25000);
      // })
      localStorage.setItem('popupStatus1', cur_time);
    } else if (!popupStatus1) {
      setTimeout(openPopupOne, 5000);
      localStorage.setItem('popupStatus1', cur_time);
    }
    
    // Текст заголовка
    main_heading = function(){
        // console.log(cur_screen);
        if(cur_screen == 0){
            jQuery('.btn_back').addClass('hidden');
        } else if (cur_screen == 1){
            jQuery('.btn_back').removeClass('hidden');
        }
    }
    //info о продлении
    // if (ratioten && ratioten > 0) {
    //     swal("Информация", "Срок действия вашей лицензии истекает менее чем через 10 дней. Вы можете продлить лицензию со скидкой написав на wizardmachine@yandex.ru", "info"); 
    // }
    //Получение данных из локального хранилища
    if(supportsStorage && localStorage.getItem('curChoice')){
        curChoice = localStorage.getItem('curChoice');
        protocol = localStorage.getItem('protocol');
        jQuery('.step_choice div').text(curChoice);
    }
    if(supportsStorage && localStorage.getItem('protocolName')){
        protocolName = localStorage.getItem('protocolName');
        jQuery('.prot_in_action').removeClass('hidden');
        jQuery('.prot_in_action').text('Активирован протокол '+protocolName);
    }

    //Перетягивание элементов
    jQuery( ".draggable, .box_rounded" ).draggable({ 
        snap: false
    });
    //Изменение размера круга
    jQuery( ".box_rounded" ).resizable({
      aspectRatio: 1/ 1
    });
    
    jQuery( ".select_program" ).accordion({ active: 100, heightStyle: "content" });

    
    jQuery('.show_form').on('click', function(event) {
        jQuery('.login__form')
            .removeClass('hidden')
            .addClass('animated zoomIn');
    });

    nextScreen = function(){
        jQuery('.machine_screen')
            .addClass('hidden')
            .removeClass('fadeIn')
            .eq(cur_screen)
            .removeClass('hidden')
            .addClass('animated')
            .addClass('fadeIn')
    };
jQuery('.work-area').find('.returned').draggable();

// Регистрация/Вход
jQuery('.toRegistration').on('click', function(event) {
  jQuery('#loginform').addClass('hidden');
  jQuery('#registerform').removeClass('hidden');
});
jQuery('.toLogin').on('click', function(event) {
  jQuery('#loginform').removeClass('hidden');
  jQuery('#registerform').addClass('hidden');
});

// ШАГ 1 (К загрузке фото)
    jQuery( ".btn_choice" ).on('click', function(event) {
        protocol = jQuery(this).data('protocol');
        protocolName = jQuery(this).data('protocol-name');
        localStorage.setItem('protocol', protocol);
        localStorage.setItem('protocolName', protocolName);
        if(protocol == 'v2'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v3'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v4'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v5'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'face'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'demo'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'mmt'){
            jQuery('.box_rounded').removeClass('hidden');
        } else {
            jQuery('.box_rounded').addClass('hidden');
        }
        jQuery('.prot_in_action').removeClass('hidden');
        jQuery('.prot_in_action').text('Активирован протокол '+protocolName);
        if(jQuery(this).hasClass('btn_choice__choiced')){
            jQuery(this)
                .removeClass('btn_choice__choiced')
                .text('Выбрать');
        } else {
            curChoice = jQuery('.ui-state-active').text();
            localStorage.setItem('curChoice', curChoice);
            jQuery('.step_choice div').text(curChoice);
            cur_screen += 1;
            if (curUrl !== '/wizard/'){
                cur_screen = 3;
                jQuery('.btn__wizard').removeClass('hidden');
            }
            jQuery(".btn_choice")
                .removeClass('btn_choice__choiced')
                .text('Выбрать');
            jQuery(this)
                .addClass('btn_choice__choiced')
                .text('Выбрано')
                .append('<pre> ✓</pre>');
                nextScreen()
                jQuery('.step')
                    .eq(cur_screen-1)
                    .addClass('step_done');
                jQuery('.step')
                    .eq(cur_screen)
                    .addClass('step_now');
                jQuery('.btn_back')
                    .removeClass('invisible')
                    .addClass('animated')
                    .addClass('fadeIn');
        }
        main_heading()
    });
    jQuery('.btn__crop').on('click', function(event) {
        jQuery('.crop_photo').click();
    });

// ШАГ 2 (переход к магии)
//Если фото уже обрезано

    jQuery('.step_img:after').css('content', curChoice);
    croppedImg = jQuery('#main').children()[0];
    if(croppedImg.hasAttribute('src'))
    {
        if (curUrl == '/wizard/'){
            cur_screen = 2;
            jQuery('.btn__wizard').removeClass('hidden');
        } else {
            cur_screen = 1;
            jQuery('.btn__next').removeClass('hidden');
            jQuery('.btn-group-graf').removeClass('hidden');
            jQuery('.btn__clgraf').removeClass('hidden');
        };
        nextScreen();
        jQuery('.btn_back')
            .removeClass('invisible')
            .addClass('animated')
            .addClass('fadeIn');
        jQuery('.itemlist-two').append(croppedImg);
        jQuery('.work-area').find('.returned').draggable();        
        jQuery('.knife-wrap').css('height', jQuery('.itemlist-two').height()+20+'px');
        if(supportsStorage && localStorage.getItem('protocol')){
            protocol = localStorage.getItem('protocol');
        }
        if(protocol == 'v2'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v3'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v4'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'v5'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'face'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'demo'){
            jQuery('.box_rounded').removeClass('hidden');
        } else if(protocol == 'mmt'){
            jQuery('.box_rounded').removeClass('hidden');
        } else {
            jQuery('.box_rounded').addClass('hidden');
        }
    }
    // Переход с экрана диагноситки ножом
    jQuery('.btn__next').on('click', function(event) {
        cur_screen += 1;
        nextScreen();
        jQuery('.btn__next').addClass('hidden');
        jQuery('.btn-group-graf').addClass('hidden');
        jQuery('.btn__clgraf').addClass('hidden');
    });

//ШАГ 3 (Старт процедуры)
jQuery( ".btn__wizard" ).on('click', function(event) {
    var sound = new Howl({
        urls: ['/sounds/sound.ogg', '/sounds/sound.aac', '/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        buffer: true
    }); 
    pointsStatus = true;
    v3status = true;
    curV = localStorage.getItem('curV');
        checkPoints();
        checkPointsMobile();
        if(pointsStatus == false){
            swal("Не все зоны перенесены", "Перед началом процедуры необходимо перенести на фото все зоны", "info");
        } else {
            if (jQuery( ".btn__wizard" ).hasClass('btn__wizard_inAction')) {

            } else {
                jQuery(this)
                    .addClass('btn__wizard_inAction')
                    .text('Выполняется');
                jQuery('.heading_dashboard').text('Процедура выполняется')
                jQuery('.btn_back').addClass('invisible');
                protocol = localStorage.getItem('protocol');
                jQuery('.itemlist_item').css('background', 'rgba(255,255,255, 0.6)');
                console.log(protocol);
                if(protocol == 'v2'){
                    v2();
                } else if(protocol == 'v3'){
                    v3();
                } else if(protocol == 'v4'){
                    v4();
                } else if(protocol == 'v5'){
                    v5();
                } else if(protocol == 'v6'){
                    v6();
                } else if(protocol == 'v7'){
                    v7();
                } else if(protocol == 'face'){
                    face();
                } else if(protocol == 'resource'){
                    resource();
                } else if(protocol == 'solis'){
                    solis();
                } else if(protocol == 'demo'){
                    demo();
                } else if(protocol == 'mmt'){
                    mmt();
                } else{
                    console.log('нет протокола с id '+ protocol)
                }
            }
        }
    main_heading();
});
//Быстрая смена протокола
jQuery('#main').on('click', '.fast-protocol', function() {
    jQuery('.chart').data('easyPieChart').update(0);
    jQuery('.chart').find('span').text('0'); 
    protocol = jQuery(this).data('fast');
    localStorage.setItem('protocol', protocol);
    protocolName = jQuery(this).data('protocol-name');
    localStorage.setItem('protocolName', protocolName);
    jQuery('.prot_in_action').removeClass('hidden');
    jQuery('.prot_in_action').text('Активирован протокол '+protocolName);
    jQuery('.fast-protocol-wrap')
        .addClass('hidden')
        .removeClass('fadeIn');
    if(protocol == 'v2'){
        jQuery('.box_rounded').removeClass('hidden');
    } else if(protocol == 'v3'){
        jQuery('.box_rounded').removeClass('hidden');
    } else if(protocol == 'v4'){
        jQuery('.box_rounded').removeClass('hidden');
    } else if(protocol == 'v5'){
        jQuery('.box_rounded').removeClass('hidden');
    } else if(protocol == 'face'){
        jQuery('.box_rounded').removeClass('hidden');
    } else if(protocol == 'mmt'){
        jQuery('.box_rounded').removeClass('hidden');
    } else {
        jQuery('.box_rounded').addClass('hidden');
    }
});


// Возврат на предыдущий шаг
    jQuery('.btn_back').on('click', function(event) {
        jQuery('.btn__crop, .btn__wizard').addClass('hidden');
        // console.log(cur_screen);
        jQuery('.machine_screen')
            .addClass('hidden')
            .removeClass('fadeIn')
            .eq(cur_screen-1)
            .removeClass('hidden')
            .addClass('animated')
            .addClass('fadeIn')
        jQuery('.step')
            .removeClass('step_done')
            .removeClass('step_now');
        jQuery('.step')
            .eq(cur_screen-1)
            .addClass('step_now')
            .find(jQuery('div')).text(' ');
        if(cur_screen >= 2){
            jQuery('.step')
                .eq(cur_screen-2)
                .addClass('step_done');
        };
        if (curUrl !== '/wizard/' && cur_screen == 2){
            jQuery('.btn__next').removeClass('hidden');
            jQuery('.btn-group-graf').removeClass('hidden');
            jQuery('.btn__clgraf').removeClass('hidden');
        } else {
            jQuery('.btn__next').addClass('hidden');
            jQuery('.btn-group-graf').addClass('hidden');
            jQuery('.btn__clgraf').addClass('hidden');
        }
        cur_screen -= 1; 
        main_heading()
    });

//CROPPING SCRIPT
    // convert bytes into friendly format
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB'];
        if (bytes == 0) return 'n/a';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    };

    // check for selected crop region
    function checkForm() {
        if (parseInt(jQuery('#w').val())) return true;
        jQuery('.error').html('Пожалуйста выделите область').show();
        return false;
    };

    // update info by cropping (onChange and onSelect events handler)
    function updateInfo(e) {
        jQuery('#x1').val(e.x);
        jQuery('#y1').val(e.y);
        jQuery('#x2').val(e.x2);
        jQuery('#y2').val(e.y2);
        jQuery('#w').val(e.w);
        jQuery('#h').val(e.h);
    };

    // clear info by cropping (onRelease event handler)
    function clearInfo() {
        jQuery('.info #w').val('');
        jQuery('.info #h').val('');
    };

    // Create variables (in this scope) to hold the Jcrop API and image size
    var jcrop_api, boundx, boundy;

    function fileSelectHandler() {

        // get selected file
        var oFile = jQuery('#image_file')[0].files[0];
        // console.log(oFile);
        // hide all errors
        jQuery('.error').hide();

        // check for image type (jpg and png are allowed)
        var rFilter = /^(image\/jpeg|image\/png)$/i;
        if (! rFilter.test(oFile.type)) {
            jQuery('.error').html('Доспустимы изображения только в формате ".jpg" и ".png"').show();
            return;
        }

        // check for file size
        if (oFile.size > 15 * 1024 * 1024) {
            jQuery('.error').html('Вы выбрали слишком большой файл, пожалуйста выберите изображение меньшего размера.').show();
            return;
        }

        // preview element
        var oImage = document.getElementById('preview');

        // prepare HTML5 FileReader
        var oReader = new FileReader();

        oReader.onload = function(e) {

            EXIF.getData(oFile, function(){

                var ort = this.exifdata.Orientation;

                // e.target.result contains the DataURL which we can use as a source of the image
                oImage.src = e.target.result;
                oImage.onload = function () {

                    var rotateImg = function(rad, rotateCanvas, cx, cy){
                        var canvas = document.createElement('canvas'),
//                        var canvas = document.getElementById('preview-canvas'),
                            ctx = canvas.getContext('2d');

                        if(rotateCanvas){
                            canvas.setAttribute('width', oImage.naturalHeight);
                            canvas.setAttribute('height', oImage.naturalWidth);
                        }else{
                            canvas.setAttribute('width', oImage.naturalWidth);
                            canvas.setAttribute('height', oImage.naturalHeight);
                        }

                        ctx.rotate(rad);
                        ctx.drawImage(oImage, cx, cy);

                        ort = 1;

                        oImage.src = canvas.toDataURL("image/png");
                    };

                    switch(ort){
                       case 6:
                           rotateImg(90 * Math.PI / 180, true, 0, oImage.naturalHeight * -1);
                           break;
                       case 3:
                           rotateImg(180 * Math.PI / 180, false, oImage.naturalWidth * -1, oImage.naturalHeight * -1);
                           break;
                       case 8:
                           rotateImg(-90 * Math.PI / 180, true, oImage.naturalWidth * -1, 0);
                           break;
                    }


                    // display step 2
                    jQuery('.step2').fadeIn(500);
                    jQuery('.btn__crop').removeClass('hidden');
                    // display some basic image info
                    var sResultFileSize = bytesToSize(oFile.size);
                    jQuery('#filesize').val(sResultFileSize);
                    jQuery('#filetype').val(oFile.type);
                    jQuery('#filedim').val(oImage.naturalWidth + ' x ' + oImage.naturalHeight);

                    // destroy Jcrop if it is existed
                    if (typeof jcrop_api != 'undefined') {
                        jcrop_api.destroy();
                        jcrop_api = null;
                        jQuery('#preview').width(oImage.naturalWidth);
                        jQuery('#preview').height(oImage.naturalHeight);
                    }

                    setTimeout(function(){
                        // initialize Jcrop
                        console.log(jQuery('.step2').width());
                        jQuery('#preview').Jcrop({
                            minSize: [32, 32],// keep aspect ratio 1:1
                            bgFade: true, // use fade effect
                            bgOpacity: .3, // fade opacity
                            boxWidth: jQuery('.step2').width(),
                            onChange: updateInfo,
                            onSelect: updateInfo,
                            onRelease: clearInfo
                        }, function(){

                            // use the Jcrop API to get the real image size
                            var bounds = this.getBounds();
                            boundx = bounds[0];
                            boundy = bounds[1];

                            // Store the Jcrop API in the jcrop_api variable
                            jcrop_api = this;
                        });
                    },3000);

                };




            });

        };

        // read selected file as DataURL
        oReader.readAsDataURL(oFile);
    }
    jQuery('#image_file').on('change', fileSelectHandler);
    
    jQuery('.chart').easyPieChart({
        //your options goes here
        lineWidth: 6,
        size: 95
    });
});
