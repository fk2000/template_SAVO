/* 
 Date:02-09-2015
 Author:Vijayan PP
 */


$(window).load(function()
{
$("div.preloader").delay(299).fadeOut("slow");

}       
);

(function($) {
  
    var App = {
 
    /**
    * Init Function
    */
    init: function() {
        
        App.Carousel();
        App.Scroll();
        App.prettyphoto();
        App.scrollingTo();
        
    },
    Carousel: function() {
        $('#owl-gallery').owlCarousel({
            items : 5,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
    },
    prettyphoto:function()
    {
       jQuery('#gallery a').attr('rel', 'prettyPhoto');
        jQuery("a[rel^='prettyPhoto']").prettyPhoto();
 
    },
    scrollingTo:function()
    {
         $(".menu").children("li:nth-child(3)").click(function(){
				$("body").scrollTo("#product", 600);
                				
				});
          $(".menu").children("li:nth-child(2)").click(function(){
				$("body").scrollTo("#features", 600);
                				
				});
          $(".menu").children("li:nth-child(1)").click(function(){
				$("body").scrollTo("#main", 600);
                				
				});
          $(".menu").children("li:nth-child(4)").click(function(){
				$("body").scrollTo("#gallery", 600);
                				
				});
                                
          $(".menu").children("li:nth-child(5)").click(function(){
				$("body").scrollTo("#impFeature", 600);
                				
				});
         $(".menu").children("li:nth-child(6)").click(function(){
				$("body").scrollTo("#slider", 600);
                				
				});
         $(".menu").children("li:nth-child(7)").click(function(){
				$("body").scrollTo("#footer", 600);
                				
				});
          
    },
    Scroll:function()
    {
        window.scrollReveal = new scrollReveal();
    }
    }
    
    $(function() {
     App.init();
    });    
    })(jQuery);

