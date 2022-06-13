// jQuery
$(document).ready(function() {
  // -- header links
  $(function() {
    $(".header-burger").on("click", function() {
      $(".header").toggleClass("toggle-header");
      $("body").toggleClass("body-overflow-hidden");
  
      // change background-color burger
      if($(".header").hasClass("toggle-header")) {
        $(".header-burger span").css("background", "#c4c4c4");
      } else {
        $(".header-burger span").css("background", "");
      }
    });
  });
  // akhir -- header links

  // -- scroll on top
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 40) {
        $(".top-button").fadeIn();
      } else {
        $(".top-button").fadeOut();
      }
    });
  
    $(".top-button").on("click", function() {
      $("html, body").animate({
        scrollTop: 0
      }, 500);
    });
  });
  // akhir -- scroll on top
  
  // -- dark-light mode
  $(function() {
    $(".button-light-mode").on("click", function() {      
      $(this).toggleClass("dark-mode");
  
      // background
      $("body").toggleClass("dark-body");
  
      // toggle icon
      if($(this).hasClass("dark-mode")) {
        $(".fas.fa-sun").attr("class", "fas fa-moon");
        $(".light-desc").text("Dark Mode");
      } else {
        $(".fas.fa-moon").attr("class", "fas fa-sun");
        $(".light-desc").text("Light Mode");
      }
    });
  });
  // akhir -- dark-light mode

  // -- toggle font-size
  $(function() {
    $(".button-fontsize").on("click", function() {
      $(this).toggleClass("fontsize-icon-active");
      $("html").toggleClass("html-large-fontsize");
    })
  });
  // akhir -- toggle font-size
});