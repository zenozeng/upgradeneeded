$(function() {
    $('#suggestions li').on('click', function(event) {
        event.preventDefault();
        window.location.href = $(this).find('a').attr('href');
    });
});
