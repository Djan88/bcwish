jQuery(function() {
  var knife,
      knifeDate,
      knifeDateOld,
      knifeDateDiff,
      knife_rate_class,
      knife_rate_class_dotted,
      protocol,
      checkPoints,
      pointsStatus = true,
      reloadTime = 0,
      reloadTime1 = 0,
      d12Val = 0,
      cur_animation_val = 0,
      rotateVal = 0,
      count_animation = 1,
      pausedStatus = false,
      endNow,
      onEnd,
      protocolfromMemory,
      firstTriangleAnimation,
      secondTriangleAnimation,
      thirdTriangleAnimation,
      fourthTriangleAnimation,
      // sound = new buzz.sound( "/sounds/tick", {
      //     formats: [ "ogg", "mp3" ]
      // }),
      // reloadSound = new buzz.sound( "/sounds/reload", {
      //     formats: [ "ogg", "mp3" ]
      // }),
      sound = new Howl({
          urls: ['/sounds/tick.ogg', '/sounds/tick.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      reloadSound = new Howl({
          urls: ['/sounds/complete.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      alertSound = new Howl({
          urls: ['/sounds/success.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      alert_altSound = new Howl({
          urls: ['/sounds/alert_alt.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      supportsStorage = function(){
          try {
              return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
              return false;
          }
      };
      // jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');

  //Изменение размера круга
  jQuery('#ring').resizable({
    aspectRatio: 1/1
  });

  endNow = function(){
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    alertSound.play();
    jQuery('.ring').removeClass('in_progress');
    localStorage.setItem('top1', jQuery('.uploaded_pics_wrapper_1').css('top'));
    localStorage.setItem('left1', jQuery('.uploaded_pics_wrapper_1').css('left'));
    localStorage.setItem('top2', jQuery('.uploaded_pics_wrapper_2').css('top'));
    localStorage.setItem('left2', jQuery('.uploaded_pics_wrapper_2').css('left'));
    swal({
      title: "Приостановлено пользователем",
      text: "Что делать дальше?",
      type: "info",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      cancelButtonClass: "btn-success",
      cancelButtonText: "Продолжить",
      confirmButtonText: "К началу",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.wizard_stop, .zone_ring').addClass('hidden');
        jQuery('.wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
      }
    })
  }

  onEnd = function(){
    jQuery('.ring').removeClass('in_progress');
    jQuery('.btn-to_endNow').addClass('hidden');
    jQuery('.btn_start').removeAttr('disabled');
    jQuery('.wizard_percent').text('100%');
    rotate_one = 0;
    rotate_two = 0;
    rotate_three = 0;
    rotate_four = 0;
    rotate_lovushka = 0;
    count_animation = 0;
    localStorage.removeItem('paused');
    localStorage.removeItem('pausedPhoto');
    localStorage.removeItem('pausedPhoto2');
    pausedStatus = false;
    jQuery('.wizard_to_protList').removeClass('prot_in_progress');
    jQuery('#header').removeClass('.header_transparent');

    // protocolName = localStor
    alertSound.play();
    swal({
      title: "Протокол завершен",
      text: "Что делать дальше?",
      type: "success",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      cancelButtonClass: "btn-success",
      cancelButtonText: "Продолжить сессию",
      confirmButtonText: "Завершить",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.wizard_main_screen, .wizard_to_protList').addClass('hidden');
        jQuery('.wizard_stop, .wizard_templates').addClass('hidden');
        jQuery('.zone_ring').addClass('hidden');
        jQuery('.wizard_prots, .wizard_operation, .wizard_to_what_way').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_heading').text('Выберите протокол');
        jQuery('.uploaded_pics_wrapper').draggable( "enable");
        jQuery('.faq_item').each(function(i,elem) {
          if (!jQuery(this).hasClass('active')) {
            jQuery(this).addClass('faq_item_disabled');
          }
        });
        jQuery('.faq_item_disabled').tooltip({
          title: 'Не забудьте установить фото в правильную позицию',
          placement: 'bottom',
          trigger: 'click'
        })
      }
    })

  }

  //Dragging elems
  jQuery('.draggable, .ring').draggable({
    snap: false
  });


  mw_11 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('95%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6, .zone_alt_v1, .zone_alt_s2, .zone_alt_s4, .zone_alt_v5, .zone_alt_s5, .zone_alt_s6').css({
            color: 'transparent',
            borderColor: 'transparent',
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6, .zone_alt_v1, .zone_alt_s2, .zone_alt_s4, .zone_alt_v5, .zone_alt_s5, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: 'green',
            transform: 'scale(1)',
            paddingTop: '1px',
            zIndex: '3'
        });
// II
        jQuery('.wizard_percent').text('0%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({
                color: 'transparent',
                borderColor: 'transparent',
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({
                background: '#fff',
                color: '#413e66',
                borderColor: 'green',
                transform: 'scale(1)',
                paddingTop: '1px',
                zIndex: '3'
            });
// III
            jQuery('.wizard_percent').text('0%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4, .zone_alt_s3, .zone_alt_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4, .zone_alt_s3, .zone_alt_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: 'green',
                    transform: 'scale(1)',
                    paddingTop: '1px',
                    zIndex: '3'
                });
// IV
                jQuery('.wizard_percent').text('0%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3, .zone_alt_d4, .zone_alt_d3, .zone_alt_d2_, .zone_alt_v2, .zone_alt_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3, .zone_alt_d4, .zone_alt_d3, .zone_alt_d2_, .zone_alt_v2, .zone_alt_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: 'green',
                        transform: 'scale(1)',
                        paddingTop: '1px',
                        zIndex: '3'
                    });
                    onEnd();
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  mw_10_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('90%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_11');
            endNow();
          } else {
            mw_11();
          } 
        }
    }, 1000);
  }

  mw_10_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('85%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_10_4');
            endNow();
          } else {
            mw_10_4();
          } 
        }
    }, 1000);
  } 

  mw_10_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('80%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_10_3');
            endNow();
          } else {
            mw_10_3();
          } 
        }
    }, 1000);
  } 

  mw_10_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v5, .zone_alt_v2, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_10_2');
            endNow();
          } else {
            mw_10_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }

  mw_9_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('70%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_10_1');
            endNow();
          } else {
            mw_10_1();
          } 
        }
    }, 1000);
  }

  mw_9_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('65%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_9_4');
            endNow();
          } else {
            mw_9_4();
          } 
        }
    }, 1000);
  } 

  mw_9_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_9_3');
            endNow();
          } else {
            mw_9_3();
          } 
        }
    }, 1000);
  } 

  mw_9_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('55%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_alt_v4, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_9_2');
            endNow();
          } else {
            mw_9_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }

  mw_8_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('50%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_9_1');
            endNow();
          } else {
            mw_9_1();
          } 
        }
    }, 1000);
  }

  mw_8_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('45%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_8_4');
            endNow();
          } else {
            mw_8_4();
          } 
        }
    }, 1000);
  } 

  mw_8_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('40%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_8_3');
            endNow();
          } else {
            mw_8_3();
          } 
        }
    }, 1000);
  } 

  mw_8_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('35%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d3, .zone_d4, .zone_d5, .zone_d6, .zone_alt_s2, .zone_alt_s3, .zone_alt_s4, .zone_alt_s5, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mw_8_2');
            endNow();
          } else {
            mw_8_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }

  mw_7 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('30%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('z.zone_d2, .zone_s3, .zone_s4, .zone_alt_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('z.zone_d2, .zone_s3, .zone_s4, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('z.zone_d2, .zone_s3, .zone_s4, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('z.zone_d2, .zone_s3, .zone_s4, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('z.zone_d2, .zone_s3, .zone_s4, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_8_1');
          endNow()
        } else {
          mw_8_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw_6 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('25%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('zone_v3, .zone_v4, .zone_alt_v3, .zone_alt_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('zone_v3, .zone_v4, .zone_alt_v3, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('zone_v3, .zone_v4, .zone_alt_v3, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('zone_v3, .zone_v4, .zone_alt_v3, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('zone_v3, .zone_v4, .zone_alt_v3, .zone_alt_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_7');
          endNow()
        } else {
          mw_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw_5 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('20%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_6');
          endNow()
        } else {
          mw_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw_4 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('15%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_s2_, .zone_alt_d2_, .zone_alt_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2_, .zone_s2_, .zone_alt_d2_, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2_, .zone_s2_, .zone_alt_d2_, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2_, .zone_s2_, .zone_alt_d2_, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_s2_, .zone_alt_d2_, .zone_alt_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_5');
          endNow()
        } else {
          mw_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw_3 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('10%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_alt_s2, .zone_alt_s3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d3, .zone_alt_s2, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d3, .zone_alt_s2, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_d3, .zone_alt_s2, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d3, .zone_alt_s2, .zone_alt_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_4');
          endNow()
        } else {
          mw_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw_2 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('5%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d6, .zone_alt_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d6, .zone_alt_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d6, .zone_alt_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d6, .zone_alt_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d6, .zone_alt_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_3');
          endNow()
        } else {
          mw_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mw = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Классический"');
    jQuery('.wizard_percent').text('0%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d5, .zone_alt_s4, .zone_alt_s5').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d4, .zone_d5, .zone_alt_s4, .zone_alt_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d4, .zone_d5, .zone_alt_s4, .zone_alt_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d4, .zone_d5, .zone_alt_s4, .zone_alt_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d5, .zone_alt_s4, .zone_alt_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mw_2');
          endNow()
        } else {
          mw_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }


  ww_12 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        jQuery('.zone_s3, .zone_v4, .zone_alt_s3, .zone_alt_v4').css({
            color: 'transparent',
            borderColor: 'transparent',
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(50deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_v4, .zone_alt_s3, .zone_alt_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: 'green',
            transform: 'scale(1)',
            paddingTop: '1px',
            zIndex: '3'
        });
        onEnd();
      }
    }, 250);
  }

  ww_11_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('83%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'ww_12');
            endNow();
          } else {
            ww_12();
          } 
        }
    }, 1000);
  }

  ww_11_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('77%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'ww_11_4');
            endNow();
          } else {
            ww_11_4();
          } 
        }
    }, 1000);
  } 

  ww_11_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'ww_11_3');
            endNow();
          } else {
            ww_11_3();
          } 
        }
    }, 1000);
  } 

  ww_11_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_v4, .zone_alt_v4, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'ww_11_2');
            endNow();
          } else {
            ww_11_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }

  ww_10 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('60%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v5, .zone_v-, .zone_alt_v1, .zone_alt_v5, .zone_alt_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_v5, .zone_v-, .zone_alt_v1, .zone_alt_v5, .zone_alt_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_v5, .zone_v-, .zone_alt_v1, .zone_alt_v5, .zone_alt_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1, .zone_v5, .zone_v-, .zone_alt_v1, .zone_alt_v5, .zone_alt_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v5, .zone_v-, .zone_alt_v1, .zone_alt_v5, .zone_alt_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_11_1');
          endNow()
        } else {
          ww_11_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_9 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('53%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d3, .zone_alt_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3, .zone_alt_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_10');
          endNow()
        } else {
          ww_10();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_8 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('47%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d5, .zone_d6, .zone_alt_d2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d5, .zone_d6, .zone_alt_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d5, .zone_d6, .zone_alt_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d5, .zone_d6, .zone_alt_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5, .zone_d6, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_9');
          endNow()
        } else {
          ww_9();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_7 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('40%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s6, .zone_alt_s3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s6, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s6, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s6, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s6, .zone_alt_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_8');
          endNow()
        } else {
          ww_8();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_6 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('34%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s5, .zone_alt_s3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s5, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s5, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s5, .zone_alt_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s5, .zone_alt_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_7');
          endNow()
        } else {
          ww_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_5 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('26%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s6, .zone_alt_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s6, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s6, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s6, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s6, .zone_alt_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_6');
          endNow()
        } else {
          ww_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_4 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('19%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s5, .zone_alt_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s5, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s5, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s5, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s5, .zone_alt_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_5');
          endNow()
        } else {
          ww_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_3 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('13%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_alt_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_alt_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_4');
          endNow()
        } else {
          ww_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww_2 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('6%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_alt_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_alt_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_alt_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_3');
          endNow()
        } else {
          ww_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  ww = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Женский"');
    jQuery('.wizard_percent').text('0%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v4, .zone_alt_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4, .zone_alt_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'ww_2');
          endNow()
        } else {
          ww_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }


  mm_10 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('94%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_alt_d4, .zone_alt_d3, .zone_alt_d2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(100deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_alt_d4, .zone_alt_d3, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: 'green',
            transform: 'scale(1)',
            paddingTop: '1px',
            zIndex: '3'
        });
        jQuery('.wizard_percent').text('0%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
                color: 'transparent',
                borderColor: 'transparent',
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: 'green',
                transform: 'scale(1)',
                paddingTop: '1px',
                zIndex: '3'
            });
            onEnd();
          }
        }, 250);
      }
    }, 250);
  }

  mm_9_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_10');
            endNow();
          } else {
            mm_10();
          } 
        }
    }, 1000);
  }

  mm_9_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('81%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_9_4');
            endNow();
          } else {
            mm_9_4();
          } 
        }
    }, 1000);
  } 

  mm_9_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_9_3');
            endNow();
          } else {
            mm_9_3();
          } 
        }
    }, 1000);
  } 

  mm_9_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('68%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_9_2');
            endNow();
          } else {
            mm_9_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  mm_8_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('62%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -320, scale: 1.5}, {duration: 40, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -380, scale: 1.5}, {duration: 17, ease: "none", rotation: -380, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -380, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_9_1');
            endNow();
          } else {
            mm_9_1();
          } 
        }
    }, 1000);
  }

  mm_8_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('56%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 270, scale: 1.5}, {duration: 40, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 330, scale: 1.5}, {duration: 17, ease: "none", rotation: 330, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 330, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_8_4');
            endNow();
          } else {
            mm_8_4();
          } 
        }
    }, 1000);
  } 

  mm_8_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('50%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 20, scale: 1.5}, {duration: 40, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 80, scale: 1.5}, {duration: 17, ease: "none", rotation: 80, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: 80, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_8_3');
            endNow();
          } else {
            mm_8_3();
          } 
        }
    }, 1000);
  } 

  mm_8_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('43%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -10, scale: 1.5}, {duration: 40, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -70, scale: 1.5}, {duration: 17, ease: "none", rotation: -70, scale: 1.5})
             .fromTo('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_',{rotation: -70, scale: 1.5}, {duration: 1, ease: "none", rotation: 0, scale: 1})
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4, .zone_d2_, .zone_alt_d3, .zone_alt_d4, .zone_alt_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'mm_8_2');
            endNow();
          } else {
            mm_8_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  mm_7 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('37%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v3, .zone_alt_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v3, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v3, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v3, .zone_alt_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3, .zone_alt_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_8_1');
          endNow()
        } else {
          mm_8_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm_6 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('31%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v4, .zone_alt_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v4, .zone_alt_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4, .zone_alt_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_7');
          endNow()
        } else {
          mm_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm_5 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('25%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d3, .zone_alt_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d3, .zone_alt_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d3, .zone_alt_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3, .zone_alt_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3, .zone_alt_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_6');
          endNow()
        } else {
          mm_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm_4 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('18%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_alt_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2_, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2_, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2_, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_alt_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_5');
          endNow()
        } else {
          mm_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm_3 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('12%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2, .zone_alt_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_alt_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_alt_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_alt_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_alt_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_4');
          endNow()
        } else {
          mm_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm_2 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('6%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v-, .zone_alt_v1, .zone_alt_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_alt_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
          jQuery('.zone_v-, .zone_alt_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_alt_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1, .zone_alt_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v-, .zone_alt_v1, .zone_alt_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_3');
          endNow()
        } else {
          mm_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mm = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Мужской"');
    jQuery('.wizard_percent').text('0%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_v5, .zone_alt_v2, .zone_alt_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mm_2');
          endNow()
        } else {
          mm_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }


  un_2_3 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Инверсный"');
    jQuery('.wizard_percent').text('54%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_, .zone_alt_v5, .zone_alt_d2, .zone_alt_d5, .zone_alt_d6, .zone_alt_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        jQuery('.wizard_play').removeClass('hidden');
      }
    }, 250);
  }

  un_2_1 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Инверсный"');
    jQuery('.wizard_percent').text('26%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v4, .zone_s3, .zone_v3, .zone_alt_v4, .zone_alt_s3, .zone_alt_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v4, .zone_s3, .zone_v3, .zone_alt_v4, .zone_alt_s3, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v4, .zone_s3, .zone_v3, .zone_alt_v4, .zone_alt_s3, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v4, .zone_s3, .zone_v3, .zone_alt_v4, .zone_alt_s3, .zone_alt_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4, .zone_s3, .zone_v3, .zone_alt_v4, .zone_alt_s3, .zone_alt_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'un_2_2');
          endNow()
        } else {
          un_2_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  un = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "Инверсный"');
    jQuery('.wizard_percent').text('0%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_alt_v2, .zone_alt_d2_, .zone_alt_d3, .zone_alt_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    var zone_gsap = gsap.timeline();
    zone_gsap.fromTo('.ring',{rotation: 0}, {duration: 30, ease: "none", rotation: 180})
             .fromTo('.ring',{rotation: 180}, {duration: 30, ease: "none", rotation: 0})
             .fromTo('.ring',{rotation: 0}, {duration: 15, ease: "none", rotation: -90})
             .fromTo('.ring',{rotation: -90}, {duration: 15, ease: "none", rotation: 0})

    var zone_ring_gsap = gsap.timeline();
    zone_ring_gsap.fromTo('.zone_ring',{rotation: 0}, {duration: 60, ease: "none", rotation: -480})
                  .fromTo('.zone_ring',{rotation: -480}, {duration: 30, ease: "none", rotation: -240})

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_alt_v2, .zone_alt_d2_, .zone_alt_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_alt_v2, .zone_alt_d2_, .zone_alt_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_alt_v2, .zone_alt_d2_, .zone_alt_d3, .zone_alt_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_alt_v2, .zone_alt_d2_, .zone_alt_d3, .zone_alt_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'un_2_1');
          endNow()
        } else {
          un_2_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

// Если есть незавершенный протокол
  if (localStorage.getItem('paused')) {
    jQuery('.wizard_continue').removeClass('hidden');
    returned_img = localStorage.getItem('pausedPhoto');
    returned_img2 = localStorage.getItem('pausedPhoto2');
    pausedStatus = true;
    var protocol = localStorage.getItem('cur_protocol');
    jQuery('.main_arrow').addClass('main_arrow_combine');
    jQuery('.main_arrow_title').addClass('main_arrow_title_combine');
  }

  jQuery('.wizard_continue.btn-warning').on('click', function(event) {
    var top1 = localStorage.getItem('top1');
    var left1 = localStorage.getItem('left1');
    var top2 =  localStorage.getItem('top2');
    var left2 = localStorage.getItem('left2');
    jQuery('.uploaded_pics_wrapper_1').css('top', top1);
    jQuery('.uploaded_pics_wrapper_1').css('left', left1);
    jQuery('.uploaded_pics_wrapper_2').css('top', top2);
    jQuery('.uploaded_pics_wrapper_2').css('left', left2);
    jQuery('.machine_screen, #intro, .btn_prot_choice, .btn_reset').addClass('hidden');
    jQuery('.uploaded_pics_1').attr('src', returned_img);
    jQuery('.uploaded_pics_2').attr('src', returned_img2);
    jQuery('.wm_start').removeClass('unopacity').removeAttr('style');
    jQuery('.ring, .wizard_templates, .wizard_way').removeClass('hidden');
    jQuery('.uploaded_pics_wrapper').draggable( "disable");
    jQuery('.wizard_way').removeClass('col-sm-12 col-md-12').addClass('col-sm-6 col-md-6');
    if (protocol == 'un') {
      jQuery('.wizard_template_1').removeClass('hidden');
      jQuery('.wizard_templates').removeClass('wizard_templates_mw wizard_templates_ww wizard_templates_mm').addClass('wizard_templates_un');
      jQuery('.wizard_heading').removeClass('unvisible').text('Протокол "Инверсный". Перенесите зоны на фото');
    } else if (protocol == 'mw') {
      jQuery('.wizard_template_1').removeClass('hidden');
      jQuery('.wizard_templates').removeClass('wizard_templates_un wizard_templates_ww wizard_templates_mm').addClass('wizard_templates_mw');
      jQuery('.wizard_heading').removeClass('unvisible').text('Протокол "Классический". Перенесите зоны на фото');
    } else if (protocol == 'ww') {
      jQuery('.wizard_template_2').removeClass('hidden');
      jQuery('.wizard_templates').removeClass('wizard_templates_un wizard_templates_mw wizard_templates_mm').addClass('wizard_templates_ww');
      jQuery('.wizard_heading').removeClass('unvisible').text('Протокол "Женский". Перенесите зоны на фото');
    } else if (protocol == 'mm') {
      jQuery('.wizard_template_3').removeClass('hidden');
      jQuery('.wizard_templates').removeClass('wizard_templates_un wizard_templates_mw wizard_templates_ww').addClass('wizard_templates_mm');
      jQuery('.wizard_heading').removeClass('unvisible').text('Протокол "Мужской". Перенесите зоны на фото');
    }
    jQuery('.wizard_to_protList, .wizard_play').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').removeClass('hidden').text('Перенесите зоны на фото и можно будет продолжить работу.');
  });

  
  checkPoints = function(){
    jQuery('.zone_movable').each(function() {
      if(parseFloat(jQuery(this).css('left')) < 600){
        pointsStatus = false;
        // console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
      }
      if (parseFloat(jQuery('.ring').css('left')) < 380) {
        pointsStatus = false;
      }
    });
  }

  jQuery('.wizard_play, .wizard_starter_alt').on('click', function(event) {
    un();
    jQuery('.wizard_play').removeClass('hidden');
  });





  // STOP
  function hideNote() {
    jQuery('.wizard_stop').popover('hide');
  }

  jQuery('.wizard_stop') .on('click', function(event) {
    jQuery(this).addClass('wizard_stop_inProgress');
    jQuery('.header-title').text('Программа останавливается');
    // endStatus = true;
    jQuery('.wizard_stop').popover('show');
    setTimeout(hideNote, 5000);
    localStorage.setItem('pausedPhoto', jQuery('.uploaded_pics_1').attr('src'));
    localStorage.setItem('pausedPhoto2', jQuery('.uploaded_pics_2').attr('src'));
    pausedStatus = true;
    console.log('pausedStatus = true');
  });

});
