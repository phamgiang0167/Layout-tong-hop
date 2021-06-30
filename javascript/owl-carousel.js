
var owl = $('.owl-carousel');
owl.owlCarousel({

    items: 1,
    /* loop: true, */
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})
$('.customNextBtn').on('click', function () {
    owl.trigger('next.owl.carousel', [100])
})
$('.customPrevBtn').on('click', function () {
    owl.trigger('prev.owl.carousel', [100])
})

function play() {
    var x = document.getElementById("play__carousel");
    var y = document.getElementById("stop__carousel");
    x.style.display = "none"
    y.style.display = "block"
}
function stop() {
    var x = document.getElementById("play__carousel");
    var y = document.getElementById("stop__carousel");
    y.style.display = "none"
    x.style.display = "block"
}

