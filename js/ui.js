var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var runToast = false;

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null){
    return null;
  }
  else {
    return decodeURI(results[1]) || 0;
  }
}

if ($.datepicker) {
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    // changeYear: true,
    // changeMonth: true,
    // yearSuffix: "년",
    dayNamesMin: ['일','월','화','수','목','금','토'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    showOtherMonths: true
  });
}

var GUI = window.GUI || (function(){
  return {
    init: function(){
      GUI.baseUI($(document));

      AOS.init({ // https://github.com/michalsnik/aos#1-initialize-aos
        duration: 600,
        once: true,
      });
      
      if ($('.menu-wrap').length) {
        GUI.gnbMenu();
      }
    },
    baseUI: function($this){
      var _ = $this;
      var $win = $(window);
      var $header = _.find('#header');

      var inputUI = _.find('.input-base');
      var inputCountUI = _.find('.input-wrap.w-count');
      var calendarUI = _.find('.datepicker');
      var textareaCountUI = _.find('.textarea-base');
      var selectUI = _.find(".select-base");
      var csSelectUI = _.find('.select-box');
      var tabUI = _.find('.tab-base');
      var controlUI = _.find('.counter-base');
      var popupUI = _.find('.popup-wrap');
      var csPopupUI = _.find('.cs-popup-wrap');
      var topUI = _.find('.btn-top');

      if (topUI.length) {
        topUI.on('click', function(){
          $('html, body').stop().animate({ scrollTop: 0 }, 150);
        });
      }

      if (inputUI.length) {
        // inputUI.each(function(){
        //   if ($(this).val().length) {
        //     $(this).closest('.input-wrap').find('.btn-del').show();
        //   }
        // })
        // inputUI.on('keyup', function(){
        //   if ($(this).val().length) {
        //     $(this).closest('.input-wrap').find('.btn-del').show();
        //   } else {
        //     $(this).closest('.input-wrap').find('.btn-del').hide();
        //   }
        // });
        // inputUI.closest('.input-wrap').find('.btn-del').on('click', function(){
        //   $(this).prev('.input-base').val('').focus();
        // })
      }
      if (inputCountUI.length) {
        inputCountUI.each(function(){
          var $input = $(this).find('.input-base');
          var $inputCount = $(this).find('.tx-count'); 
          var $inputTotal = Number($inputCount.text().split('/')[1]);
          var inputMemo = null;

          $input.on('keyup', function(){
            if ($(this).val().length > $inputTotal) {
              $(this).val(inputMemo)
            } else {
              inputMemo = $(this).val();
            }
            $inputCount.find('em').text($(this).val().length);
          })
        })
      }
      if (calendarUI.length) {
        _.find('.datepicker').datepicker({
          showOn:"button",
          // buttonImage: "images/icons/icon-calendar.png", // type 1
          buttonImage: "images/icons/input_date_ico.png", // type 2

          // type 2에서 추가
          beforeShow: function() {
            $('#ui-datepicker-div').addClass('s-datepicker');
          }
        });
      }
      if (textareaCountUI.length) {
        textareaCountUI.each(function(){
          var $textarea = $(this).find('textarea');
          var $textareaCount = $(this).find('.tx-count');
          var $textareaTotal = Number($textareaCount.text().split('/')[1]);
          var textareaMemo = null;

          $textarea.on('keyup', function(){
            if ($(this).val().length > $textareaTotal) {
              $(this).val(textareaMemo)
            } else {
              textareaMemo = $(this).val();
            }
            $textareaCount.find('em').text($(this).val().length);
          })
        })
      }

      if (selectUI.length) {
        selectUI.find('select').each(function(){
          if ($(this).closest('.select-base').hasClass('disabled')) {
            return true;
          }
          if ($(this).find('option:eq(0)').attr('value') === undefined) {
            $(this).find('option:eq(0)').val(0);
          }
          if (parseInt($(this).val()) === 0) {
            $(this).closest('.select-base').removeClass('active');
          } else {
            $(this).closest('.select-base').addClass('active');
          }
        });
        selectUI.find('select').on("change",function(){
          if ($(this).closest('.select-base').hasClass('disabled')) {
            return true;
          }
          if (parseInt($(this).val()) === 0) {
            $(this).closest('.select-base').removeClass('active');
          } else {
            $(this).closest('.select-base').addClass('active');
          }
          $(this).prev().html($(this).find("option:selected").text());
        }).prev().html(function() {
          return $(this).next().find("option:selected").text();
        });
      }
      if (csSelectUI.length) {
        csSelectUI.each(function(){
          if ($(this).data('active')) {
            var activeIndex = $(this).find('li').eq($(this).data('active') - 1);
            if (activeIndex.text() !== '선택') {
              $(this).addClass('active');
            }
            activeIndex.addClass('on');          
            if (activeIndex.text() === '') {
              return;
            } else {
              $(this).find('.value').text(activeIndex.text());
            }
          }
        })
        csSelectUI.find('.value').on('click', function(e){
          e.preventDefault();
          var $target = $(this).closest('.select-box');
          if (!$target.hasClass('on')) {
            $('.select-box').removeClass('on');
            $target.addClass('on');
          } else {
            $target.removeClass('on');
          }
        });
        csSelectUI.find('li a').on('click', function(e){
          e.preventDefault();
          if ($(this).text() === '선택') {
            $(this).closest('.select-box').removeClass('active');
          } else {
            $(this).closest('.select-box').addClass('active');
          }
          $(this).closest('li').addClass('on');
          $(this).closest('li').siblings().removeClass('on');
          var $target = $(this).closest('.select-box');
          $target.data('active', parseInt($(this).closest('li').index()) + 1);
          $target.find('.value:not(.fixed)').text($(this).text());
          $target.removeClass('on');
        })
      }

      if (tabUI.length) {
        tabUI.each(function(){
          var target = $(this).find('li.on').find('a').attr('href');
          $(target).show();
        })
        tabUI.find('a').on('click', function(e){
          e.preventDefault();
          var target = $(this).attr('href');
          $(this).closest('li').addClass('on');
          $(this).closest('li').siblings().removeClass('on');
          $(target).show();
          $(target).siblings().hide();
        });
      }

      if (controlUI.length) {
        controlUI.each(function(){
          var $input = $(this).find('input'),
              $minus = $(this).find('.btn-minus'),
              $plus = $(this).find('.btn-plus');
          var min = $(this).data('min'),
              max = $(this).data('max');

          $minus.on('click', function(){
            if (min) {
              if ($input.val() > min) $input.val(Number($input.val()) - 1);
            } else {
              if ($input.val() > 0) $input.val(Number($input.val()) - 1);
            }
          });

          $plus.on('click', function(){
            if (max) {
              if ($input.val() < max) $input.val(Number($input.val()) + 1);
            } else {
              $input.val(Number($input.val()) + 1);
            }
          });
        });
      }

      if (popupUI.length) {
        var posY = null;
        var magnificPopupConfiguration = function() {
          return {
            beforeOpen: function() {
              posY = window.pageYOffset;
              $('html').css('overflow', 'hidden');
              $('body').css({'position': 'fixed', 'top': -posY});
            },
            resize: function() {
              if ($('.fix-bottom').length) {
                var $coWrap = $('.fix-bottom .popup-wrap .con-wrap');
                if ($coWrap.hasClass('ws')) {
                  $coWrap.children('div').css('max-height', $win.height() - 202 + 'px');
                }
                if ($coWrap.outerHeight() > $win.height() / 3 * 2.3) {
                  $coWrap.addClass('ws');
                  $coWrap.children('div').css('max-height', $win.height() - 202 + 'px');
                }
              }
            },
            open: function() {},
            beforeClose: function() {
              $('html').css('overflow', '');
              $('body').css({'position': '', 'top': ''});
              window.scrollTo(0, posY);
            }
          }
        }
  
        //팝업 (공통) - jquery magnific 팝업
        _.find('.btn-base.disabled, .all-view.disabled, .add-mylist.disabled').on('click', function (e) { // 비활성화 버튼
          e.preventDefault();
        });
        _.find('.btn-popup-modal a').magnificPopup({
          type: 'inline',
          preloader: false,
          modal: false
        });
        $(document).on('click', '.b-mfp-close', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        
        _.find('.btn-popup-anim-1:not(.disabled) a, a.btn-popup-anim-1:not(.disabled)').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'mfp-zin'
        });
        _.find('.btn-popup-anim-2:not(.disabled) a').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'mfp-slide-b'
        });
        _.find('.btn-popup-anim-3:not(.disabled) a, a.btn-popup-anim-3:not(.disabled)').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'fade-slideup fix-bottom',
          callbacks: magnificPopupConfiguration()
        });

		$('.popup-wrap').each(function(){
          if ($(this).data('width')) {
            $(this).css('width', $(this).data('width'));
          }
        });
      }

      if (csPopupUI.length) {
        csPopupUI.find('.mfp-close').on('click', function(){
          var target = $(this).closest('.cs-fullpage').attr('id');
          closeCSPopup();
          if (target === 'popup-find-address') $('.mfp-wrap').show(); // 2중 풀페이지 팝업 시
        });
        $('.cs-popup-dimm').on('click', function(){
          var target = $(this).next('.cs-popup-wrap').attr('id');
          if (target === 'popup-find-address') $('.mfp-wrap').show(); // 2중 풀페이지 팝업 시
          closeCSPopup();
        });

        resizeScrollFrame($win);
        
        $win.on('resize', function(){
          resizeScrollFrame($win);
        });
      }

      _.on('click', function(e){
        if (csSelectUI.length) {
          if (!$(e.target).closest('.select-box .value, .select-box ul').length) {
            csSelectUI.removeClass('on');
          }
        }
      });
    },
    gnbMenu: function(){
      var $areaMenu = $('.menu-wrap');

      $(window).on('load resize', function(){
        $('.m-container').each(function(){
          var frameH = $(window).height() - 62;
          var $frame = $(this).children('div');
          $frame.css({ 'height': frameH });
          if ($frame.find('.m-inner').outerHeight() > frameH) {
            $(this).addClass('is-scroll');
          } else {
            $(this).removeClass('is-scroll');
          }
        });
      });

      $('.fm-wrap li.menu a').on('click', function(e){
        e.preventDefault();
        openGNB();
      });

      $areaMenu.find('.btn-back').on('click touchstart', function(e){
        e.preventDefault();
        closeGNB();
      });
    },
    mainScroll: function(){
      var $doc = $(document), $win = $(window);
      var didScroll ,lastScrollTop = 0, delta = 5;
      var $fmWrap = $('.fm-wrap'), $top = $('.btn-top'), $header = $('#header');

      $header.addClass('on');

      $win.on('scroll', function(){
        didScroll = true;
      });
      
      setInterval(function(){
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250)

      function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > $fmWrap.outerHeight()){ // Scroll Down
          $fmWrap.addClass('on');
          $top.addClass('on');
          $header.addClass('on');
        } else {
          if(st + $win.height() < $doc.height()) { // Scroll Up
            $fmWrap.removeClass('on');
            $top.removeClass('on');
            $header.removeClass('on');
          }
        }
        if (st === 0) $header.addClass('on');
        lastScrollTop = st;
      }

      $top.on('click', function(){
        $('html, body').stop().animate({ scrollTop: 0 }, 150);
      });
    },
    toastUI: function(text, bottom, zIndex) {      
      if (!runToast) {
        runToast = true;
        var $toast = $('.toast-area');
        if (zIndex) $toast.css('z-index', zIndex);        
        $toast.stop().css('display', 'block');
        $toast.append('<p class="txt">'+ text +'</p>');
        setTimeout(function(){
          if (bottom) {
            $toast.css({ bottom: bottom });
          }        
          $toast.addClass('on');
          setTimeout(function(){
            $toast.attr('style', null);
            $toast.removeClass('on');
            setTimeout(function(){
              $toast.stop().css('display', 'none');
              $toast.find('.txt').remove();
              runToast = false;
            }, 500);
          }, 2000);
        }, 150);
      }
    },
    checkAllUI: function(selector, mode, callback){
      var chkGroup = null;
      var chkInput = null;
      var allChecked = null;
    
      if (mode === 'terms') {
        chkGroup = $(selector).closest('.chk-list');
      } else if (mode === 'table') {
        chkGroup = $(selector).closest('.tb-list');
      } else {
        chkGroup = $(selector).closest('.chk-group-area');  
      }
      chkInput = chkGroup.find('.chk-base input');
    
      $(selector).on('click', function(){
        chkInput.prop('checked', $(this).is(":checked"));
        if (typeof callback === 'function') {
          callback($(this).is(":checked"));
        }
      });
    
      chkInput.on('change', function(){
        if (mode === 'table') {
          allChecked = chkGroup.find('tbody .chk-base input:checked').length === chkGroup.find('tbody .chk-base input').length;
        } else {
          allChecked = chkGroup.find('li:not(.total) .chk-base input:checked').length === chkGroup.find('li:not(.total) .chk-base input').length;
        }
        $(selector).prop('checked', allChecked);
        callback(allChecked);
      });
    },
    onSelectTxtDay: function($this, dateText, inst){
      var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
        year = sDate.getFullYear(),
        month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
        day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
        dayName = sDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[sDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
        txt = year + '-' + month + '-' + day;
      return txt;
    }
  }
}());

