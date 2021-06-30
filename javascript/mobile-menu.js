
$('#mobilenav').on('shown.bs.collapse', function () {
    var x = document.getElementById("body-page");
    x.style.display = "none";


})

$('#mobilenav').on('hidden.bs.collapse', function () {


    var x = document.getElementById("body-page");

    x.style.display = "block";
})

var mql = window.matchMedia("(min-width: 1200px)")
function render(x) {
    if (x.matches) { 
        $('.collapse').collapse('hide');
        
    }else{
        $('.collapse').collapse('hide');
    } 
}


render(mql); // Call listener function at run time
mql.addEventListener('change', render) ;// Attach listener function on state changes






function openVehi() {
    document.getElementById("vehi_lv2").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
}
function openShop() {
    document.getElementById("shop_lv2").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
}
function openOwn() {
    document.getElementById("own_lv2").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
}
function openExpl() {
    document.getElementById("expl_lv2").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
}

function closeVehi() {
    document.getElementById("vehi_lv2").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
function closeShop() {
    document.getElementById("shop_lv2").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
function closeOwn() {
    document.getElementById("own_lv2").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
function closeExpl() {
    document.getElementById("expl_lv2").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
