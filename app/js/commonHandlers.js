/**
 * Created by david on 19/06/2015.
 */
$('#home-handler').click(function() {
    window.location.href= 'index.html';
});

$('#menu-handler').click(function() {
    $('.sidebar').toggleClass('sidebar-active',1000,"swing");
    $('.view').toggleClass('view-not-active',1000,"swing");
});

$('#create-handler').click(function () {
    window.location.href= 'create.html';
});

$('#about-handler').click(function () {
    window.location.href= 'about.html';
});

$('#code-handler').click(function () {
    window.location.href = "http://github.com/RecuencoJones/BB062015";
});