$(document).ready(function(){
  $('#submit').click(function(event){
    $('.answer').hide();
    //Assigns point values from inputs into 4 categorical scores, organized into 4 variables.
    var frontBackScore = parseInt($('#frontVsBack1').val()) + parseInt($('#frontVsBack2').val()) + parseInt($('input[name=frontVsBack3]:checked').val());
    var bigSmallScore = parseInt($('#bigVsSmall1').val()) + parseInt($('#bigVsSmall2').val()) + parseInt($('input[name=bigVsSmall3]:checked').val());
    var visWritScore = parseInt($('#visVsWrit1').val()) + parseInt($('#visVsWrit2').val()) + parseInt($('input[name=visVsWrit3]:checked').val());
    var cJavaScore = parseInt($('#cVsJava1').val()) + parseInt($('#cVsJava2').val()) + parseInt($('input[name=cVsJava3]:checked').val());

    //frontBack: - is front, + is back
    //bigSmall: - is big, + is small
    //visWrit:  - is vis, + is Writ
    //cJava: - is C#, + is Java
    //debug: console.log(frontBackScore, bigSmallScore, visWritScore, cJavaScore)

    if(frontBackScore>0){//user prefers back end (Java/Ruby/C#)
      if(bigSmallScore>0){//user prefers smaller companies (Ruby)
        $('#ruby').slideDown('2000');
      }
      else{//user prefers bigger companies (Java/C#)
        if(cJavaScore>0){//user prefers Java
          $('#java').slideDown('2000');
        }
        else{//user prefers C#
          $('#csharp').slideDown('2000');
        }
      }
    }else{//user prefers front end (PHP/CSS)
      if(visWritScore>0){//user prefers written content(PHP)
        $('#php').slideDown('2000');
      }
      else{//user prefers visual content(CSS)
        $('#css').slideDown('2000');
      }
    }
    event.preventDefault();
  });
});
