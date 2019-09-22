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
      tickSound = new buzz.sound( "/sounds/tick", {
          formats: [ "ogg", "mp3" ]
      }),
      reloadSound = new buzz.sound( "/sounds/reload", {
          formats: [ "ogg", "mp3" ]
      }),
      supportsStorage = function(){
          try {
              return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
              return false;
          }
      };

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
        jQuery('.wizard_play').fadeIn(500).removeClass('hidden');
      }
    })
  }

  onEnd = function(){
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
    pausedStatus = false;

    // protocolName = localStor
    swal({
      title: "Протокол завершен",
      text: "Что делать дальше?",
      type: "success",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      cancelButtonClass: "btn-success",
      cancelButtonText: "Другой протокол",
      confirmButtonText: "Новый клиент",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.wizard_main_screen, .wizard_to_protList').addClass('hidden');
        jQuery('.wizard_stop').addClass('hidden');
        jQuery('.wizard_prots, .wizard_operation, .wizard_to_what_way').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_heading').text('Выберите протокол');
      }
    })
  }

  //Dragging elems
  jQuery('.draggable, .ring').draggable({
    snap: false
  });

  // Dragging knife
  jQuery('.marakata').draggable({
    containment: '.wizard_grafic',
    axis: 'y',
    drag: function() {
      // if(jQuery('.btn_graf').hasClass('active')){
        jQuery('.wizard_clean_graf').fadeIn(500).removeClass('hidden');
        knife = jQuery('.marakata').css('top');
        knife = knife.substr(0, knife.length - 2);
        knifeDate = new Date();
        knifeDateDiff = knifeDate - knifeDateOld;
        knife_rate_class = 'knife_rate-'+knife;
        knife_rate_class_dotted = '.knife_rate-'+knife;
        jQuery('.wizard_grafic').append('<div class='+knife_rate_class+'></div>');
        jQuery(knife_rate_class_dotted).addClass('knife_rate').css({
            top: +knife+45+'px',
            width: knifeDateDiff*2+'px'
        });
        knifeDateOld = knifeDate;
      // }
    }
  });

  v2_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('93%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        onEnd();
      }
    }, 250);
  }

  v2_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('83%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg)');
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
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
// II
        jQuery('.wizard_percent').text('85%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'scale(1)',
                paddingTop: '2px',
                zIndex: '1'
            });
// III
            jQuery('.wizard_percent').text('87%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
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
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'scale(1)',
                    paddingTop: '2px',
                    zIndex: '1'
                });
// IV
                jQuery('.wizard_percent').text('89%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
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
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'scale(1)',
                        paddingTop: '2px',
                        zIndex: '1'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v2_6');
                      endNow()
                    } else {
                      v2_6();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v2_4_9 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('78%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  //Этап 5-2-4
    cur_animation_val = 300;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5');
            endNow();
          } else {
            v2_5();
          } 
        }
    }, 1000);
  }

  v2_4_8 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('73%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  //Этап 5-2-4
    cur_animation_val = 270;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_9');
            endNow();
          } else {
            v2_4_9();
          } 
        }
    }, 1000);
  }

  v2_4_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('68%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  //Этап 5-2-4
    cur_animation_val = 10;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_8');
            endNow();
          } else {
            v2_4_8();
          } 
        }
    }, 1000);
  }

  v2_4_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  //Этап 5-2-4
    cur_animation_val = 55;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2, .zone_d2, .zone_d2_').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_d2, .zone_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_7');
            endNow();
          } else {
            v2_4_7();
          } 
        }
    }, 1000);
  }

  v2_4_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('58%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  //Этап 5-2-4
    cur_animation_val = 300;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_6');
            endNow();
          } else {
            v2_4_6();
          } 
        }
    }, 1000);
  }

  v2_4_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('53%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 270;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_5');
            endNow();
          } else {
            v2_4_5();
          } 
        }
    }, 1000);
  }

  v2_4_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 10;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_4');
            endNow();
          } else {
            v2_4_4();
          } 
        }
    }, 1000);
  }

  v2_4_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('43%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 0;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_4_3');
            endNow();
          } else {
            v2_4_3();
          } 
        }
    }, 1000);
  }

  v2_4_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('36%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000'
        });
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'
          });
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
          });
        } else if (count_animation > 220) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
          });
        }
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v2_4_2');
          endNow()
        } else {
          v2_4_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('28%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg)');
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
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
// II
        jQuery('.wizard_percent').text('30%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'scale(1)',
                paddingTop: '2px',
                zIndex: '1'
            });