$(function(){
  GUI.init();
})

// 이중 팝업을 열고 닫기 위한 함수
var openCSPopup = function(id) {
  if (id === 'popup-find-address') $('.mfp-wrap').hide(); // 2중 풀페이지 팝업 시
  $('.cs-popup-dimm#' + id + '-dimm, .cs-popup-wrap#' + id).fadeIn(200);
};
var closeCSPopup = function(id) {
  if (id) {
    if (id === 'popup-find-address') $('.mfp-wrap').show(); // 2중 풀페이지 팝업 시
    $('.cs-popup-dimm#' + id + '-dimm, .cs-popup-wrap#' + id).fadeOut(200);
  } else {
    $('.cs-popup-dimm, .cs-popup-wrap').fadeOut(200);
  }  
}

// 이중 팝업 높이 재계산을 위한 함수
var resizeScrollFrame = function(win){
  var $csBottom = $('.cs-popup-wrap.cs-bottom');
  var $csFullpage = $('.cs-popup-wrap.cs-fullpage');
  if ($csBottom.length) {
    var $coWrap = $csBottom.find('.con-wrap');
    if ($coWrap.hasClass('ws')) {
      $coWrap.children('div').css('max-height', win.height() - 202 + 'px');
    }
    if ($coWrap.outerHeight() > win.height() / 3 * 2) {
      $coWrap.addClass('ws');
      $coWrap.children('div').css('max-height', win.height() - 202 + 'px');
    }
  }
  if ($csFullpage.length) {
    var $coWrap = $csFullpage.find('.con-wrap');
    if ($coWrap.find('.m-scrollbar').length || $coWrap.find('.o-scrollbar').length) {
      $coWrap.children('div.m-scrollbar').css('height', win.height() - 82 + 'px');
      $coWrap.children('div.o-scrollbar').css('height', win.height() - 82 + 'px');
    }

    setTimeout(function(){
      if ($coWrap.find('.inner').outerHeight() > win.height() - 62) {
        $csFullpage.addClass('is-scroll');
      } else {
        $csFullpage.removeClass('is-scroll');
      }
    }, 300);
  }
};

