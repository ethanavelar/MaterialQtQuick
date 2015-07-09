$(document).ready(function(){
   $(window).scroll(function(e){ 
  $el = $('.tab-menu'); 
  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
    $('.tab-menu').css({'position': 'fixed', 'top': '0px'});
    $('.tab-menu').css({ 'box-shadow': '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'}); 
  }
  if ($(this).scrollTop() < 200 && $el.css('position') == 'fixed')
  {
    $('.tab-menu').css({'position': 'static', 'top': '0px'});
    $('.tab-menu').css({ 'box-shadow': 'none'});  
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
    console.log('about is true');
  } else if(tab == 'docs') {
    $("#docs").show();
    console.log('docs is true');
  } else if(tab == 'involved') {
    $("#involved").show();
    console.log('involved is true')
  } else if(tab == 'download') {
    $('#download').show();
    console.log('download is true')
  } else if(tab == 'support') {
    $('#support').show();
    console.log('They are all true!');
  }
});





// Jquery Initialize end
});
