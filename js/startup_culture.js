/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// jQuery Easing - Credit: http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*a-r)*Math.PI/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)+t:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*e*e*(((r*=1.525)+1)*e-r)+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?7.5625*u*e*e+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

jQuery(document).ready(function($) {
  var subnav = $('.subnav'), 
    body = $('body'),
    topMenuH = 0,
    scroolStop = 0, 
    popup = $('#popup'),
    leftImgHeight = $('.left-firstpage img').height(),
    windowW = $(window).width(),
    windowH = $(window).height();

  var marginTop = (windowH - leftImgHeight) < 0 ? (windowH - leftImgHeight) : 0
  $('.left-firstpage img').css('margin-top',marginTop);

  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-opened');
  });
  $('.main-mobile-nav-container').find('.has-sub a').off('click').on('click', function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('expanded');
  });
  var sumary = $('.startup-sumary');
  $(window).on('resize', function(){
    topMenuH = ($(window).width() >= 960) ? 76 : 0;
    scrollStop = ($(window).width() >= 960) ? 121 : 40;
    leftImgHeight = $('.left-firstpage img').height();
    windowH = $(window).height();
    var marginTop = (windowH - leftImgHeight) < 0 ? (windowH - leftImgHeight) : 0
    $('.left-firstpage img').css('margin-top',marginTop);

    if ($(window).width() < 960){
      $('#site-footer').find('ul li:first-child').off('click').on('click', function(e){
        $(this).closest('ul').toggleClass('expanded');
      });
      $('#sub-nav-trigger').off('click').on('click', function(e){
        e.preventDefault();
        $(this).closest('ul').toggleClass('expanded');
      });
    }
    $('.subnav').find('a:not(#sub-nav-trigger)').off('click').on('click', function(e){
      e.preventDefault();
      $('.subnav li').removeClass('active');
      $(this).closest('li').addClass('active');
      $('#sub-nav-trigger').trigger('click');
      var content = $(this).data('content'), 
        block = $('[data-block=' + content + ']').filter(':visible');
      if (block.length > 0){
        scrollTo(block);      
      }
    });
    // alert($(window).height());
  }).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    // *********************************************** subnav
    if (sumary.length > 0){
      if (scrollTop - 5 >= sumary.offset().top){
        if ($(window).width() < 960){
          $('.main-mobile-nav-container').attr('style', 'display:block');
        } else {
          $('.startup-wrapper header').attr('style', 'display:block');
        }
        //body.addClass('subnav-sticked');
      } else {
        if ($(window).width() < 960){
          $('.main-mobile-nav-container').attr('style', 'display:none');
        } else {
          $('.startup-wrapper header').attr('style', 'display:none');
        }
        //body.removeClass('subnav-sticked');
      }

      var blocks = $('[data-block]').filter(':visible');
      blocks.each(function(index, block){
          var currentBlock = $(block), 
              currentBlockTop = currentBlock.offset().top,
              currentBlockBottom = currentBlockTop + currentBlock.height();
          if (scrollTop + scrollStop >= currentBlockTop && scrollTop + scrollStop <= currentBlockBottom){
              var destinationBlock = currentBlock.attr('data-block');
              subnav.find('li').removeClass('active');
              subnav.find('[data-content=' + destinationBlock + ']').closest('li').addClass('active');
          }
      });      
    }
  }).trigger('resize');

  if (!localStorage.hidePopup){
    window.setTimeout(function(){
      popup.fadeIn(150);
    }, 2000);
  }

  popup.find('.overlay').on('click', function(){
    popup.fadeOut(300);
  });
  popup.find('.close-btn').on('click', function(){
    localStorage.setItem('hidePopup', 'true');
    popup.fadeOut(300);
    return false;
  });
  $('.scrolldown img').on('click',function(){
    $('html, body').animate({
      scrollTop: $('.startup-sumary').offset().top + 5
    }, 1000);
  });
});

window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// --------------- Overrides to get rounded corner is bar charts ------------------

c3.chart.internal.fn.additionalConfig = {
    bar_radiusAll: false,
    bar_radius: 4,
    tooltip_format_color: undefined,
    slider_show: false,
    slider_position: 100,
    gauge_angle: 150,        // default gauge arc angle
    gauge_needle_size: 8     // default gauge base circle diameter size
};