// 메뉴 활성화, 비활성화를 위한 변수 및 함수
var rememberY = null;
var openGNB = function() {
  $('.menu-wrap').addClass('on');
  $('.menu-dimm').fadeIn(150);
  $('.m-section#menu-area').addClass('on');
  rememberY = window.pageYOffset;
  $('html').css('overflow', 'hidden');
  $('body').css({'position': 'fixed', 'top': -rememberY});
}
var closeGNB = function(){
  $('.menu-wrap').removeClass('on');
  $('.menu-dimm').fadeOut(150);
  $('html').css('overflow', '');
  $('body').css({'position': '', 'top': ''});
  window.scrollTo(0, rememberY);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getOptions(id, closeOnBgClick) {
  return {
    items: {
      src: id,
      type: 'inline',
    },
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-zin',
    closeOnBgClick: closeOnBgClick ?? true,
  };
}

function getOptions2(id, closeOnBgClick) {
  return {
    items: {
      src: id,
      type: 'inline',
    },
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'fade-slideup fix-bottom',
    closeOnBgClick: closeOnBgClick ?? true,
  };
}

// 사용예시 : destroySwiperMaker({$name:"슬라이드 이름", $media: "분기점"})
var destroySwiperMaker = function({ $name, $media, $speed = 2000, $perView = 'auto', $scroll = false}) {
  // console.log(typeof $name, typeof $media, typeof $scroll)
  // console.log($name, $media, $scroll)
  var timer = null;
  var windowWidth = $(window).innerWidth();
  var destroySwiper = undefined;

  
  function initdestroySwiper() {
      if($scroll){ //스크롤 사용시
          if (windowWidth < $media && destroySwiper == undefined) {
              
              destroySwiper = new Swiper(`.${$name} .swiper_common`, {
                  slidesPerView: $perView,	
                  observer : true,
                  observeParents : true,
                  loop: false,
                  scrollbar: {
                      el: `.${$name} .swiper-scrollbar`,
                      draggable: true,
                  },			
              })
          } else if (windowWidth >= $media && destroySwiper != undefined) {
              destroySwiper.destroy();
              destroySwiper = undefined;
          }
      }else{
          if (windowWidth < $media && destroySwiper == undefined) {
              destroySwiper = new Swiper(`.${$name} .swiper_common`, {
                  slidesPerView: $perView,	
                  observer : true,
                  observeParents : true,
                  loop: true,
                  autoplay: { 
                      delay: $speed, 
                      disableOnInteraction: false, 
                  },					
                  pagination: {el: `.${$name} .swiper-pagination`,clickable: true,},
                  navigation: {
                      nextEl: `.${$name} .swiper-button-next`,
                      prevEl: `.${$name} .swiper-button-prev`,
                  },
              })
          } else if (windowWidth >= $media && destroySwiper != undefined) {
              destroySwiper.destroy();   
              destroySwiper = undefined;
          }
      }
  }
  initdestroySwiper();

  $(window).on('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
          windowWidth = $(window).innerWidth();
          initdestroySwiper();
      }, 100)
  });		
}