(function (){
　　"use strict";
	
//pc导航
// $('#nav ul li').hover(function(){
//     $(this).find('.sub').stop().slideDown('fast');
// },function(){
//     $(this).find('.sub').slideUp(0);
// })

//手机导航展开特效
$(function(){
$("#m_nav .title .list").css({"opacity":"1","visibility":"visible"});
$("#m_nav .title .a").click(function(){
   var tt = $(this).parents(".title");
  if ($(tt).hasClass('on')) {
	  $(tt).children(".list").slideUp(600); //展开
	  $(tt).removeClass("on"); 
	}else{
	  $("#m_nav .title ").removeClass("on");
	  $("#m_nav .title .list").slideUp();
	  $(tt).children(".list").slideDown();
	  $(tt).toggleClass("on"); 
	}
});
$("#nav_btn_box").click(function(){
  $("#nav_btn_box .point").toggleClass("on"); 
  $("#nav_btn_box").toggleClass("on"); 
  $("#m_nav").toggleClass("act");
  $(".nav_mask").fadeToggle();
});

$(".nav_mask").click(function(){
$("#nav_btn_box .point").removeClass("on"); 
$("#nav_btn_box").removeClass("on"); 
$(this).fadeToggle();
$(".nav_btn_box").removeClass("act");
$("#m_nav").removeClass("act");
});

});	
 

 $(document).mouseup(function (e) {
    var _con = $('.header_search,.search_wrap,.tel_dt,.tel_dd'); // 设置目标区域
    if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
        $(".header_search").removeClass("on");
        $(".search_wrap").removeClass("on");
        $(".tel_dt").removeClass("on");
        $(".tel_dd").removeClass("on");
    }
});

//IE8下提示浏览器版本过低，升级浏览器
(function(window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            var str = "您现在使用的浏览器版本过低，无法正常浏览本网站！";
            var str2 = "";
            document.writeln("<pre style='background-image:url(images/s_pro_bg.jpg);text-align:center; font-size:14px;color:#666; line-height:40px; font-family:微软雅黑; font-weight:nomal; background-color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:300px;margin:0'><span>" + str + "<br/></span></h2><h2>" +
                str2 + "</h2><h2 style='margin:0'><span>请更新并使用<a href='http://browsehappy.osfipin.com/' style='text-decoration: underline;'>最新的浏览器版本</a>。<br/></span></h2></pre>");
            document.execCommand("Stop");
        }
    }
})(window);


$('.tc_btn[name]').click(function() {
    var tf_name_id = $(this).attr('name');
    $('.tc[name=' + tf_name_id + ']').addClass('act');
});
$('.tc_close').click(function() {
    $(this).parents('.tc').removeClass('act');
});
$('.tc_bg').click(function() {
    $(this).parents('.tc').removeClass('act');
});


// //banner切换
// var interleaveOffset = 0.5;
// var swiperOptions = {
// loop: true,
// speed: 1200,
// autoplay:true,
// autoplay: {
//   delay: 5000,
//   stopOnLastSlide: false,
//   disableOnInteraction: true,
//   },
// grabCursor: true,
// watchSlidesProgress: true,
// mousewheelControl: true,
// keyboardControl: true,
// navigation: {
// nextEl: ".swiper-button-next",
// prevEl: ".swiper-button-prev"
// },
// on: {
// 	init: function() {
// 		var swiper = this;
// 	    //swiper.slideTo(0, 1000, false);
// 		 swiper.slideNext();
// 		/*setTimeout(function(){
// 			 //swiper.slideTo(1, 1000, false);
// 		 swiper.slideNext();
// 		},1000);*/
// 	},
// progress: function() {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
// 	var slideProgress = swiper.slides[i].progress;
// 	var innerOffset = swiper.width * interleaveOffset;
// 	var innerTranslate = slideProgress * innerOffset;
// 	swiper.slides[i].querySelector(".slide-inner").style.transform =
// 	  "translate3d(" + innerTranslate + "px, 0, 0)";
//   }      
// },
// touchStart: function() {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
// 	swiper.slides[i].style.transition = "";
//   }
// },
// setTransition: function(speed) {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
// 	swiper.slides[i].style.transition = speed + "ms";
// 	swiper.slides[i].querySelector(".slide-inner").style.transition =
// 	  speed + "ms";
//   }
// }
// }
// };
// var swiper = new Swiper("#banner .swiper-container", swiperOptions);	
 