c3.chart.internal.fn.redrawArc = function (duration, durationForExit, withTransform) {
    var $$ = this, d3 = $$.d3, config = $$.config, main = $$.main, CLASS = $$.CLASS,
        mainArc;
    mainArc = main.selectAll('.' + CLASS.arcs).selectAll('.' + CLASS.arc)
        .data($$.arcData.bind($$));
    mainArc.enter().append('path')
        .attr("class", $$.classArc.bind($$))
        .style("fill", function (d) { return $$.color(d.data); })
        .style("cursor", function (d) { return config.interaction_enabled && config.data_selection_isselectable(d) ? "pointer" : null; })
        .style("opacity", 0)
        .each(function (d) {
            if ($$.isGaugeType(d.data)) {
                d.startAngle = d.endAngle = -1 * (Math.PI / 2);
            }
            this._current = d;
        });
    mainArc
        .attr("transform", function (d) { return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : ""; })
        .style("opacity", function (d) { return d === this._current ? 0 : 1; })
        .on('mouseover', config.interaction_enabled ? function (d) {
            var updated, arcData;
            if ($$.transiting) { // skip while transiting
                return;
            }
            updated = $$.updateAngle(d);
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.expandArc(updated.data.id);
            $$.api.focus(updated.data.id);
            $$.toggleFocusLegend(updated.data.id, true);
            $$.config.data_onmouseover(arcData, this);
        } : null)
        .on('mousemove', config.interaction_enabled ? function (d) {
            var updated = $$.updateAngle(d),
                arcData = $$.convertToArcData(updated),
                selectedData = [arcData];
            $$.showTooltip(selectedData, d3.mouse(this));
        } : null)
        .on('mouseout', config.interaction_enabled ? function (d) {
            var updated, arcData;
            if ($$.transiting) { // skip while transiting
                return;
            }
            updated = $$.updateAngle(d);
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.unexpandArc(updated.data.id);
            $$.api.revert();
            $$.revertLegend();
            $$.hideTooltip();
            $$.config.data_onmouseout(arcData, this);
        } : null)
        .on('click', config.interaction_enabled ? function (d, i) {
            var updated = $$.updateAngle(d),
                arcData = $$.convertToArcData(updated);
            if ($$.toggleShape) { $$.toggleShape(this, arcData, i); }
            $$.config.data_onclick.call($$.api, arcData, this);
        } : null)
        .each(function () { $$.transiting = true; })
        .transition().duration(duration)
        .attrTween("d", function (d) {
            var updated = $$.updateAngle(d), interpolate;
            if (! updated) {
                return function () { return "M 0 0"; };
            }
            //                if (this._current === d) {
            //                    this._current = {
            //                        startAngle: Math.PI*2,
            //                        endAngle: Math.PI*2,
            //                    };
            //                }
            if (isNaN(this._current.endAngle)) {
                this._current.endAngle = this._current.startAngle;
            }
            interpolate = d3.interpolate(this._current, updated);
            this._current = interpolate(0);
            return function (t) {
                var interpolated = interpolate(t);
                interpolated.data = d.data; // data.id will be updated by interporator
                return $$.getArc(interpolated, true);
            };
        })
        .attr("transform", withTransform ? "scale(1)" : "")
        .style("fill", function (d) {
            return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
        }) // Where gauge reading color would receive customization.
        .style("opacity", 1)
        .call($$.endall, function () {
            $$.transiting = false;
        });
    mainArc.exit().transition().duration(durationForExit)
        .style('opacity', 0)
        .remove();
    main.selectAll('.' + CLASS.chartArc).select('text')
        .style("opacity", 0)
        .attr('class', function (d) { return $$.isGaugeType(d.data) ? CLASS.gaugeValue : ''; })
        .text($$.hasType('gauge') ? function(val){
            return Math.round(val.value);
        }  : $$.textForArcLabel.bind($$))      // Hack
        //.text($$.textForArcLabel.bind($$))                // Original
        .attr("transform", $$.transformForArcLabel.bind($$))
        .style('font-size', function (d) { return $$.isGaugeType(d.data) ? Math.round($$.radius / 5) + 'px' : ''; })
        .transition().duration(duration)
        .style("opacity", function (d) { return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? 1 : 0; });
    main.select('.' + CLASS.chartArcsTitle)
        .style("opacity", $$.hasType('donut') || $$.hasType('gauge') ? 1 : 0);

    if ($$.hasType('gauge')) {
        var angle = config.gauge_angle,     // Hack
            radian = angle * (Math.PI/180);

        main.select('.c3-chart-arcs .c3-chart-arc').append('text')        // Hack
            .attr('class', 'gaugeUnit')
            .text('%')
            .attr('transform', function(data){
                var shift = 0;
                if(data.value === 100){
                    shift = 45;
                }else if(data.value > 9) {
                    shift = 35;
                }else {
                    shift = 20;
                }
                return 'translate('+shift+' -140)';
            });

        mainArc.enter().append('circle')
            .attr('class', 'needle-center')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', config.gauge_needle_size);

        /**
         * Helper function that returns the `d` value
         * for moving the needle
         **/
        var initPointerPos = function(radius) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
            centerX = 0;
            centerY = 0;
            var len = radius - 10;
            topX = centerX - len;
            topY = centerY;
            leftX = centerX;
            leftY = centerY - config.gauge_needle_size;
            rightX = centerX;
            rightY = centerY + config.gauge_needle_size;
            return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY+ " Z";
        };

        var rotateNeedle = function(angleDegree){
            return 'rotate('+angleDegree+' 0 0)';
        };

        mainArc.enter().append('path')
            .attr('class', 'needle')
            .attr('d', initPointerPos(this.radius))
            .attr('transform', rotateNeedle.call(this, 20));

        $$.arcs.select('.' + CLASS.chartArcsBackground)
            .attr("d", function () {
                var d = {
                    data: [{value: config.gauge_max}],
                    startAngle: -1 * (radian / 2),          // Hack
                    endAngle: radian / 2                    // Hack
                };
                return $$.getArc(d, true, true);
            });
        $$.arcs.select('.' + CLASS.chartArcsGaugeUnit)
            .attr("dy", ".75em")
            .text(config.gauge_label_show ? config.gauge_units : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMin)
            .attr("dx", -1 * ($$.innerRadius + (($$.radius - $$.innerRadius) / 2)) + "px")
            .attr("dy", "1.2em")
            .text(config.gauge_label_show ? config.gauge_min : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMax)
            .attr("dx", $$.innerRadius + (($$.radius - $$.innerRadius) / 2) + "px")
            .attr("dy", "1.2em")
            .text(config.gauge_label_show ? config.gauge_max : '');
    }
};

