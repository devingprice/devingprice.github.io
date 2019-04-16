
function slideinEls() {
    var els = $('.slide-in');
    if (els.length > 0 ) {
      els.each(function() {
        var el = $(this);
        console.log(el)
        new Waypoint({
          element: el,
          handler: function(){
            var el = this.element;
            TweenLite.to(
              // el, 1.5, {ease: Power4.easeOut, y: 0, opacity: 1, onComplete:function(){
              el, 1.5, {y: 0, opacity: 1, onComplete:function(){
              // el, 1.5, {ease: Power4.easeOut, y: 0, opacity: 1, onComplete:function(){
                if (el.parent('.statement-img').length > 0 ) {
                  el.parent('.statement-img').addClass('loaded');
                }
              }})
          },
          offset: '75%' // when top of el is 25% from the bottom of the viewport
        });
      })
    }
  }

var animateComponents = {
    animateParallax: function() {
        var items = $("[data-parallax]"),
            scrollY = window.scrollY;
        parallax(scrollY);

        function parallax(e) {
            //console.log('scrolled')
            $(items).each(function() {
                var item = $(this),
                    height = item.outerHeight(),
                    unit = item.attr("data-parallax");
                (window.outerHeight - height) / 2;
                
                var top = item.offset().top - $(window).scrollTop(),
                    offset = top * -unit * .04;

                    //console.log(item, 1.5, offset)
                TweenLite.to(item, 1.5, {
                    y: offset
                })
                //console.log(offset)
            })
        }

    },
    handleScroll: function(e) {
        e.preventDefault();
        var _this = e.data.obj;
        _this.animateParallax();
    },
    init: function() {
        var _this = this;
        $(window).on('scroll', {
            obj: _this
        }, _this.handleScroll);
    },
    destroy: function() {}
}


$(document).ready( function(){
    slideinEls();
    animateComponents.init();

    var waypoints = $('#old').waypoint(function(direction) {
        console.log(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })
})