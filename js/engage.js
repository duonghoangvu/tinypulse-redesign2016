jQuery(document).ready(function($) {
  function showNextBlock(elementClass, element) {
    $(elementClass).removeClass('active');
    nextBlock = $(element).next(elementClass);
    if(nextBlock.length == 1){
      nextBlock.addClass('active');
    }else{
      $(elementClass).first().addClass('active');
    }
  }

  function showPrevBlock(elementClass, element) {
    $(elementClass).removeClass('active');
    prevBlock = $(element).prev(elementClass);
    if(prevBlock.length == 1){
      prevBlock.addClass('active');
    }else{
      $(elementClass).last().addClass('active');
    }
  }

  $(".overview .block-content").swipe({
    swipe:function (event, direction, distance, duration, fingerCount) {},
    fingers:$.fn.swipe.fingers.ALL,
    triggerOnTouchEnd:false,
    threshold:150
  }).on("click",function(){
    showNextBlock('.overview .block-content', this);
  });

  $(".how-it-works .block-content").on("click",function(){
    showNextBlock('.how-it-works .block-content', this);
  });

  //function speakerMobileAction(){
    //$(".why .speaker").on("click",function(){
      //showNextBlock('.why .speaker', this);
    //});
  //}
  //$(window).on('resize', function(){
    //if ($(window).width() < 960){
      //speakerMobileAction();
    //} else {
      //$(".why .speaker").on("click",function(){});
    //}
  //});
  //if ($(window).width() < 960){
    //speakerMobileAction();
  //} else {
    //$(".why .speaker").on("click",function(){});
  //}
  //$('.prev-speaker').click(function(){
    //showPrevBlock('.speaker', $(this).parent());
  //});
  //$('.next-speaker').click(function(){
    //showNextBlock('.speaker', $(this).parent());
  //});
  $(".overview-block").click(function(e){
    $(".overview-block").removeClass('selected');
    $(this).addClass('selected');
  });
  $(".overview-block").hover(function(){
    $('.overview-img').attr('style', 'display: none');
    $(this).find('.overview-img').attr('style', 'display: block; transition: all ease .8s;');
    $('.overview-block').not('.selected').find('.title').attr('style', 'color: #000;');
    $(this).find('.title').attr('style', 'color: #1C94EE;');
  });
  $(".overview-content").mouseleave(function(e){
    $('.overview-img').attr('style', 'display: none');
    $('.overview-block').not('.selected').find('.title').attr('style', 'color: #000;');
    $(this).find('.overview-block.selected .overview-img').attr('style', 'display:block; transition: all ease .8s;');
  });
  $(".hiw-icon").click(function(e){
    $(".hiw-content").removeClass('selected');
    $(this).parent().addClass('selected');
  });
  $(".hiw-content").hover(function(){
    $('.hiw-content .block-content').attr('style', 'display: none');
    $('.hiw-content').not('.selected').find('.icon').attr('style', 'background-position-y: 0;');
    $(this).find('.block-content').attr('style', 'display:block;transition: all .3s;');
    $(this).find('.icon').attr('style', 'background-position-y: -117px;');
  });
  $(".hiw-icons").mouseleave(function(e){
    $('.hiw-content .block-content').attr('style', 'display: none');
    $('.hiw-content').not('.selected').find('.icon').attr('style', 'background-position-y: 0;');
    $(this).find('.hiw-content.selected .block-content').attr('style', 'display:block;transition: all .3s;');
  });


  var defaults = {
    width: 'auto',
    height: 200,
    transitionDuration: 500,
    autoPlayDuration: 5000,
    autoPlayPaused: false,
    autoPlay: true
  },
  settings, container, slidesContainer, slides, slideW, slideH, totalSlides,
  currentSlide = 1;
  var cloneSlides = function () {
    slides.first().clone().addClass('first-slide').appendTo(slidesContainer);
    slides.last().clone().addClass('last-slide').prependTo(slidesContainer);
  },
  prepareStage = function () {
    slidesContainer.css({
      'width': slideW * totalSlides
    });

    slides.css({
      'width': slideW
    });
  },
  jumpToSlide = function (pos) {
    currentSlide = pos || currentSlide;
    var distance = -(currentSlide * slideW);

    slidesContainer.transit({
      x: distance
    }, 0);
  },
  activeIndicator = function () {
    var activeSlide;
    if (currentSlide == 0) {
      activeSlide = 4;
    } else if (currentSlide == 4) {
      activeSlide = 1;
    } else {
      activeSlide = currentSlide;
    }
    $('.indicator').removeClass('active');
    $('#indicator-' + activeSlide).addClass('active');
  },
  moveStage = function () {
    var distance = -(currentSlide * slideW);
    slidesContainer.transit({
      x: distance
    }, settings.transitionDuration, function () {
      container.removeClass('nav-blocked touch-blocked');
      if (currentSlide == totalSlides - 1) {
        jumpToSlide(1);
      }
      if (currentSlide == 0) {
        jumpToSlide(totalSlides - 2);
      }
    });
    activeIndicator();
  },
  setupControls = function () {
    // navigation
    var slideNav = $('.slider-nav');

    slideNav.find('span').on('click', function () {
      container.addClass('nav-blocked');
      if ($(this).hasClass('prev')) {
        currentSlide -= 1;
      } else {
        currentSlide += 1;
      }
      moveStage();
    });

    // indicators
    var slideIndicators = $('.indicators-wrapper');
    for (var i = 1; i < totalSlides - 1; i++) {
      var helperClass = (i == 1) ? 'active' : '';
      var indicatorMarkup = $('<span class="indicator ' + helperClass + '" id="indicator-' + i + '" data-slide-pos="' + i + '"></span>');
      slideIndicators.append(indicatorMarkup);
    }

    slideIndicators.find('span').on('click', function (e) {
      e.preventDefault();
      currentSlide = parseInt($(this).data('slidePos'));
      moveStage();
    });
  },
  initTouchEvents = function () {
    var longTouch = false,
      touchStartX, touchMoveX, moveX;

      slidesContainer.on('touchstart', function (event) {
        settings.autoPlayPaused = true;
        window.setTimeout(function () {
          longTouch = true;
        }, 250);
        touchStartX = event.originalEvent.touches[0].pageX;
      });

      slidesContainer.on('touchmove', function (event) {
        touchMoveX = event.originalEvent.touches[0].pageX;
        moveX = currentSlide * slideW + (touchStartX - touchMoveX);
        if (Math.abs(touchStartX - touchMoveX) > 5) {
          event.preventDefault();
        }
        slidesContainer.css('transform', 'translate(-' + moveX + 'px,0,0)');
      });
      slidesContainer.on('touchend', function (event) {
        container.addClass('touch-blocked');
        settings.autoPlayPaused = false;
        var absMove = Math.abs(currentSlide * slideW - moveX);
        if (absMove > slideW / 6 || longTouch === false) {
          if ((moveX > currentSlide * slideW)) {
            currentSlide++;
          } else if ((moveX < currentSlide * slideW)) {
            currentSlide--;
          }
        }
        moveStage();
      });
  },
  init = function (element) {
    container = element;
    slidesContainer = element.find('.speaker-container');
    slides = element.find('.speaker');
    cloneSlides();
    slides = element.find('.speaker');
    slideW = settings.width;
    slideH = settings.height;
    totalSlides = slides.length;
    prepareStage();
    setupControls();
    jumpToSlide();

    $(window).on('resize', function () {
      window.setTimeout(function () {
        slideW = $(window).width() < 960 ? $(window).width() : settings.width;
        slideH = (settings.height == 'auto') ? $(window).height() : settings.height;

        prepareStage();
        jumpToSlide();
      }, 200);
    }).trigger('resize');
  }
  $.fn.xsSlider = function (options) {
    settings = $.extend(true, defaults, options);
    init(this);
  }
  $('.speakers').xsSlider({
    width: 960,
    height: 'auto'
  });
  if($(window).width() < 960){
    $('.speaker').click(function(){
      currentSlide += 1;
      moveStage();
    });
  }
});