c3.chart.internal.fn.transformForArcLabel = function (d) {
    var $$ = this, CLASS = $$.CLASS,
        updated = $$.updateAngle(d), c, x, y, h, ratio, translate = "";
    if (updated && !$$.hasType('gauge')) {
        c = this.svgArc.centroid(updated);
        x = isNaN(c[0]) ? 0 : c[0];
        y = isNaN(c[1]) ? 0 : c[1];
        h = Math.sqrt(x * x + y * y);
        // TODO: ratio should be an option?
        ratio = $$.radius && h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0;
        translate = "translate(" + (x * ratio) +  ',' + (y * ratio) +  ")";
    }else {         // Hack
        translate = "translate(" + 0 +  ',' + -132 +  ")";
    }
    return translate;
};

c3.chart.internal.fn.updateAngle = function (d) {
    var $$ = this, config = $$.config, CLASS = $$.CLASS,
        found = false, index = 0,
        gMin = config.gauge_min, gMax = config.gauge_max, gTic, gValue;
    $$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
        if (! found && t.data.id === d.data.id) {
            found = true;
            d = t;
            d.index = index;
        }
        index++;
    });
    if (isNaN(d.endAngle)) {
        d.endAngle = d.startAngle;
    }
    if ($$.isGaugeType(d.data)) {
        var angle = config.gauge_angle,
            radian = angle * (Math.PI/180);
        gTic = (radian) / (gMax - gMin);
        gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : (gMax - gMin);
        d.startAngle = -1 * (radian / 2);
        d.endAngle = d.startAngle + gTic * gValue;
    }
    return found ? d : null;
};

c3.chart.internal.fn.expandArc = function (targetIds) {
    var $$ = this, interval, CLASS = $$.CLASS;

    // MEMO: avoid to cancel transition
    if ($$.transiting) {
        interval = window.setInterval(function () {
            if (!$$.transiting) {
                window.clearInterval(interval);
                if ($$.legend.selectAll('.c3-legend-item-focused').size() > 0) {
                    $$.expandArc(targetIds);
                }
            }
        }, 10);
        return;
    }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).each(function (d) {
        if (! $$.shouldExpand(d.data.id)) { return; }
        $$.d3.select(this).selectAll('path.c3-arc')
            .transition().duration(50)
            .attr("d", $$.svgArcExpanded)
            .transition().duration(100)
            .attr("d", $$.svgArcExpandedSub)
            .each(function (d) {
                if ($$.isDonutType(d.data)) {
                    // callback here
                }
            });
    });
};

