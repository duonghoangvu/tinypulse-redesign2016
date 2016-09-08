function render(pageNumber) {
    var contentWrapper = $('#js-in-the-press');
    $.ajax("https://app.tinypulse.com/admin/press_urls/hubspot_press_url?page=" + pageNumber).done(function(data) {
        var list = data.press_urls;
        contentWrapper.html('');
        for (var i = 0; i < list.length; i++) {
            contentWrapper.append('<li>' + '<img src="' + list[i].url_image + '" />' + '<div class="right-content">' + '<span class="time">' + list[i].posted_on + '</span>' + '<span class="tag">' + list[i].publisher + '</span>' + '<a href="' + list[i].url + '">' + list[i].title + '</a>' + '<p>' + list[i].summary + '</p>' + '</div></li>');
        }
        $('.in-the-press-pagination .pagination-wrapper').pagination({
            pages: data.total_pages,
            currentPage: parseInt(data.current_page),
            onPageClick: function(pageNumber, event) {
                render(pageNumber);
                $('html, body').animate({
                  scrollTop: $('#js-in-the-press').offset().top - 50
                }, 1000);
            }
        });
    });
}
$(document).ready(function() {
    render(1);
    $('.in-the-press-pagination form').submit(function(e) {
        e.preventDefault();
        var pagenumber = $(this).find('input[type="number"]').val();
        $('.in-the-press-pagination .pagination-wrapper').pagination('selectPage', parseInt(pagenumber));
    });
});