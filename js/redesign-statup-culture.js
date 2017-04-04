// HSL Colors
var colors = [
  [188, 79, 71],
  [180, 72, 47],
  [191, 63, 43],
  [198, 85, 26],
  [298, 27, 49],
  [273, 29, 41],
  [270, 28, 29],
  [25, 44, 36],
  [31, 100, 56],
  [48, 98, 50],
  [48, 98, 50]
],
el = document.getElementsByTagName('body')[0], // Element to be scrolled
length = colors.length,                        // Number of colors
height = Math.round(el.offsetHeight / length); // Height of the segment between two colors
    
function scroll() {
  var i = Math.floor(el.scrollTop / height),   // Start color index
      d = el.scrollTop % height / height,      // Which part of the segment between start color and end color is passed
      c1 = colors[i],                          // Start color
      c2 = colors[(i+1)%length],               // End color
      h = c1[0] + Math.round((c2[0] - c1[0]) * d),
      s = c1[1] + Math.round((c2[1] - c1[1]) * d),
      l = c1[2] + Math.round((c2[2] - c1[2]) * d);
  el.style['background-color'] = ['hsl(', h, ', ', s+'%, ', l, '%)'].join('');
}

el.onscroll = scroll;

jQuery(document).ready(function($) {
  $(window).trigger('scroll');
  var lazyImages = $('.lazy-load'), 
    imageOffsets = [];
  lazyImages.each(function(index, image){
    imageOffsets.push($(image).offset().top);
    $(image).on('load', function(){
      $(this).css('opacity', '1');
    });
  });
  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    var viewport = ($(window).height()*2) + scrollTop;
    $.each(imageOffsets, function(i, offset){
      if (offset < viewport){
        $(lazyImages[i]).attr('src', $(lazyImages[i]).attr('data-src'));
      }
    });
  });
});