c3.chart.internal.fn.unexpandArc = function (targetIds) {
    var $$ = this,  CLASS = $$.CLASS;

    if ($$.transiting) { return; }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).selectAll('path.c3-arc')
        .transition().duration(50)
        .attr("d", $$.svgArc);
    $$.svg.selectAll('.' + CLASS.arc)
        .style("opacity", 1);
};





c3.chart.internal.fn.sliderEnd = function(pos){
    var revScale = d3.scale.linear().domain(this.x.range()).range(this.x.domain());
    var val = revScale(pos.x);
    if(this.dragEnd) {
        this.dragEnd(val);
    }
}

c3.chart.internal.fn.initGrid = function () {
    var $$ = this, config = $$.config, CLASS = $$.CLASS;

    function dragMove(d) {
        var svgWidth = parseInt($('#pcwidget24 .chart svg')[0].getAttribute('width'));

        d3.select('g.c3-xgrid-slider circle')
            .attr("opacity", 0.6)
            .attr("cx", d.x = Math.max(0, Math.min(svgWidth-152, d3.event.x)))
            .attr("cy", d.y = 20);

        d3.select('line.c3-xgrid-slider')
            .attr('x1', d.x)
            .attr('y1', d.y+8)
            .attr('x2', d.x)
            .attr('y2', d.y+320);

        d3.selectAll('line.handle1')
            .attr('x1', d.x-3)
            .attr('x2', d.x-3);
        d3.selectAll('line.handle2')
            .attr('x1', d.x)
            .attr('x2', d.x);
        d3.selectAll('line.handle3')
            .attr('x1', d.x+3)
            .attr('x2', d.x+3);
    }

    function dragEnd() {
        var chart = this;
        var innerFn = function(d){
            d3.select('g.c3-xgrid-slider circle')
                .attr('opacity', 1);
            chart.sliderEnd(d);
        }
        return innerFn;
    }

    $$.grid = $$.main.append('g')
        .attr("clip-path", $$.clipPathForGrid)
        .attr('class', CLASS.grid);
    if (config.grid_x_show) {
        $$.grid.append("g").attr("class", CLASS.xgrids);
    }
    if (config.grid_y_show) {
        $$.grid.append('g').attr('class', CLASS.ygrids);
    }
    if (config.slider_show) {
        var drag = d3.behavior.drag()
            .origin(Object)
            .on("drag", dragMove)
            .on('dragend', _.bind(dragEnd,this)() );

        var range = this.x.range();
        range = range[1] - range[0];       // after this range is reduced by 60, hence considering that scenario
        var domain = this.x.domain();
        domain = domain[1] - domain[0];
        //var scale = d3.scale.linear().domain(this.x.domain()).range(this.x.range());
        if(domain === 0){
            return;
        }
        var x_pos = (range * this.config.slider_position)/domain;
        if(range > 1000) {
            x_pos = (x_pos * 1.01);
        }else {
            x_pos = (x_pos * 1.005);
        }

        var sliderPos = {x: x_pos, y : 20};

        var sliderG = $$.svg.selectAll('svg')
            .data([sliderPos])
            .enter()
            .append('g')
            .attr("class", 'c3-xgrid-slider')
            .attr("height", 100)
            .attr("widht", 770)
            .attr('transform', 'translate(130, -10)');

        /*var rect = sliderG.append('rect')
         .attr('y', 17)
         .attr("height", 5)
         .attr("width", 700)
         .attr("style","visibility:hidden")
         .attr('fill', '#C0C0C0');*/

        var line = sliderG.append('line')
            .attr('stroke', 'rgb(45,107,142)')
            .attr('stroke-width', 1)
            .attr('class', 'c3-xgrid-slider')
            .attr('x1', sliderPos.x)
            .attr('y1', sliderPos.y+8)
            .attr('x2', sliderPos.x)
            .attr('y2', sliderPos.y+320);

        var circle = sliderG.append("circle")
            .attr("r", 10)
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            })
            .attr("fill", "#2D6B8E")
            .attr('class', 'c3-xgrid-slider-knob')
            .call(drag);

        sliderG.append('line')
            .attr('class', 'handle1')
            .attr('style', 'stroke:white;stroke-width:1')
            .attr('x1', sliderPos.x-3)
            .attr('y1', 14)
            .attr('x2', sliderPos.x-3)
            .attr('y2', 25)
            .call(drag);

        sliderG.append('line')
            .attr('class', 'handle2')
            .attr('style', 'stroke:white;stroke-width:1')
            .attr('x1', sliderPos.x)
            .attr('y1', 14)
            .attr('x2', sliderPos.x)
            .attr('y2', 25)
            .call(drag);

        sliderG.append('line')
            .attr('class', 'handle3')
            .attr('style', 'stroke:white;stroke-width:1')
            .attr('x1', sliderPos.x+3)
            .attr('y1', 14)
            .attr('x2', sliderPos.x+3)
            .attr('y2', 25)
            .call(drag);
    }
    if (config.grid_focus_show) {
        $$.grid.append('g')
            .attr("class", CLASS.xgridFocus)
            .append('line')
            .attr('class', CLASS.xgridFocus);
    }
    $$.xgrid = d3.selectAll([]);
    if (!config.grid_lines_front) { $$.initGridLines(); }
};

