// ---------Responsive-navbar-active-animation-----------  
// function test() {
//     var tabsNewAnim = $("#navbarSupportedContent");
//     var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
//     var activeItemNewAnim = tabsNewAnim.find(".active");
//     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//     var itemPosNewAnimTop = activeItemNewAnim.position();
//     var itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-selector").css({
//         top: itemPosNewAnimTop.top + "px",
//         left: itemPosNewAnimLeft.left + "px",
//         height: activeWidthNewAnimHeight + "px",
//         width: activeWidthNewAnimWidth + "px"
//     });
//     $("#navbarSupportedContent").on("click", "li", function(e) {
//         $("#navbarSupportedContent ul li").removeClass("active");
//         $(this).addClass("active");
//         var activeWidthNewAnimHeight = $(this).innerHeight();
//         var activeWidthNewAnimWidth = $(this).innerWidth();
//         var itemPosNewAnimTop = $(this).position();
//         var itemPosNewAnimLeft = $(this).position();
//         $(".hori-selector").css({
//             top: itemPosNewAnimTop.top + "px",
//             left: itemPosNewAnimLeft.left + "px",
//             height: activeWidthNewAnimHeight + "px",
//             width: activeWidthNewAnimWidth + "px"
//         });
//     });
// }
// $(document).ready(function() {
//     setTimeout(function() {
//         test();
//     });
// });
// $(window).on("resize", function() {
//     setTimeout(function() {
//         test();
//     }, 500);
// });
// $(".navbar-toggler").click(function() {
//     $(".navbar-collapse").slideToggle(300);
//     setTimeout(function() {
//         test();
//     });
// });
// --------------add active class-on another-page move----------  
// jQuery(document).ready(function($) {
//     // Get current path and find target link  
//     var path = window.location.pathname.split("/").pop();
//     // Account for home page with empty path  
//     if (path == "") {
//         path = "Home.html";
//     }
//     var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
//     // Add active class to target link  
//     target.parent().addClass("active");
// });
// Add active class on another page linked  
// ==========================================  
// $(window).on('load',function () {  
//   var current = location.pathname;  
//   console.log(current);  
//   $('#navbarSupportedContent ul li a').each(function(){  
//     var $this = $(this);  
//     // if the current path is like this link, make it active  
//     if($this.attr('href').indexOf(current) !== -1){  
//       $this.parent().addClass('active');  
//       $this.parents('.menu-submenu').addClass('show-dropdown');  
//       $this.parents('.menu-submenu').parent().addClass('active');  
//     }else{  
//       $this.parent().removeClass('active');  
//     }  
//   })  
// });
$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"><i class='bx bx-menu'></i></a>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
});
$(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});