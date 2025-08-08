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

      $('.btn-quick-area .quick').on('click', function(e){
        e.preventDefault();
        if (!$(this).closest('.btn-quick-area').hasClass('on')) {
          $(this).closest('.btn-quick-area').addClass('on');
        } else {
          $(this).closest('.btn-quick-area').removeClass('on');
        }
      });
      $('.sub-tit .btn-info').on('click', function(e){
        $(this).next('.info-modal').show();
      });
      $(document).on('click', function(e){
        if (!$(e.target).closest('.sub-tit .btn-info, .info-modal').length) {
          $('.info-modal').hide();
        }
      });

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

function customSbox() {
  var x, selElmnt, a, b, c, i, j;
  x = $(".custom-select");

  x.each(function() {
    selElmnt = $(this).find("select")[0];
    a = $("<div>").addClass("select-selected").html(selElmnt.options[selElmnt.selectedIndex].innerHTML);
    $(this).append(a);

    b = $("<div>").addClass("select-items select-hide");

    for (j = 0; j < selElmnt.length; j++) {
      c = $("<div>").html(selElmnt.options[j].innerHTML);
      c.on("click", function(e) {
        var s, h, y, k, i;
        s = $(this).closest(".custom-select").find("select")[0];
        h = $(this).closest(".select-items").prev(".select-selected")[0];
        
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == $(this).html()) {
            s.selectedIndex = i;
            h.innerHTML = $(this).html();
            y = $(this).siblings(".same-as-selected");
            y.removeClass("same-as-selected");
            $(this).addClass("same-as-selected");

            // 선택된 옵션에 따라 .custom-select에 active 클래스 추가/제거
            if (s.options[i].value == "0") {
              $(this).closest(".custom-select").removeClass("active");
            } else {
              $(this).closest(".custom-select").addClass("active");
            }
            break;
          }
        }
        h.click();
      });
      b.append(c);
    }
    $(this).append(b);

    a.on("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      $(this).next().toggleClass("select-hide");
      $(this).toggleClass("select-arrow-active");
    });
  });

  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = $(".select-items");
    y = $(".select-selected");
    
    y.each(function(index) {
      if (elmnt == this) {
        arrNo.push(index);
      } else {
        $(this).removeClass("select-arrow-active");
      }
    });

    x.each(function(index) {
      if ($.inArray(index, arrNo) === -1) {
        $(this).addClass("select-hide");
      }
    });
  }

  $(document).on("click", function() {
    closeAllSelect();
  });
}

// autocomplete combobox
class ComboboxAutocomplete {
  constructor(comboboxNode, buttonNode, listboxNode) {
    this.comboboxNode = comboboxNode;
    this.buttonNode = buttonNode;
    this.listboxNode = listboxNode;

    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = false;

    this.hasHover = false;

    this.isNone = false;
    this.isList = false;
    this.isBoth = false;

    this.allOptions = [];

    this.option = null;
    this.firstOption = null;
    this.lastOption = null;

    this.filteredOptions = [];
    this.filter = '';

    var autocomplete = this.comboboxNode.getAttribute('aria-autocomplete');

    if (typeof autocomplete === 'string') {
      autocomplete = autocomplete.toLowerCase();
      this.isNone = autocomplete === 'none';
      this.isList = autocomplete === 'list';
      this.isBoth = autocomplete === 'both';
    } else {
      // default value of autocomplete
      this.isNone = true;
    }

    this.comboboxNode.addEventListener(
      'keydown',
      this.onComboboxKeyDown.bind(this)
    );
    this.comboboxNode.addEventListener(
      'keyup',
      this.onComboboxKeyUp.bind(this)
    );
    this.comboboxNode.addEventListener(
      'click',
      this.onComboboxClick.bind(this)
    );
    this.comboboxNode.addEventListener(
      'focus',
      this.onComboboxFocus.bind(this)
    );
    this.comboboxNode.addEventListener('blur', this.onComboboxBlur.bind(this));

    document.body.addEventListener(
      'pointerup',
      this.onBackgroundPointerUp.bind(this),
      true
    );

    // initialize pop up menu

    this.listboxNode.addEventListener(
      'pointerover',
      this.onListboxPointerover.bind(this)
    );
    this.listboxNode.addEventListener(
      'pointerout',
      this.onListboxPointerout.bind(this)
    );

    // Traverse the element children of domNode: configure each with
    // option role behavior and store reference in.options array.
    var nodes = this.listboxNode.getElementsByTagName('LI');

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      this.allOptions.push(node);

      node.addEventListener('click', this.onOptionClick.bind(this));
      node.addEventListener('pointerover', this.onOptionPointerover.bind(this));
      node.addEventListener('pointerout', this.onOptionPointerout.bind(this));
    }