c3.chart.internal.fn.isOrderDesc = function () {
    var config = this.config;
    if(this.isFunction(config.data_order)) {
        return false;
    }else {
        return config.data_order && config.data_order.toLowerCase() === 'desc';
    }
};

c3.chart.internal.fn.isOrderAsc = function () {
    var config = this.config;
    if(this.isFunction(config.data_order)) {
        return false;
    }else {
        return config.data_order && config.data_order.toLowerCase() === 'asc';
    }
};

c3.chart.internal.fn.generateDrawBar = function (barIndices, isSub) {
    var $$ = this, config = $$.config,
        getPoints = $$.generateGetBarPoints(barIndices, isSub);
    return function (d, i) {
        // 4 points that make a bar
        var points = getPoints(d, i),
            groups = config.data_groups,
            path = '';

        // switch points if axis is rotated, not applicable for sub chart
        var indexX = config.axis_rotated ? 1 : 0;
        var indexY = config.axis_rotated ? 0 : 1;
        var bar_radius = config.bar_radius;
        var bar_radiusAll = config.bar_radiusAll;
        if(groups && groups.length>0) {
            var lastGrps = [];
            groups.forEach(function(group){
                lastGrps.push(group[group.length-1]);
            });
            //if(points[0][1] < points[1][1] || points[0][0] > points[1][0] ) {
            //  bar_radius = bar_radius*-1;
            //}
            if((points[0][1] === points[1][1]) && (points[1][1]=== points[2][1]) && (points[2][1] === points[3][1]) ||
                (points[0][0] === points[1][0]) && (points[1][0]=== points[2][0]) && (points[2][0] === points[3][0])){
                path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                'L' + points[1][indexX] + ',' + (points[1][indexY]) + ' ' +
                'L' + (points[2][indexX]) + ',' + points[2][indexY] + ' ' +
                'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                'z';
                return path;
            }
            if(lastGrps.indexOf(d.id) > -1 && (config.data_order === null)) {
                if(config.axis_rotated) {
                    path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                    'L' + (points[1][indexX]-bar_radius) + ',' + points[1][indexY] + ' ' +
                    'Q' + points[1][indexX] + ',' + points[1][indexY] + ' ' + points[1][indexX] + ',' + (points[1][indexY]+bar_radius) + ' ' +
                    'L' + points[2][indexX] + ',' + (points[2][indexY]-bar_radius) + ' ' +
                    'Q' + points[2][indexX] + ',' + points[2][indexY] + ' ' + (points[2][indexX]-bar_radius) + ',' + points[2][indexY] + ' ' +
                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                    'z';
                }else {
                    path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                    'L' + points[1][indexX] + ',' + (points[1][indexY]+bar_radius) + ' ' +
                    'Q' + points[1][indexX] + ',' + points[1][indexY] + ' ' + (points[1][indexX]+bar_radius) + ',' + points[1][indexY] + ' ' +
                    'L' + (points[2][indexX]-bar_radius) + ',' + points[2][indexY] + ' ' +
                    'Q' + points[2][indexX] + ',' + points[2][indexY] + ' ' + points[2][indexX] + ',' + (points[2][indexY]+bar_radius) + ' ' +
                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                    'z';
                }
            }else {
                if(bar_radiusAll) {
                    path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                    'L' + (points[1][indexX]+bar_radius) + ',' + (points[1][indexY]) + ' ' +
                    'Q' + points[1][indexX] + ',' + points[1][indexY] + ' ' + (points[1][indexX]) + ',' + (points[1][indexY]+bar_radius) + ' ' +
                    'L' + (points[2][indexX]) + ',' + (points[2][indexY]-bar_radius) + ' ' +
                    'Q' + points[2][indexX] + ',' + points[2][indexY] + ' ' + (points[2][indexX]+bar_radius) + ',' + (points[2][indexY]) + ' ' +
                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                    'z';
                }else {
                    path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                    'L' + points[1][indexX] + ',' + (points[1][indexY]) + ' ' +
                    'L' + (points[2][indexX]) + ',' + points[2][indexY] + ' ' +
                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                    'z';
                }
            }
        }else {
            /*path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
             'L' + points[1][indexX] + ',' + (points[1][indexY]) + ' ' +
             'L' + (points[2][indexX]) + ',' + points[2][indexY] + ' ' +
             'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
             'z';*/
            if(config.axis_rotated) {
                path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                'L' + (points[1][indexX]-bar_radius) + ',' + points[1][indexY] + ' ' +
                'Q' + points[1][indexX] + ',' + points[1][indexY] + ' ' + points[1][indexX] + ',' + (points[1][indexY]+bar_radius) + ' ' +
                'L' + points[2][indexX] + ',' + (points[2][indexY]-bar_radius) + ' ' +
                'Q' + points[2][indexX] + ',' + points[2][indexY] + ' ' + (points[2][indexX]-bar_radius) + ',' + points[2][indexY] + ' ' +
                'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                'z';
            }else {
                path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
                'L' + points[1][indexX] + ',' + (points[1][indexY]+bar_radius) + ' ' +
                'Q' + points[1][indexX] + ',' + points[1][indexY] + ' ' + (points[1][indexX]+bar_radius) + ',' + points[1][indexY] + ' ' +
                'L' + (points[2][indexX]-bar_radius) + ',' + points[2][indexY] + ' ' +
                'Q' + points[2][indexX] + ',' + points[2][indexY] + ' ' + points[2][indexX] + ',' + (points[2][indexY]+bar_radius) + ' ' +
                'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
                'z';
            }
        }
        return path;
    };
};