// III
            jQuery('.wizard_percent').text('32%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
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
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'scale(1)',
                    paddingTop: '2px',
                    zIndex: '1'
                });
// IV
                jQuery('.wizard_percent').text('34%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
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
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'scale(1)',
                        paddingTop: '2px',
                        zIndex: '1'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v2_4_1');
                      endNow()
                    } else {
                      v2_4_1();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v2_2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('23%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 300;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_3');
            endNow();
          } else {
            v2_3();
          } 
        }
    }, 1000);
  }

  v2_2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 270;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_4');
            endNow();
          } else {
            v2_2_4();
          } 
        }
    }, 1000);
  }

  v2_2_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('13%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 10;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_3');
            endNow();
          } else {
            v2_2_3();
          } 
        }
    }, 1000);
  }

  v2_2_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('8%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 0;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_2');
            endNow();
          } else {
            v2_2_2();
          } 
        }
    }, 1000);
  }

  v2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000'
        });
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
            background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'
          });
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
            background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
          });
        } else if (count_animation > 220) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
            background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
          });
        }
        jQuery('.zone_cl').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+rotateVal+'deg) scale(1.5)',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v2_2_1');
          endNow()
        } else {
          v2_2_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('91%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        onEnd();
      }
    }, 250);
  }

  v1_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('78%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg)');
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
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
// II
        jQuery('.wizard_percent').text('81%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'scale(1)',
                paddingTop: '2px',
                zIndex: '1'
            });
// III
            jQuery('.wizard_percent').text('84%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
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
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'scale(1)',
                    paddingTop: '2px',
                    zIndex: '1'
                });
