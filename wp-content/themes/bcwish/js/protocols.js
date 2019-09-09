jQuery(function() {
  //Dragging elems
  jQuery(".draggable, .ring").draggable({
    snap: false;
  });

  //Изменение размера круга
  jQuery(".ring").resizable({
    aspectRatio: 1/1;
  });
});