$(window).scroll(function(){
    var winHeight=$(this).scrollTop()
    if(winHeight>1){
           $('#header').addClass('xg')
       }else{
           $('#header').removeClass("xg")
       }
     if ($(this).scrollTop()>300){
         $("#gotop").removeClass("hide");
     }else{
         $("#gotop").addClass("hide");
     }
 });

 $('#gotop').click(function () {
     $('html,body').animate({
         scrollTop : '0px'
     }, 800);
 });
 

$(function() {
  $('a[href*="#"],area[href*="#"]').click(function() {
    var my_location = window.location.href;
    var my_this = this.href;
    if (my_location.substring(0,my_location.lastIndexOf("\#")) == my_this.substring(0,my_this.lastIndexOf("\#"))) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 600);
        return false
      }
    }
  })
});

$(window).scroll(function(){
    if ($(this).scrollTop()>300){
        $("#gotop").removeClass("hide");
    }else{
        $("#gotop").addClass("hide");
    }
});
$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop : '0px'
    }, 800);
});

$("#bnt_sub_nav").click(function(){
    $(this).toggleClass("on");
    $("#sub_nav_content").slideToggle();
});
 
  
$(".s_yanfa li").hover(function(){
    $(".s_yanfa li").removeClass("on");
    $(this).addClass("on");
    },function(){
   });


$('.n_pro .hd li:eq(0)').addClass('on');
var currentSlide = $('.n_pro .bd').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    arrows:false,
    infinite: true,//循环播放
    // speed: 0,
    fade: true,
    pauseOnHover: false,
    waitForAnimate:false,
    autoplay: true,
    autoplaySpeed:5000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    // appendDots:'.slickdotbox',
    });
currentSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
     var i= nextSlide;
     console.log(nextSlide);
     $('.n_pro .hd li').eq(i).siblings().removeClass("on");
     $('.n_pro .hd li').eq(i).addClass('on');
   }); 

$(".n_pro .hd li").on("click", function(){
       $(this).siblings().removeClass("on");
   $(this).addClass("on");
   var index =  $(this).index();
   currentSlide.slick('slickGoTo',index);
})
 

$('.container05 .slick_hd ul').slick({
	autoplay: false,
	slidesToShow:3,
	asNavFor: '.container05 .slick_bd',
    focusOnSelect: true,
});
$('.container05 .slick_bd').slick({
	autoplay: false,
	fade:true,
	asNavFor: '.container05 .slick_hd ul'
});

$('.s_coop ul').slick({
    slidesToShow: 7,
	autoplay: true,  
    autoplaySpeed: 3000,
    touchThreshold:20,
    arrows:true,
    swipeToSlide:true,
    prevArrow:'<div class="slick-prev"><svg t="1666578788806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="895" width="28" height="28"><path d="M369.7664 506.7264L712.704 163.328a35.328 35.328 0 0 0-0.6144-50.688 37.1712 37.1712 0 0 0-51.8144 0.6144L292.0448 481.9968a35.328 35.328 0 0 0 0.3072 50.432l387.584 378.67519999a37.2224 37.2224 0 0 0 51.712 0 35.328 35.328 0 0 0 0-50.68799999L369.7664 506.7264z" fill="#555555" p-id="896"></path></svg></div>',
    nextArrow:'<div class="slick-next"><svg t="1666578839978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1044" width="28" height="28"><path d="M654.2336 517.2736L311.296 860.672a35.328 35.328 0 0 0 0.6144 50.688 37.1712 37.1712 0 0 0 51.8144-0.6144L731.9552 542.0032a35.328 35.328 0 0 0-0.3072-50.432l-387.584-378.67519999a37.2224 37.2224 0 0 0-51.712 0 35.328 35.328 0 0 0 0 50.68799999L654.2336 517.2736z" fill="#555555" p-id="1045"></path></svg></div>',
    responsive: [
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 6,
          }
        },
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          },
      ]
});
$("footer .bottom dl dt").click(function(){
	$("footer .bottom dl .con").slideToggle();
});

$('.search_btn').on('click',function(){
    $('.search-dialog-box').toggleClass("on");
})

