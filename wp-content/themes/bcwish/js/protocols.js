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
      protocolfromMemory,
      firstTriangleAnimation,
      secondTriangleAnimation,
      thirdTriangleAnimation,
      fourthTriangleAnimation,
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


  v1_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('6%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6,.zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/triangle_air.png) 0 0/100% no-repeat',
            zIndex: '1000'
        });
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6,.zone_s2_').css({
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
          // v1_3();
          console.log('continue');
        } 
      }
    }, 250);
  }

  v1_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('24%');
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
              background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) 0 0/100% no-repeat',
              transform: 'rotate(-'+cur_animation_val+'deg) scale(1.4)',
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
//Этап 5-1-2
            cur_animation_val = 10;
            count_animation = 1;
            phaseSeven_one = setInterval(function(){
                if (count_animation <= 53){                                                                         //53
                    cur_animation_val += 1.5;
                    jQuery('.zone_v1, .zone_v4').css({
                      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) 0 0/100% no-repeat',
                      transform: 'rotate('+cur_animation_val+'deg) scale(1.4)',
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
//Этап 5-1-3
                    cur_animation_val = 270;
                    count_animation = 1;
                    phaseSeven_one = setInterval(function(){
                        if (count_animation <= 60){                                                                         //60
                            cur_animation_val += 1.5;
                            jQuery('.zone_v1, .zone_s3').css({
                              background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) 0 0/100% no-repeat',
                              transform: 'rotate('+cur_animation_val+'deg) scale(1.4)',
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
//Этап 5-1-4
                            cur_animation_val = 300;
                            count_animation = 1;
                            phaseSeven_one = setInterval(function(){
                                if (count_animation <= 40){                                                                         //40
                                    cur_animation_val += 1.5;
                                    jQuery('.zone_v1, .zone_v4, .zone_v5').css({
                                      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) 0 0/100% no-repeat',
                                      transform: 'rotate(-'+cur_animation_val+'deg) scale(1.4)',
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
//Этап 5-2-1
                                    cur_animation_val = 10;
                                    count_animation = 1;
                                    phaseSeven_one = setInterval(function(){
                                        if (count_animation <= 22){                                                                         //22
                                            cur_animation_val += 1.5;
                                            jQuery('.zone_v4, .zone_v3').css({
                                              background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) 0 0/100% no-repeat',
                                              transform: 'rotate('+cur_animation_val+'deg) scale(1.4)',
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

                        //Этап 5-2-3
                                            cur_animation_val = 270;
                                            count_animation = 1;
                                            phaseSeven_one = setInterval(function(){
                                                if (count_animation <= 60){                                                                         //60
                                                    cur_animation_val += 1.5;
                                                    jQuery('.zone_v3, .zone_s3').css({
                                                      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) 0 0/100% no-repeat',
                                                      transform: 'rotate('+cur_animation_val+'deg) scale(1.4)',
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
                //Этап 5-2-4
                                                    cur_animation_val = 300;
                                                    count_animation = 1;
                                                    phaseSeven_one = setInterval(function(){
                                                        if (count_animation <= 40){                                                                         //40
                                                            cur_animation_val += 1.5;
                                                            jQuery('.zone_v4').css({
                                                              background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) 0 0/100% no-repeat',
                                                              transform: 'rotate(-'+cur_animation_val+'deg) scale(1.4)',
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
                                                            v1_6();
                                                        }
                                                    }, 1000);
                                                }
                                            }, 1000);
                                        }
                                    }, 1000);
                                }
                            }, 1000);
                        }
                    }, 1000);
                }
            }, 1000);
        }
    }, 1000);
  }

  v1_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('12%');
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
            transform: 'scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.4)'
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
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.4)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone').removeClass('transparent');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_5');
          endNow()
        } else {
          v1_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('9%');
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
            transform: 'scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.4)'
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
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.4)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
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
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('6%');
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
            transform: 'rotate('+rotateVal+'deg) scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) 0 0/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(-'+rotateVal+'deg) scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.4)'
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
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.4)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
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
    jQuery('.wizard_heading').text('Выполняется протокол "V1"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        jQuery('.zone_v5, .zone_d5, .zone_d6').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate('+rotateVal+'deg) scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) 0 0/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) 0 0/100% no-repeat',
            transform: 'scale(1.4)',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.4)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.4)'
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
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.4)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.4)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
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
  }

  jQuery('.wizard_continue.btn-warning').on('click', function(event) {
    jQuery('.machine_screen, #intro').addClass('hidden');
    jQuery('.wizard_returned').attr('src', returned_img);
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
    // }
  });


  // STOP
  function hideNote() {
    jQuery('.wizard_stop').popover('hide');
  }

  jQuery('.wizard_stop') .on('click', function(event) {
    jQuery('.header-title').text('Программа останавливается');
    // endStatus = true;
    jQuery('.wizard_stop').popover('show');
    setTimeout(hideNote, 5000);
    localStorage.setItem('pausedPhoto', jQuery('.wizard_returned').attr('src'));
    pausedStatus = true;
    console.log('pausedStatus = true');
  });

});
