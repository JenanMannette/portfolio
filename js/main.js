$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$('a[href=#top]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:0}, 500);
});