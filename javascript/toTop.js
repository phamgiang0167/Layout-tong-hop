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
