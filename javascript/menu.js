/* VEHICLES */

$('#vehicles-submenu').on('shown.bs.collapse', function () {

    var y = document.getElementById("icon-vehicles");
    var x = document.getElementById("body-page");
    y.classList.replace("fa-chevron-down", "fa-chevron-up");
    x.style.display = "none";

})


$('#vehicles-submenu').on('hidden.bs.collapse', function () {

    var y = document.getElementById("icon-vehicles");
    var x = document.getElementById("body-page");
    y.classList.replace("fa-chevron-up", "fa-chevron-down");
    x.style.display = "block"
})








/* SHOPPING TOOLS, OWNERS, EXPLORE */
$('#li-shopping').on('shown.bs.dropdown', function () {
    var y = document.getElementById("icon-shopping");
    y.classList.replace("fa-chevron-down", "fa-chevron-up");

})
$('#li-owner').on('shown.bs.dropdown', function () {
    var y = document.getElementById("icon-owner");
    y.classList.replace("fa-chevron-down", "fa-chevron-up");

})
$('#li-explore').on('shown.bs.dropdown', function () {
    var y = document.getElementById("icon-explore");
    y.classList.replace("fa-chevron-down", "fa-chevron-up");

})
$('#li-shopping').on('hidden.bs.dropdown', function () {
    var y = document.getElementById("icon-shopping");
    y.classList.replace("fa-chevron-up", "fa-chevron-down");
})
$('#li-owner').on('hidden.bs.dropdown', function () {
    var y = document.getElementById("icon-owner");
    y.classList.replace("fa-chevron-up", "fa-chevron-down");
})
$('#li-explore').on('hidden.bs.dropdown', function () {
    var y = document.getElementById("icon-explore");
    y.classList.replace("fa-chevron-up", "fa-chevron-down");
})
