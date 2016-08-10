$(function () {
    $('#content').load('one.html #container')
});

$('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    $('nav a.active-tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('#container').remove();
    $('#content').load(url + ' #container');
});