$( document ).ready(function() {
 

 $('abbr').popover({
  html: true
 });

$('.collapse').collapse({
  toggle: false
});

$('#exptabs a').click(function (e) {
  disableAnchor($('#exptabs'));
  $(this).tab('show')
});

disableAnchor($('#technical, #creative'));

/* Disable anchor on highlighted item in the small nav */
function disableAnchor(elem){
  elem.find('a').click(function( event ) {
    if (window.event) {
          window.event.returnValue = false;
      }
      event.preventDefault();
  });
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*require(["one"], function (one) {
   console.log("Scripts have been loaded");
});*/

});