c3.chart.internal.fn.getTooltipContent = function (d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this, config = $$.config, CLASS = $$.CLASS,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) { return name; },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        colorFormat = config.tooltip_format_color || function (color) { return color; },
        text, i, title, value, name, bgcolor;
    for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        if (! text) {
            title = titleFormat ? titleFormat(d[i].x) : d[i].x;
            text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);
        newColor = colorFormat(bgcolor, d, i);

        text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + newColor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";
    }
    return text + "</table>";
};

// ----------------------------- End -------------------------------




jQuery(document).ready(function($) {
  var columns = [
    ['x', 'Sr. Leadership Ratings', 'Culture / Value Ratings', 'Overall Rating'],
    ['pulse', 0, 0, 0],
    ['other', 0, 0, 0],
  ];
  var chart = c3.generate({
    bindto: '#chart-glassdoor',
    padding: {
      left: 96
    },
    data: {
      x: 'x',
      columns: columns,
      type: 'bar',
      labels: {
        format: function(v, id, i, j){
          return v;
        }
      }
    },
    tooltip: {
      show: false
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
      }, 
      y: {
        tick: {
          count: 4,
          format: function (d) {
            return parseInt(d);
          }
        }
      }
    },
    color: {
      pattern: ['#F37122', '#D843B4']
    },
    bar: {
      width: {
        ratio: 0.85
      }
    },
    legend: {
      show: false
    },
    grid: {
      y: {
          show: true
      }
    }
  });

  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop(), 
      windowH = $(window).height();
    if (scrollTop + windowH/2 > $('#chart-glassdoor').offset().top){
      var columns = [
        ['x', 'Sr. Leadership Ratings', 'Culture / Value Ratings', 'Overall Rating'],
        ['pulse', 3.7, 3.8, 3.5],
        ['other', 3.3, 2.9, 2.9],
      ];
      chart.load({columns: columns})
    }
  }).trigger('scroll');
});


