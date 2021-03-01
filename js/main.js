jQuery(document).ready(function(){
    
"use strict"
   $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,
  
});
    
$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    }
});
  
  $("#team-members").owlCarousel({
      items:3,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }
        }
      
  });

    
    
});