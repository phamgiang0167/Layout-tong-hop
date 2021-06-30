var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st < lastScrollTop && st >= $(window).height()) {
    $('.toTop').css('transform', "translateX(0)")
  } else {
    $('.toTop').css('transform', "translateX(100%)")
  }
  lastScrollTop = st;
});

let toTopBtn = document.getElementsByClassName('toTop')
toTopBtn[0].addEventListener('click', ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})