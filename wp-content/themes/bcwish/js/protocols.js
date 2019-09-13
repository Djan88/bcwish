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

  var protocol = localStorage.getItem('cur_protocol');
  console.log(protocol);
  
  // checkPoints = function(){
    // jQuery('.zone_movable').each(function() {
    //   if(parseFloat(jQuery(this).css('left')) < 20){
    //     pointsStatus = false;
    //     console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
    //   }
    // });
  // }

  jQuery('.wizard_play').on('click', function(event) {
    // checkPoints();
    jQuery('.zone_movable').each(function() {
      console.log('test');
    });
    if(pointsStatus == false){
      // swal("Не все зоны перенесены", "Перед началом процедуры необходимо перенести на фото все зоны", "info");
      pointsStatus = true;
      console.log('zones_alert');
    } else {
      jQuery(this).addClass('wizard_play_started');
      jQuery('.wizard_start_icon').addClass('hidden');
      jQuery('.wizard_stop_icon, .wizard_percent').fadeIn(500).removeClass('hidden');
    }
  });


  v1 = function(){
    console.log('Фаза 1');
  }

});
