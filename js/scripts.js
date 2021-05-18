$(document).ready(function() {



    // Nouvelle partie

    $("#nouvelle-partie").click(function() {
        var liste = [];

        var i = 1;
        while (i <= 3) {
            var nbhasard = Math.floor((Math.random() * 102) + 1);
            if ($.inArray(nbhasard , liste) == -1) {
                liste.push(nbhasard);
                i++;
            }
        }
        console.log(liste);
        var url = "";
        $.each(liste, function(index, value) {
            if (index != 0) {
                url += "-";
            }
            url += value;
        });
        new_url = window.location.href.replace( /[\?#].*|$/, "?images=" + url ); 
        window.location.href = new_url;
    })





    // Partie en cours

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results || 0;
    }

    

    var url = $.urlParam('images')[1].split('-');


    if (url != "") {
        console.log("Quelque chose dans l'url");

        $("#intro").html("<h2>Partie " + $.urlParam('images')[1] + "</h2><p>Partagez ce code ou <a href='" + window.location.href + "' class='copy_button'>l'URL de la page</a> avec les autres joueurs !</p>");

        $("#images").append("<div class='tabs'></div>");
        $("#images .tabs").append("<ul class='tabs-nav'></ul>");
        $("#images .tabs").append("<div class='tabs-content'></div>");
        for (var i = 0; i < 3; i++) {
            var active = '';
            if (i == 0) {
                active = " class='active'";
            } else {
                active = '';
            }
            $("#images .tabs .tabs-nav").append("<li" + active + "><a href='#tab" + [i+1] + "'>Manche " + [i+1] + "</a></li>");
        }
        for (var i = 0; i < 3; i++) {
            $("#images .tabs .tabs-content").append("<div id='tab" + [i+1] + "'><img src='./img/" + url[i] + ".jpg' alt='' /></div>");
        }
    } else {
        console.log("Rien dans l'url");
    }




    // Rejoindre partie

    $("#submit").click(function(e) {
        e.preventDefault();
        var val1 = $("#code-liste-1").val();
        var val2 = $("#code-liste-2").val();
        var val3 = $("#code-liste-3").val();
        if ((val1 != "") && (val2 != "") && (val3 != "")) {
            var codePartie = val1 + "-" + val2 + "-" + val3;
            new_url = window.location.href.replace( /[\?#].*|$/, "?images=" + codePartie ); 
            window.location.href = new_url;
        }
          
    });





    // Tabs

    $('.tabs-nav a').click(function() {
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        let currentTab = $(this).attr('href');
        $('.tabs-content > div').hide();
        $(currentTab).show();

        return false;
    });




    // Modale

    $(".open-modal").click(function(e){
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({"display":"block"});
    });

    $(".modal .close, .modal .overlay").click(function(){
        $(".modal").css({"display":"none"});
    });





    $('.copy_button').on('click', function(e){
        e.preventDefault();
        copyToClipboard( $(this).attr('href') );
        alert("L'adresse a bien été copiée");
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(element).select();
        document.execCommand("copy");
        $temp.remove();
    }


  
});



