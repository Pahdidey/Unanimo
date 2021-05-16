$(document).ready(function() {


    // Modale

    $(".open-modal").click(function(e){
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({"display":"block"});
    });

    $(".modal .close, .modal .overlay").click(function(){
        $(".modal").css({"display":"none"});
    });




    // Lightbox image
    $('.open-lightbox').on('click', function(e) {
        e.preventDefault();
        var image = $(this).attr('href');
        $('html').addClass('no-scroll');
        $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
    });
      
    $('body').on('click', '.lightbox-opened', function() {
        $('html').removeClass('no-scroll');
        $('.lightbox-opened').remove();
    });


  
});