$('.search-dialog-box .pub-close').on('click',function(){
    $('.search-dialog-box').removeClass("on");
})






//标题分割动画	
let w = document.body.offsetWidth || document.body.clientWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
const _ = function (select) { return document.querySelector(select) };
const _$ = function (select) { return document.querySelectorAll(select)};
const clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true){
        return 'touchstart';
    }else{
        return 'mousedown';
    }
})();
const getScrollbarWidth = function() {
    const container = document.createElement('div');
    container.style.visibility = 'hidden';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '100px';
    container.style.overflow = 'scroll';
    document.body.appendChild(container);
    const containerWidth = container.offsetWidth;
    const inner = document.createElement('div');
    inner.style.width = '100%';
    container.appendChild(inner);
    const innerWidth = inner.offsetWidth;
    container.parentNode.removeChild(container);
    return containerWidth - innerWidth;
};

const scrollMarginRightTrue = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = getScrollbarWidth() + 'px';
        _('header').style.width =_('header').offsetWidth + 'px';
        document.documentElement.style.overflowY='hidden';
    }
}
const scrollMarginRightFalse = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = 0;
        document.documentElement.style.overflowY = 'scroll';
    }
}
const splitlist = function(splitlist,bool){
    Array.prototype.forEach.call(_$(splitlist), function (item) {
        let flag = false,
            isRandom = bool,
            delays = parseInt(item.getAttribute('delay')),
            speeds = parseInt(item.getAttribute('speed')),
            Arrays = item.innerHTML.replace(/<br>/g, "\n").replace(/<i>/g, "\\").replace(/<\/i>/g, "\t").replace(/&amp;/g, "&").split("");
        item.innerHTML = '';
        if(!delays){
            delays = 100;
        }
        if(!speeds){
            speeds = 100;
        }
        Array.prototype.forEach.call(Arrays,function(letter, i) {
            let span = document.createElement("span"),
                br = document.createElement("br"),
                random = 1;
            if(letter.indexOf("\n") >= 0){
                item.appendChild(br);
                return;
            }
            if(letter.indexOf("\\") >= 0){
                flag = true;
                return;
            }
            if(letter.indexOf("\t") >= 0){
                flag = false;
                return;
            }
            if(flag){
                span.className = 'letters';
            }
            if(isRandom){
                random = Math.random();
            }
            delays += speeds;
            span.style.animationDelay = delays * random  + 'ms';
            span.innerHTML = letter;
            item.appendChild(span);
        });
    });
};
function scrollAnimate() {
    const viewHeight =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
    Array.prototype.forEach.call(_$('.flags'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('flag');
        }
    });
    Array.prototype.forEach.call(_$('.photoActives'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('reset_photoActive');
        }
    });
    Array.prototype.forEach.call(_$('.itemAnimates'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('animates');
        }
    });
};
//图片动画
function photoActives(){
    let photoActives = _$('.photoActives');
    let section = document.createElement('section');
    section.classList.add('photoActive');
    if(!photoActives){
        return
    }
    for(let i = 0 ;i < photoActives.length; i++){
        photoActives[i].appendChild(section.cloneNode());
    }
};

function itemAnimates(){
    let itemAnimates = _$(".itemAnimates");
    if(!itemAnimates){return}
    for (let i = 0; i < itemAnimates.length; i++) {
      let itemAnimate = itemAnimates[i].querySelectorAll('.itemAnimate');
      let delay = 0;
      for (let j = 0; j < itemAnimate.length; j++) {
        if(itemAnimates[i].getAttribute('random') == '1'){
            delay = Math.random() * itemAnimates[i].getAttribute('randomMax');
          }else{
            delay += 300;
          }
          itemAnimate[j].style.animationDelay = delay + "ms";
      }
    }
};

function newspaper(){
    Array.prototype.forEach.call(_$('.newspaper table'), function(el) {
        let section = document.createElement('section');
        section.className = 'tablebox';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
    Array.prototype.forEach.call(_$('.newspaper img'), function(el) {
        let section = document.createElement('section');
        section.className = 'photoActives';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
};
	
scrollAnimate();
photoActives();
splitlist('.splitlist',false);
window.addEventListener('scroll',function(){
    scrollAnimate();
});
	
　　// some code here
})();
