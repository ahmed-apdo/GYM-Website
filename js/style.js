$(document).ready(function() {

/*for carousel speed*/
  $('.carousel').carousel({
  interval: 5000
});
  
   //this for page louding  when started or relouded

     $( window ).on( "load", function() {
        $('.loader').fadeOut(2000);
         $('.overlay').fadeOut(2000);
         $('body').css('overflow','auto');
     });
 

/*this for adding class active to links */
 $('.navbar .nav-item .nav-link').click(function() {
$('this').addClass('active-li').siblings().removeClass('active-li');
});

     /*this for scroll button to top*/
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) >= 20) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }
      });
/*to top scroll*/
$('button.scroll').click(function() {
     $('html, body').animate({
      scrollTop: ($('nav').offset().top)
      },1500);
      });
   
/*this for scrolling all nav li*/
$('nav ul li:nth-of-type(1)').click(function() {
          $('html, body').animate({
      scrollTop: ($('#myCarousel').offset().top)
      },1500);
      });
   $('nav ul li:nth-of-type(2)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about-1').offset().top - 30)
      },1500);
      });

   $('nav ul li:nth-of-type(3)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.fetures').offset().top -50)
      },1500);
      });

   $('nav ul li:nth-of-type(4)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.subscripe').offset().top -50)
      },1500);
      });
   $('nav ul li:nth-of-type(5)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.info').offset().top -50)
      },1500);
      });

   $('nav ul li:nth-of-type(6)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.footer').offset().top -50)
      },1500);
      });
   
   $('footer button.end').click(function() {
          $('html, body').animate({
      scrollTop: ($('header').offset().top - 50)
      },2000);
      });
   








 //this for page louding  when started or relouded
 /*$(window).load(function(){
             $('div.page-loading').fadeOut(1000);
             $('body').css('overflow','auto!important');
             
         });*/


     //end all js style  , .page-loading h3
    
      });