jQuery(document).ready(function($) {
  var columns = [
    ['x', 'Transparency', 'Valued', 'Happiness'],
    ['all', 0, 0, 0],
    ['mgr', 0, 0, 0],
    ['mgr2', 0, 0, 0],
    ['emp', 0, 0, 0],
  ];
  var chart = c3.generate({
    bindto: '#chart-management',
    padding: {
      left: 20
    },
    data: {
      x: 'x',
      columns: columns,
      type: 'bar',
      labels: {
        format: function(v, id, i, j){
          return v;
        }
      }
    },
    tooltip: {
      show: false
    },
    axis: {
      x: {
        type: 'category',
      }, 
      y: {
        tick: {
          count: 4,
          format: function (d) {
            return parseInt(d);
          }
        }
      }
    },
    color: {
      pattern: ['#F37122', '#fff', '#D843B4', '#4B84D5']
    },
    bar: {
      width: {
        ratio: 0.8
      }
    },
    legend: {
      show: false
    },
    grid: {
      y: {
          show: true
      }
    }
  });

  d3.select('.chart-management').insert('div', '.chart-custom-legend').attr('class', 'legend')
  .selectAll('span')
  .data(['all', 'mgr2', 'emp'])
  .enter().append('span')
    .on('mouseover', function (id) {
        chart.focus(id);
    })
    .on('mouseout', function (id) {
        chart.revert();
    })
    .on('click', function (id) {
        chart.toggle(id);
    })
    .attr('data-id', function (id) { return id; })
    .html(function (id) { 
      if (id == 'all')
        return 'All'
      if (id == 'mgr2')
        return 'Management'
      if (id == 'emp')
        return 'Employees'
    })
    .append('i')
    .each(function (id) {
        d3.select(this).style('background-color', chart.color(id));
    });

  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop(), 
      windowH = $(window).height();
    if (scrollTop + windowH/2 > $('#chart-management').offset().top){
      var columns = [
        ['x', 'Transparency', 'Valued', 'Happiness'],
        ['all', 7, 7.2, 7.4],
        ['mgr2', 7.8, 7.9, 8.0],
        ['emp', 6.9, 7.0, 7.4],
      ];
      chart.load({columns: columns});
    }
  }).trigger('scroll');
});

jQuery(document).ready(function($) {
  var columns = [
    ['x', '0-10%', '10%-50%'],
    ['8 or 9 / 10', 0, 0],
    ['10 / 10', 0, 0]
  ];
  var chart = c3.generate({
    bindto: '#chart-culture',
    padding: {
      left: 50,
      bottom: 20
    },
    data: {
      x: 'x',
      columns: columns,
      type: 'bar',
      labels: {
        format: function(v, id, i, j){
          return v;
        }
      }
    },
    tooltip: {
      show: false
    },
    axis: {
      x: {
        type: 'category',
        label: 'Annual Unplanned Attrition'
      }, 
      y: {
        label: 'Respondants',
        tick: {
          count: 3,
          format: function (d) {
            return parseInt(d);
          }
        }
      }
    },
    color: {
      pattern: ['#F37122', '#4B84D5']
    },
    bar: {
      width: {
        ratio: 0.4
      }
    },
    legend: {
      show: false
    },
    grid: {
      y: {
        show: true
      }
    }
  });

  d3.select('.chart-culture').insert('div', '.chart-custom-legend').attr('class', 'legend')
  .selectAll('span')
  .data(['8 or 9 / 10', '10 / 10'])
  .enter().append('span')
    .on('mouseover', function (id) {
        chart.focus(id);
    })
    .on('mouseout', function (id) {
        chart.revert();
    })
    .on('click', function (id) {
        chart.toggle(id);
    })
    .attr('data-id', function (id) { return id; })
    .html(function (id) { return id; })
    .append('i')
    .each(function (id) {
        d3.select(this).style('background-color', chart.color(id));
    });

  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop(), 
      windowH = $(window).height();
    if (scrollTop + windowH/2 > $('#chart-culture').offset().top){
      var columns = [
        ['x', '0-10%', '10%-50%'],
        ['8 or 9 / 10', 59, 22],
        ['10 / 10', 21, 4]
      ];
      chart.load({columns: columns});
    }
  }).trigger('scroll');
});