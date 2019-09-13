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


  v1 = function(){
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('3');
    localStorage.setItem('pausedPhases', '3');
    localStorage.setItem('pausedProtName', 'Универсальный протокол');
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
            transform: 'rotate('+rotateVal+'deg) scale(1.3)',
            background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) 0 0/100% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            background: 'url(/wp-content/themes/bcwish/img/vig_.png) 0 0/100% no-repeat',
            transform: 'scale(1.3)',
            zIndex: '1000'
        });
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) 0 0/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.3)'
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
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.3)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.3)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 9;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.3)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        } else {
            d12Val+= 9;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.3)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) 0 0/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d5, .zone_d6, .zone_v-').css({
            background: 'rgba(255,255,255, 0.5)',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '1'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg)');
      }
    }, 250);
  }
  
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
      jQuery('.wizard_heading').text('Программа выполняется.');
      jQuery(this).addClass('wizard_play_started');
      jQuery('.wizard_start_icon').addClass('hidden');
      jQuery('.wizard_stop_icon, .wizard_percent').fadeIn(500).removeClass('hidden');
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
    // }
  });

});
