$(document).ready(function () {
    $(".service-box__bg-image--private-training").hover(function() {
        $(".js--teal-header-disappear--private-training").css({"color":"#ffffff00","transition":"all 0.4s","background-color":"#ffffff00"});
        $(".js--white-header__private-training--appear").css({"color":"#ffffff","background-color":"#91ccd0e1","transition":"all 0.4s"});
        $(".js--white-paragraph__private-training--appear").css({"color":"#ffffff","transition":"all 0.4s"});
        $(".js--service-box__text-container--private-training--blur").css({"backdrop-filter":"blur(8px)","-webkit-backdrop-filter":"blur(8px)","transition":"all 0.4s"});


      }, function() {
        $(".js--teal-header-disappear--private-training").css({"color":"","transition":"all 0.4s","background-color":""});
        $(".js--white-header__private-training--appear").css({"color":"","background-color":"","transition":"all 0.4s"});
        $(".js--white-paragraph__private-training--appear").css({"color":"","transition":"all 0.4s"});
        $(".js--service-box__text-container--private-training--blur").css({"backdrop-filter":"","-webkit-backdrop-filter":"","transition":"all 0.4s"});
      });   
      
      $(".service-box__bg-image--nutrition-coach").hover(function() {
        $(".js--teal-header-disappear--nutrition-coach").css({"color":"#ffffff00","transition":"all 0.4s","background-color":"#ffffff00"});
        $(".js--white-header__nutrition-coach--appear").css({"color":"#ffffff","background-color":"#91ccd0e1","transition":"all 0.4s"});
        $(".js--white-paragraph__nutrition-coach--appear").css({"color":"#ffffff","transition":"all 0.4s"});
        $(".js--service-box__text-container--nutrition-coach--blur").css({"backdrop-filter":"blur(8px)","-webkit-backdrop-filter":"blur(8px)","transition":"all 0.4s"});

      }, function() {
        $(".js--teal-header-disappear--nutrition-coach").css({"color":"","transition":"all 0.4s","background-color":""});
        $(".js--white-header__nutrition-coach--appear").css({"color":"","background-color":"","transition":"all 0.4s"});
        $(".js--white-paragraph__nutrition-coach--appear").css({"color":"","transition":"all 0.4s"});
        $(".js--service-box__text-container--nutrition-coach--blur").css({"backdrop-filter":"","-webkit-backdrop-filter":"","transition":"all 0.4s"});

      });      

      $(".service-box__bg-image--dna-based").hover(function() {
        $(".js--teal-header-disappear--dna-based").css({"color":"#ffffff00","transition":"all 0.4s","background-color":"#ffffff00"});
        $(".js--white-header__dna-based--appear").css({"color":"#ffffff","background-color":"#91ccd0e1","transition":"all 0.4s"});
        $(".js--white-paragraph__dna-based--appear").css({"color":"#ffffff","transition":"all 0.4s"});
        $(".js--service-box__text-container--dna-based--blur").css({"backdrop-filter":"blur(8px)","-webkit-backdrop-filter":"blur(8px)","transition":"all 0.4s"});

      }, function() {
        $(".js--teal-header-disappear--dna-based").css({"color":"","transition":"all 0.4s","background-color":""});
        $(".js--white-header__dna-based--appear").css({"color":"","background-color":"","transition":"all 0.4s"});
        $(".js--white-paragraph__dna-based--appear").css({"color":"","transition":"all 0.4s"});
        $(".js--service-box__text-container--dna-based--blur").css({"backdrop-filter":"","-webkit-backdrop-filter":"","transition":"all 0.4s"});

      });    


      $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')


        nav.slideToggle(200); 

        if (icon.prop('name') == 'menu-outline') {
          icon.removeProp('name', 'menu-outline');
          icon.prop('name', 'close-outline');
          icon.css({'position':'relative','top':'4rem'});
      } else {
          icon.removeProp('name', 'close-outline');
          icon.prop('name', 'menu-outline');
          icon.css({'position':'','top':''})
      }


      });

 });