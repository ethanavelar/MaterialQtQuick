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
$('#docs').hide();
$('#involved').hide();
$('#download').hide();
$('#support').hide();

$(".about").click(function() {
  $("#about").show();
  $("#docs").hide();
  $("#involved").hide();
  $("#download").hide();
  $("#support").hide();
  $('.path').html("Material For QtQuick > About");
});

$(".docs").click(function() {
  $("#about").hide();
  $("#docs").show();
  $("#involved").hide();
  $("#download").hide();
  $("#support").hide();
  $('.path').html("Material For QtQuick > Developer Docs");
});

$(".involved").click(function() {
  $("#about").hide();
  $("#docs").hide();
  $("#involved").show();
  $("#download").hide();
  $("#support").hide();
  $('.path').html("Material For QtQuick > Get Involved");
});

$(".download").click(function() {
  $("#about").hide();
  $("#docs").hide();
  $("#involved").hide();
  $("#download").show();
  $("#support").hide();
  $('.path').html("Material For QtQuick > Download");
});

$(".support").click(function() {
  $("#about").hide();
  $("#docs").hide();
  $("#involved").hide();
  $("#download").hide();
  $("#support").show();
  $('.path').html("Material For QtQuick > Support");
});
$('.action', '.actionbar', '.actionbutton', '.apptheme', '.appwindow', '.awesomeicon', '.baselistitem', '.bottomactionsheet', '.bottomsheet', '.button', '.card').hide();
$('').click(function() {
  
});




// Jquery Initialize end
});
