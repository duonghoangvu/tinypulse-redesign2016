// HSL Colors
var colors = [
  [238, 36, 46],
  [168, 90, 44],
  [55, 99, 60],
  [1, 89, 65]
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