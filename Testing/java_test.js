/* FIRST TEST */ 
$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );


/* SECOND TEST */ 
$("#drop").hover(function(){
    $(".drop_caption").addClass("hovered")
}, function(){
    $(".drop_caption").removeClass("hovered")
})
 
$("#drag").draggable();
$("#dragtwo").draggable();

$("#drop").droppable({
    drop:function(){
        $("#drag").addClass("dropped")
        $("#text").addClass("dropped")
        $("body").addClass("dropped")
        $(this).addClass("dropped")
    }
})

$("#dragtwo").droppable({
  drop:function(){
      $("body").removeClass("dropped")
      $(this).removeClass("dropped")
  }
})



/* THIRD TEST */
$("#KileyDrag").draggable();
$("#dropbox").droppable({
    drop:function(){
        $("#KileyDrag").addClass("dropped")
        $("#anther_description").addClass("dropped")
        $(this).addClass("dropped")
    }
})
