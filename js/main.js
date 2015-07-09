$(document).ready(function(){
   $(window).scroll(function(e){ 
  $el = $('.tab-menu'); 
  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
    $('.tab-menu').css({
      'position': 'fixed', 'top': '0px',
      'box-shadow': '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
    });
  }
  if ($(this).scrollTop() < 200 && $el.css('position') == 'fixed')
  {
    $('.tab-menu').css({
      'position': 'static', 'top': '0px',
      'box-shadow': 'none'
    });
  } 
});

function hideall() {
  $('#about').hide();$('#docs').hide();$('#involved').hide();$('#download').hide();$('#support').hide();
}
hideall();
$('#about').show();

$('paper-tab').click(function() {
  var myClass = $(this).attr("class");
  var tab = myClass.split(' ')[0];
  hideall();

  if(tab == 'about') {
    $("#about").show();
    $('.path').html('Material For QtQuick > About');
  } else if(tab == 'docs') {
    $("#docs").show();
    $('.path').html('Material For QtQuick > Developer Docs');
  } else if(tab == 'involved') {
    $("#involved").show();
    $('.path').html('Material For QtQuick > Get Involved');
  } else if(tab == 'download') {
    $('#download').show();
    $('.path').html('Material For QtQuick > Download');
  } else if(tab == 'support') {
    $('#support').show();
    $('.path').html('Material For QtQuick > Support');
  }
});





// Jquery Initialize end
});