    this.filterOptions();

    // Open Button

    var button = this.comboboxNode.nextElementSibling;

    if (button && button.tagName === 'BUTTON') {
      button.addEventListener('click', this.onButtonClick.bind(this));
    }
  }

  getLowercaseContent(node) {
    return node.textContent.toLowerCase();
  }

  isOptionInView(option) {
    var bounding = option.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  setActiveDescendant(option) {
    if (option && this.listboxHasVisualFocus) {
      this.comboboxNode.setAttribute('aria-activedescendant', option.id);
      if (!this.isOptionInView(option)) {
        option.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      this.comboboxNode.setAttribute('aria-activedescendant', '');
    }
  }

  setValue(value) {
    this.filter = value;
    this.comboboxNode.value = this.filter;
    this.comboboxNode.setSelectionRange(this.filter.length, this.filter.length);
    this.filterOptions();
  }

  setOption(option, flag) {
    if (typeof flag !== 'boolean') {
      flag = false;
    }

    if (option) {
      this.option = option;
      this.setCurrentOptionStyle(this.option);
      this.setActiveDescendant(this.option);

      if (this.isBoth) {
        this.comboboxNode.value = this.option.textContent;
        if (flag) {
          this.comboboxNode.setSelectionRange(
            this.option.textContent.length,
            this.option.textContent.length
          );
        } else {
          this.comboboxNode.setSelectionRange(
            this.filter.length,
            this.option.textContent.length
          );
        }
      }
    }
  }

  setVisualFocusCombobox() {
    this.listboxNode.classList.remove('focus');
    this.comboboxNode.parentNode.classList.add('focus'); // set the focus class to the parent for easier styling
    this.comboboxHasVisualFocus = true;
    this.listboxHasVisualFocus = false;
    this.setActiveDescendant(false);
  }

  setVisualFocusListbox() {
    this.comboboxNode.parentNode.classList.remove('focus');
    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = true;
    this.listboxNode.classList.add('focus');
    this.setActiveDescendant(this.option);
  }

  removeVisualFocusAll() {
    this.comboboxNode.parentNode.classList.remove('focus');
    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = false;
    this.listboxNode.classList.remove('focus');
    this.option = null;
    this.setActiveDescendant(false);
  }

  // ComboboxAutocomplete Events

  filterOptions() {
    // do not filter any options if autocomplete is none
    if (this.isNone) {
      this.filter = '';
    }

    var option = null;
    var currentOption = this.option;
    var filter = this.filter.toLowerCase();

    this.filteredOptions = [];
    this.listboxNode.innerHTML = '';

    for (var i = 0; i < this.allOptions.length; i++) {
      option = this.allOptions[i];
      if (
        filter.length === 0 ||
        this.getLowercaseContent(option).indexOf(filter) === 0
      ) {
        this.filteredOptions.push(option);
        this.listboxNode.appendChild(option);
      }
    }

    // Use populated options array to initialize firstOption and lastOption.
    var numItems = this.filteredOptions.length;
    if (numItems > 0) {
      this.firstOption = this.filteredOptions[0];
      this.lastOption = this.filteredOptions[numItems - 1];

      if (currentOption && this.filteredOptions.indexOf(currentOption) >= 0) {
        option = currentOption;
      } else {
        option = this.firstOption;
      }
    } else {
      this.firstOption = null;
      option = null;
      this.lastOption = null;
    }

    return option;
  }

  setCurrentOptionStyle(option) {
    for (var i = 0; i < this.filteredOptions.length; i++) {
      var opt = this.filteredOptions[i];
      if (opt === option) {
        opt.setAttribute('aria-selected', 'true');
        if (
          this.listboxNode.scrollTop + this.listboxNode.offsetHeight <
          opt.offsetTop + opt.offsetHeight
        ) {
          this.listboxNode.scrollTop =
            opt.offsetTop + opt.offsetHeight - this.listboxNode.offsetHeight;
        } else if (this.listboxNode.scrollTop > opt.offsetTop + 2) {
          this.listboxNode.scrollTop = opt.offsetTop;
        }
      } else {
        opt.removeAttribute('aria-selected');
      }
    }
  }

  getPreviousOption(currentOption) {
    if (currentOption !== this.firstOption) {
      var index = this.filteredOptions.indexOf(currentOption);
      return this.filteredOptions[index - 1];
    }
    return this.lastOption;
  }

  getNextOption(currentOption) {
    if (currentOption !== this.lastOption) {
      var index = this.filteredOptions.indexOf(currentOption);
      return this.filteredOptions[index + 1];
    }
    return this.firstOption;
  }

  /* MENU DISPLAY METHODS */

  doesOptionHaveFocus() {
    return this.comboboxNode.getAttribute('aria-activedescendant') !== '';
  }

  isOpen() {
    return this.listboxNode.style.display === 'block';
  }

  isClosed() {
    return this.listboxNode.style.display !== 'block';
  }

  hasOptions() {
    return this.filteredOptions.length;
  }

  open() {
    this.listboxNode.style.display = 'block';
    this.comboboxNode.setAttribute('aria-expanded', 'true');
    this.buttonNode.setAttribute('aria-expanded', 'true');
  }

  close(force) {
    if (typeof force !== 'boolean') {
      force = false;
    }

    if (
      force ||
      (!this.comboboxHasVisualFocus &&
        !this.listboxHasVisualFocus &&
        !this.hasHover)
    ) {
      this.setCurrentOptionStyle(false);
      this.listboxNode.style.display = 'none';
      this.comboboxNode.setAttribute('aria-expanded', 'false');
      this.buttonNode.setAttribute('aria-expanded', 'false');
      this.setActiveDescendant(false);
      this.comboboxNode.parentNode.classList.add('focus');
    }
  }

  /* combobox Events */

  onComboboxKeyDown(event) {
    var flag = false,
      altKey = event.altKey;

    if (event.ctrlKey || event.shiftKey) {
      return;
    }

    switch (event.key) {
      case 'Enter':
        if (this.listboxHasVisualFocus) {
          this.setValue(this.option.textContent);
        }
        this.close(true);
        this.setVisualFocusCombobox();
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
        if (this.filteredOptions.length > 0) {
          if (altKey) {
            this.open();
          } else {
            this.open();
            if (
              this.listboxHasVisualFocus ||
              (this.isBoth && this.filteredOptions.length > 1)
            ) {
              this.setOption(this.getNextOption(this.option), true);
              this.setVisualFocusListbox();
            } else {
              this.setOption(this.firstOption, true);
              this.setVisualFocusListbox();
            }
          }
        }
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
        if (this.hasOptions()) {
          if (this.listboxHasVisualFocus) {
            this.setOption(this.getPreviousOption(this.option), true);
          } else {
            this.open();
            if (!altKey) {
              this.setOption(this.lastOption, true);
              this.setVisualFocusListbox();
            }
          }
        }
        flag = true;
        break;

      case 'Esc':
      case 'Escape':
        if (this.isOpen()) {
          this.close(true);
          this.filter = this.comboboxNode.value;
          this.filterOptions();
          this.setVisualFocusCombobox();
        } else {
          this.setValue('');
          this.comboboxNode.value = '';
        }
        this.option = null;
        flag = true;
        break;

      case 'Tab':
        this.close(true);
        if (this.listboxHasVisualFocus) {
          if (this.option) {
            this.setValue(this.option.textContent);
          }
        }
        break;

      case 'Home':
        this.comboboxNode.setSelectionRange(0, 0);
        flag = true;
        break;

      case 'End':
        var length = this.comboboxNode.value.length;
        this.comboboxNode.setSelectionRange(length, length);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  isPrintableCharacter(str) {
    return str.length === 1 && str.match(/\S| /);
  }

  onComboboxKeyUp(event) {
    var flag = false,
      option = null,
      char = event.key;

    if (this.isPrintableCharacter(char)) {
      this.filter += char;
    }

    // this is for the case when a selection in the textbox has been deleted
    if (this.comboboxNode.value.length < this.filter.length) {
      this.filter = this.comboboxNode.value;
      this.option = null;
      this.filterOptions();
    }

    if (event.key === 'Escape' || event.key === 'Esc') {
      return;
    }

    switch (event.key) {
      case 'Backspace':
        this.setVisualFocusCombobox();
        this.setCurrentOptionStyle(false);
        this.filter = this.comboboxNode.value;
        this.option = null;
        this.filterOptions();
        flag = true;
        break;

      case 'Left':
      case 'ArrowLeft':
      case 'Right':
      case 'ArrowRight':
      case 'Home':
      case 'End':
        if (this.isBoth) {
          this.filter = this.comboboxNode.value;
        } else {
          this.option = null;
          this.setCurrentOptionStyle(false);
        }
        this.setVisualFocusCombobox();
        flag = true;
        break;

      default:
        if (this.isPrintableCharacter(char)) {
          this.setVisualFocusCombobox();
          this.setCurrentOptionStyle(false);
          flag = true;

          if (this.isList || this.isBoth) {
            option = this.filterOptions();
            if (option) {
              if (this.isClosed() && this.comboboxNode.value.length) {
                this.open();
              }

              if (
                this.getLowercaseContent(option).indexOf(
                  this.comboboxNode.value.toLowerCase()
                ) === 0
              ) {
                this.option = option;
                if (this.isBoth || this.listboxHasVisualFocus) {
                  this.setCurrentOptionStyle(option);
                  if (this.isBoth) {
                    this.setOption(option);
                  }
                }
              } else {
                this.option = null;
                this.setCurrentOptionStyle(false);
              }
            } else {
              this.close();
              this.option = null;
              this.setActiveDescendant(false);
            }
          } else if (this.comboboxNode.value.length) {
            this.open();
          }
        }

        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onComboboxClick() {
    if (this.isOpen()) {
      this.close(true);
    } else {
      this.open();
    }
  }

  onComboboxFocus() {
    this.filter = this.comboboxNode.value;
    this.filterOptions();
    this.setVisualFocusCombobox();
    this.option = null;
    this.setCurrentOptionStyle(null);
  }

  onComboboxBlur() {
    this.removeVisualFocusAll();
  }

  onBackgroundPointerUp(event) {
    if (
      !this.comboboxNode.contains(event.target) &&
      !this.listboxNode.contains(event.target) &&
      !this.buttonNode.contains(event.target)
    ) {
      this.comboboxHasVisualFocus = false;
      this.setCurrentOptionStyle(null);
      this.removeVisualFocusAll();
      setTimeout(this.close.bind(this, true), 300);
    }
  }

  onButtonClick() {
    if (this.isOpen()) {
      this.close(true);
    } else {
      this.open();
    }
    this.comboboxNode.focus();
    this.setVisualFocusCombobox();
  }

  /* Listbox Events */

  onListboxPointerover() {
    this.hasHover = true;
  }

  onListboxPointerout() {
    this.hasHover = false;
    setTimeout(this.close.bind(this, false), 300);
  }

  // Listbox Option Events

  onOptionClick(event) {
    this.comboboxNode.value = event.target.textContent;
    this.close(true);
  }

  onOptionPointerover() {
    this.hasHover = true;
    this.open();
  }

  onOptionPointerout() {
    this.hasHover = false;
    setTimeout(this.close.bind(this, false), 300);
  }
}