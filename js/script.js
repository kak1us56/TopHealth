$('.go-to').click(function(e) {
    e.preventDefault();
    const link = this;
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link.hash).offset().top
    }, 1400);
});