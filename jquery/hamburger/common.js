$(function(){
  // メニューのopen
  $("#open").on("click",function() {
    $('body').toggleClass('active');
});
// メニューのclose
$("#close,#mask").on("click",function() {
  $('body').removeClass('active');
});
});

