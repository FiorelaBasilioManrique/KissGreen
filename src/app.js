//  $(document).ready(function(){
//      $("#baner").css({"height":$(window).height() + "px"});
// 
//  $(window).scroll(function() {
//      if ($("#menu").offset().top > 56) {
//          $("#menu").addClass("bg-dark");
//      } else {
//          $("#menu").removeClass("bg-dark");
//      }
//    });

$(document).ready(function(){
    var flag = false;
    var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if(scroll > 200){
            $("#logo").css({"margin-top": "-5px","margin-left": "120px", "width": "50px", "height": "50px"});

        } else {
            $("#logo").css({"margin-top": "300px", "margin-left": "120px","width": "200px", "height": "200px"});
        }
    });

});

