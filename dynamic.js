$(document).ready(function(){
  $(".button").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
  
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
  });

  var $sections = $('section');  // all content sections
  var $navs = $('.button');  // all nav sections

  var topsArray = $sections.map(function() {
      return $(this).position().top - 250;  // make array of the tops of content
  }).get();                                 //   sections, with some padding to
                                            //   change the class a little sooner
  topsArray.push(10000);
  var len = topsArray.length;  // quantity of total sections
  var currentIndex = 0;        // current section selected

  var getCurrent = function( top ) {   // take the current top position, and see which
      for( var i = 0; i < len; i++ ) {   // index should be displayed
          if( top > topsArray[i] && topsArray[i+1] && top < topsArray[i+1] ) {
              return i;
          }
      }
  };

     // on scroll,  call the getCurrent() function above, and see if we are in the
     //    current displayed section. If not, add the "selected" class to the
     //    current nav, and remove it from the previous "selected" nav
  $(document).scroll(function(e) {
      var scrollTop = $(this).scrollTop();
      var checkIndex = getCurrent( scrollTop );
      if( checkIndex !== currentIndex ) {
          currentIndex = checkIndex;
          $navs.removeClass("active");
          $navs.eq( currentIndex ).addClass("active");
      }
  });
});