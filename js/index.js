
$('.items').slick({
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
    customPaging:function(slider,index) {
      var num = index +1;
      return '<span class="dot">' +num +'</span>';
    },
    prevArrow: '<button class="prev arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next arrow"><i class="fas fa-angle-right"></i></button>',
  });


  
  $('.mega').slick({
    autoplay:true,
    centerMode: true,
    centerPadding: '160px',
    slidesToShow:3,
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next arrow"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


var sDist0 = $('#sect1').offset().top
var sDist1 = $('#sect2').offset().top
var sDist2 = $('#sect3').offset().top

// 마지막구간이 윈도우높이보다 클때
var lastSect = $('#sect4').offset().top             
// 마지막구간이 윈도우높이보다 작을때
// var lastSect = $('body').height() - $(window).height()



// $('section').on('mousewheel', function(event, delta){
//     if (delta>0) {    // 마우스휠을 위로 굴리면 양수
//         $('html, body').stop().animate({
//             scrollTop: $(this).prev().offset().top
//         }, 600)
//     } else if (delta<0) {  // 마우스휠을 아래로 굴리면 음수
//         $('html, body').stop().animate({
//             scrollTop: $(this).next().offset().top
//         }, 600)
//     }
// })
new Skroll()
  .add(".sk1",{
    animation:"growInLeft",
    delay: 100,
    duration: 500, //작동하는시간
    easing:"ease",
    wait:0,
    repeat:true
})
.init();



