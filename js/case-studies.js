jQuery(document).ready(function(){
  console.log("document ready");
  var duration   = 1000,
      transition = 500;
  
  drawDonutChart('#response', $('#response').data('response'),110,110,"11px");
  drawDonutChart('#feedback',$('#feedback').data('feedback'),110,110,"11px");
  drawDonutChart('#recognition',$('#recognition').data('recognition'),110,110,"11px");

  function drawDonutChart(element, percent, width, height, text_y) {
    console.log('Draw donut chart');
    width = typeof width !== 'undefined' ? width : 110;
    height = typeof height !== 'undefined' ? height : 110;
    text_y = typeof text_y !== 'undefined' ? text_y : "-.10em";
  
    var dataset = {
          lower: calcPercent(0),
          upper: calcPercent(percent)
        },
        radius = Math.min(width, height) / 2,
        pie = d3.layout.pie().sort(null),
        format = d3.format(".0%");
  
    var arc = d3.svg.arc()
          .innerRadius(radius - 11)
          .outerRadius(radius);
    var arc1 = d3.svg.arc()
          .innerRadius(radius - 7)
          .outerRadius(radius - 4);
  
    var svg = d3.select(element).append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
          
    var path = svg.selectAll("path")
      .data(pie(dataset.lower))
      .enter().append("path")
      .attr("class", function(d, i) { return "color" + i })
      .attr("d", function(e, i){ i == 0 ? arc1 : arc})
      .each(function(d) { this._current = d});
  
    var text = svg.append("text")
          .attr("text-anchor", "middle")
          .attr("dy", text_y);

    if (typeof(percent) === "string") {
      text.text(percent);
    }
    else if($(element).data('text-type')) {
      $(window).scroll(function() {
        var hT = $('.recognition').offset().top,
            hH = $('.recognition').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
          path = path.data(pie([100])); // update the data
          path.transition().duration(0).attrTween("d", function (a) {
            var i  = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) {
              text.text('1x');
              text.attr("id", 'text-hide');
              $('#text-hide').fadeOut(200, function() {
                  text2 = svg.append('text').attr("text-anchor", "middle").attr("dy", text_y).attr("id", 'text-show');
                  text2.text('2x').hide;
                  $('#text-show').fadeIn(200);
              });  
              return arc1(i(t));
            };
          });
          $(window).off('scroll');
        }
      });
    }
    else {
      var progress = 0;
      
      $(window).scroll(function() {
        var hT = $('.recognition').offset().top,
            hH = $('.recognition').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
          path = path.data(pie(dataset.upper));
          path.transition().duration(duration).attrTween("d", function (a, index) {
            var i  = d3.interpolate(this._current, a);
            var i2 = d3.interpolate(progress, percent);
            this._current = i(0);
            return function(t) {
              text.text( format(i2(t) / 100) );
              return index == 0 ? arc(i(t)) : arc1(i(t));
            };
          });
          $(window).off('scroll');
        }
      });
    }
  };
  
  function calcPercent(percent) {
    return [percent, 100-percent];
  };
});
