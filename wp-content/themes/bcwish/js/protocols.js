jQuery(function() {

  //Изменение размера круга
  jQuery('.ring').resizable({
    aspectRatio: 1/1
  });
  
  //Dragging elems
  jQuery('.draggable, .ring').draggable({
    snap: false
  });

});
