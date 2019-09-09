jQuery(function() {

  //Изменение размера круга
  jQuery('.ring').resizable();

  //Dragging elems
  jQuery('.draggable, .ring').draggable({
    snap: false
  });

});
