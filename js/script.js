console.log("lets see if this remains in your code")
// ANTHER KILEY
$("#KileyDrag").draggable({
    appendTo: 'body',
    scroll: false //stops scrolling container when moved outside boundaries
});
$("#Kileybox").droppable({accept: "#KileyDrag",
    drop:function(){
        $("#anther_kiley").addClass("visible");
        $(this).addClass("Kileydrop")
        
    }
})
$("#anther_kiley").draggable({
    appendTo: 'body',
    scroll: false
});
$("#CLOSE1").click(function(){
    $("#anther_kiley").removeClass("visible");s
  });



// EMI TAKAHASHI & MICHELLE KUAN
$("#TKDrag").draggable({
    appendTo: 'body',
    scroll: false //stops scrolling container when moved outside boundaries
});
$("#TKbox").droppable({accept: "#TKDrag",
    drop:function(){
        $("#takahashi_kuan").addClass("visible");
        $(this).addClass("TKdrop")
    }
})
$("#takahashi_kuan").draggable({
    appendTo: 'body',
    scroll: false
});
$("#CLOSE2").click(function(){
    $("#takahashi_kuan").removeClass("visible");s
  });



// E ROON KANG
$("#KangDrag").draggable({
    appendTo: 'body',
    scroll: false //stops scrolling container when moved outside boundaries
});
$("#Kangbox").droppable({accept: "#KangDrag",
    drop:function(){
        $("#e_roon_kang").addClass("visible");
        $(this).addClass("Kangdrop")
    }
})
$("#e_roon_kang").draggable({
    appendTo: 'body',
    scroll: false
});
$("#CLOSE3").click(function(){
    $("#e_roon_kang").removeClass("visible");s
  });



// SEBASTIAN AUBIN
$("#AubinDrag").draggable({
    appendTo: 'body',
    scroll: false //stops scrolling container when moved outside boundaries
});
$("#Aubinbox").droppable({accept: "#AubinDrag",
    drop:function(){
        $("#sebastian_aubin").addClass("visible");
        $(this).addClass("Audbindrop")
    }
})
$("#sebastian_aubin").draggable({
    appendTo: 'body',
    scroll: false
});
$("#CLOSE4").click(function(){
    $("#sebastian_aubin").removeClass("visible");s
  });
  

// MOBILE SCREEN SIZE
if ($(window).width()<601){
    $('#sebastian_aubin').draggable( "destroy" )
    $('#e_roon_kang').draggable( "destroy" )
    $('#takahashi_kuan').draggable( "destroy" )
    $('#anther_kiley').draggable( "destroy" )
}

$("#ToTop").click(function(){
$('html, body').animate({
    scrollTop: $("#top").offset().top
}, 900)
});





// SCROLL TO ELEMENT COMMAND
// $('html, body').animate({
//     scrollTop: $("#ID").offset().top
// }, 800)


// STOP COMMAND
// $('#ID').draggable( "destroy" )

