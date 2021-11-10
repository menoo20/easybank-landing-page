jQuery(document).ready(function($) {

$(".menu-icon").click(function() {
//    $(this).addClass("hide");
//    $(".close-icon").removeClass("hide");
   $(this).fadeOut("fast");
   $(".overlay").fadeIn(300);
   $(".header-menu ul").fadeIn(300);
   $(".close-icon").delay(200).fadeIn("slow");
})

$(".close-icon").click(function() {
    $(this).fadeOut("fast");
    $(".overlay").fadeOut(400);
    $(".header-menu ul").fadeOut(300);
    $(".menu-icon").delay(200).fadeIn("slow");

 })


});










    


