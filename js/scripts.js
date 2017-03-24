$(document).ready(function(){


  $('#submit').click(function(event){

    var frontBackScore = parseInt($('#frontVsBack1').val()) + parseInt($('#frontVsBack2').val()) + parseInt($('input[name=frontVsBack3]:checked').val());
    var bigSmallScore = parseInt($('#bigVsSmall1').val()) + parseInt($('#bigVsSmall2').val()) + parseInt($('input[name=bigVsSmall3]:checked').val());
    var visWritScore = parseInt($('#visVsWrit1').val()) + parseInt($('#visVsWrit2').val()) + parseInt($('input[name=visVsWrit3]:checked').val());
    var cJavaScore = parseInt($('#cVsJava1').val()) + parseInt($('#cVsJava2').val()) + parseInt($('input[name=cVsJava3]:checked').val());        


    event.preventDefault();
    console.log(frontBackScore, bigSmallScore, visWritScore, cJavaScore)


  })

});