// IV
                jQuery('.wizard_percent').text('87%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
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
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'scale(1)',
                        paddingTop: '2px',
                        zIndex: '1'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v1_7');
                      endNow()
                    } else {
                      v1_7();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v1_5_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-4
    cur_animation_val = 300;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v4').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_6');
            endNow();
          } else {
            v1_6();
          } 
        }
    }, 1000);
  }

  v1_5_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-3
    cur_animation_val = 270;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 60){                                                                         //60
          cur_animation_val += 1.5;
          jQuery('.zone_v3, .zone_s3').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 77) {                                                         //77
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_7');
            endNow();
          } else {
            v1_5_7();
          } 
        }
    }, 1000);
  }

  v1_5_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-2-1
    cur_animation_val = 10;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 22){                                                                         //22
          cur_animation_val += 1.5;
          jQuery('.zone_v4, .zone_v3').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 39) {                                                         //39
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_6');
            endNow();
          } else {
            v1_5_6();
          } 
        }
    }, 1000);
  }

  v1_5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-1-4
    cur_animation_val = 300;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){                                                                         //40
          cur_animation_val += 1.5;
          jQuery('.zone_v1, .zone_v4, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 57) {                                                         //57
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_5');
            endNow();
          } else {
            v1_5_5();
          } 
        }
    }, 1000);
  }

  v1_5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-1-3
    cur_animation_val = 270;
    count_animation = 1;
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 60){                                                                         //60
          cur_animation_val += 1.5;
          jQuery('.zone_v1, .zone_s3').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 77) {                                                         //77
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_4');
            endNow();
          } else {
            v1_5_4();
          } 
        }
    }, 1000);
  }

  v1_5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('42%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 10;
    count_animation = 1;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 53){                                                                         //53
          cur_animation_val += 1.5;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
            transform: 'rotate('+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 70) {                                                         //70
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_3');
            endNow();
          } else {
            v1_5_3();
          } 
        }
    }, 1000);
  }

  v1_5_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('36%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
//Этап 5-1-1
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 22){                                                                         //22
          cur_animation_val += 1.5;
          jQuery('.zone_v0, .zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
            transform: 'rotate(-'+cur_animation_val+'deg) scale(1.5)',
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            zIndex: '1000'
          });
          count_animation += 1;
        } else if(count_animation <= 39) {                                                         //39
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '1'
          });
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_2');
            endNow();
          } else {
            v1_5_2();
          } 
        }
    }, 1000);
  }

  v1_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('27%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (count_animation == 1) {
          cur_animation_val = 0;
          count_animation = 1;
  //анимация против часовой стрелки
          jQuery('.triangle').css({
              transform: 'scale(0.1) rotateY(180deg)rotateZ(120deg)',
              left: '-190px',
              top: '-142px'
          });
  //анимация первого треугольника
          jQuery('.zone_v1').addClass('transparent');
          firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
            setTimeout(function(){
              jQuery('.zone_v2').addClass('transparent');
              secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                setTimeout(function(){
                  jQuery('.zone_v3').addClass('transparent');
                  thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                    setTimeout(function(){
                      jQuery('.zone_v4').addClass('transparent');
                      fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                        jQuery('.zone').removeClass('transparent');
  //анимация по часовой стрелке
                        jQuery('.triangle').css({
                            transform: 'scale(0.1) rotateY(0deg)rotateZ(120deg)',
                            left: '-184px',
                            top: '-142px'
                        });
  //анимация первого треугольника
                        jQuery('.zone_v1').addClass('transparent');                                                                    
                        firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
                          setTimeout(function(){
                            jQuery('.zone_v2').addClass('transparent');
                            secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                              setTimeout(function(){
                                jQuery('.zone_v3').addClass('transparent');
                                thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                                  setTimeout(function(){
                                    jQuery('.zone_v4').addClass('transparent');
                                    fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                                    });
                                    fourthTriangleAnimation.play();
                                  }, 250)
                                });
                                thirdTriangleAnimation.play();
                              }, 250)
                            });
                            secondTriangleAnimation.play();
                          }, 250)
                        });
                        firstTriangleAnimation.play();
                      });
                      fourthTriangleAnimation.play();
                    }, 250)
                  });
                  thirdTriangleAnimation.play();
                }, 250)
              });
              secondTriangleAnimation.play();
            }, 250)
          });
          firstTriangleAnimation.play();
        }
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone').removeClass('transparent');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_5_1');
          endNow()
        } else {
          v1_5_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (count_animation == 1) {
          cur_animation_val = 0;
          count_animation = 1;
  //анимация против часовой стрелки
          jQuery('.triangle').css({
              transform: 'scale(0.1) rotateY(180deg)rotateZ(120deg)',
              left: '-190px',
              top: '-142px'
          });
  //анимация первого треугольника
          jQuery('.zone_v1').addClass('transparent');
          firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
            setTimeout(function(){
              jQuery('.zone_v2').addClass('transparent');
              secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                setTimeout(function(){
                  jQuery('.zone_v3').addClass('transparent');
                  thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                    setTimeout(function(){
                      jQuery('.zone_v4').addClass('transparent');
                      fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                        jQuery('.zone').removeClass('transparent');
  //анимация по часовой стрелке
                        jQuery('.triangle').css({
                            transform: 'scale(0.1) rotateY(0deg)rotateZ(120deg)',
                            left: '-184px',
                            top: '-142px'
                        });
  //анимация первого треугольника
                        jQuery('.zone_v1').addClass('transparent');                                                                    
                        firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
                          setTimeout(function(){
                            jQuery('.zone_v2').addClass('transparent');
                            secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                              setTimeout(function(){
                                jQuery('.zone_v3').addClass('transparent');
                                thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                                  setTimeout(function(){
                                    jQuery('.zone_v4').addClass('transparent');
                                    fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                                    });
                                    fourthTriangleAnimation.play();
                                  }, 250)
                                });
                                thirdTriangleAnimation.play();
                              }, 250)
                            });
                            secondTriangleAnimation.play();
                          }, 250)
                        });
                        firstTriangleAnimation.play();
                      });
                      fourthTriangleAnimation.play();
                    }, 250)
                  });
                  thirdTriangleAnimation.play();
                }, 250)
              });
              secondTriangleAnimation.play();
            }, 250)
          });
          firstTriangleAnimation.play();
        }
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone').removeClass('transparent');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_4');
          endNow()
        } else {
          v1_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('9%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate('+rotateVal+'deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(-'+rotateVal+'deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_3');
          endNow()
        } else {
          v1_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            tickSound.stop();
            reloadSound.play();
            reloadTime += 1;
        } else if (reloadTime == 1) {
            // reloadSound.stop();
            tickSound.play();
        };
        jQuery('.zone_v5, .zone_d5, .zone_d6').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate('+rotateVal+'deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat',
            transform: 'scale(1.5)',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_2');
          endNow()
        } else {
          v1_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

// Если есть незавершенный протокол
  if (localStorage.getItem('paused')) {
    jQuery('.wizard_continue').removeClass('hidden');
    returned_img = localStorage.getItem('pausedPhoto');
    pausedStatus = true;
    jQuery('.main_arrow').addClass('main_arrow_combine');
    jQuery('.main_arrow_title').addClass('main_arrow_title_combine');
  }

  jQuery('.wizard_continue.btn-warning').on('click', function(event) {
    jQuery('.machine_screen, #intro').addClass('hidden');
    jQuery('.wizard_returned').attr('src', returned_img);
    jQuery('.wm_start').removeClass('unopacity');
    jQuery('.wm_start').removeAttr('style');
    jQuery('.wizard_to_protList, .wizard_play').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Перенесите зоны на фото и можно будет продолжить работу.');
  });

  
  checkPoints = function(){
    jQuery('.zone_movable').each(function() {
      if(parseFloat(jQuery(this).css('left')) < 480){
        pointsStatus = false;
        console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
      }
    });
  }

  jQuery('.wizard_play').on('click', function(event) {
    checkPoints();
    // if(pointsStatus == false){
    //   swal("Не все зоны перенесены!", "Перед началом процедуры необходимо перенести на фото все зоны.", "info");
    //   pointsStatus = true;
    // } else {
      if (pausedStatus == true) {
        // jQuery('.wizard_returned').attr('src', localStorage.getItem('pausedPhoto'));
        // console.log(localStorage.getItem('pausedPhoto'));
        protocolfromMemory = eval(localStorage.getItem('paused'));
        console.log(protocolfromMemory);
        protocolfromMemory();
        pausedStatus = false;
        jQuery(this).addClass('hidden');
        jQuery('.wizard_stop, .zone_ring').fadeIn(500).removeClass('hidden');
      } else {
        pausedStatus = false;
        jQuery(this).addClass('hidden');
        jQuery('.wizard_stop, .zone_ring').fadeIn(500).removeClass('hidden');
        var protocol = localStorage.getItem('cur_protocol');
        console.log(protocol);
        if (protocol == 'v1') {
          v1();
          jQuery('.status_title').text('Протокол V1');
        } else if (protocol == 'v2') {
          v2();
          jQuery('.status_title').text('Протокол V2-5');
        } else if (protocol == 'v3') {
          v3();
          jQuery('.status_title').text('Протокол V3-4');
        } else if (protocol == 'v4') {
          v4();
          jQuery('.status_title').text('Протокол V4-3');
        } else if (protocol == 'v5') {
          v5();
          jQuery('.status_title').text('Протокол V5-2');
        } else if (protocol == 'solis') {
          solis();
          jQuery('.status_title').text('Протокол Solis');
        } else if (protocol == 'drenag') {
          drenag();
          jQuery('.status_title').text('Дренажный протокол');
        } else if (protocol == 'universal') {
          universal();
          jQuery('.status_title').text('Универсальный протокол');
        } else if (protocol == 'visceral') {
          mmt();
          jQuery('.status_title').text('Висцеральный протокол');
        }
      }
      localStorage.removeItem('paused');
      localStorage.removeItem('pausedPhoto');
      jQuery('.wizard_stop').removeClass('wizard_stop_inProgress');
    // }
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
    localStorage.setItem('pausedPhoto', jQuery('.wizard_returned').attr('src'));
    pausedStatus = true;
    console.log('pausedStatus = true');
  });

});
