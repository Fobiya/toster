$(document).ready(function() {
    initS7();
    initPopup();
    initMagnificPopup();
    setUpMenuPos();
    initS9();
    initS12a();
    initS12b();
    initS12c();
    initWOW();
    initMask();
    initForms();

    $(function() {
        $( "#datepicker" ).datepicker();
    });
});

function initForms() {
    $(".section-1 form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");
        var date = $(p).find("input[name='date']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        if($(date).val() == '') {
            $(date).css('outline', '1px solid red');
            return false;
        } else {
            $(date).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "date", name: $(name).val(), phone: $(phone).val(), date: $(date).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".section-1 .form").html('<p style="font-size: 30px; font-weight: bold; color: #000; padding-top: 110px;">Ваша заявка<br/> принята!</p>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".section-6 form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");
        var email = $(p).find("input[name='email']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        if($(email).val() == '') {
            $(email).css('outline', '1px solid red');
            return false;
        } else {
            $(email).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "s6", name: $(name).val(), phone: $(phone).val(), email: $(email).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".section-6 form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 110px;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".section-8 form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "s8", name: $(name).val(), phone: $(phone).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".section-8 form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 110px;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".section-11 form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");
        var email = $(p).find("input[name='email']");
        var song = $(p).find("input[name='song']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        if($(email).val() == '') {
            $(email).css('outline', '1px solid red');
            return false;
        } else {
            $(email).css('outline', '0px solid red');
        }

        if($(song).val() == '') {
            $(song).css('outline', '1px solid red');
            return false;
        } else {
            $(song).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "s11", song: $(song).val(), name: $(name).val(), phone: $(phone).val(), email: $(email).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".section-11 form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 110px;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".popup-content.get-call form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "call", name: $(name).val(), phone: $(phone).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".popup-content.get-call .form-right").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 80px; font-family: intro_regular;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".popup-content.get-discount form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");
        var email = $(p).find("input[name='email']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        if($(email).val() == '') {
            $(email).css('outline', '1px solid red');
            return false;
        } else {
            $(email).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "s8", name: $(name).val(), phone: $(phone).val(), email: $(email).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".popup-content.get-discount form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 60px; font-family: intro_regular;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });

    $(".popup-content.get-present form").on("submit", function(e){
        var p = $(this);
        var name = $(p).find("input[name='name']");
        var phone = $(p).find("input[name='phone']");
        var email = $(p).find("input[name='email']");

        if($(name).val() == '') {
            $(name).css('outline', '1px solid red');
            return false;
        } else {
            $(name).css('outline', '0px solid red');
        }

        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }

        if($(email).val() == '') {
            $(email).css('outline', '1px solid red');
            return false;
        } else {
            $(email).css('outline', '0px solid red');
        }

        $.post("api.php", { action: "new", type: "download", name: $(name).val(), phone: $(phone).val(), email: $(email).val() })
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".popup-content.get-present form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 60px; font-family: intro_regular;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });
	
    $(".popup-content.get-price form").on("submit", function(e){
        var p = $(this);
        var phone = $(p).find("input[name='phone']");


        if($(phone).val() == '') {
            $(phone).css('outline', '1px solid red');
            return false;
        } else {
            $(phone).css('outline', '0px solid red');
        }


        $.post("api.php", { action: "new", type: "price", phone: $(phone).val()})
            .done(function(data) {
                var data = JSON.parse(data);
                if(data["status"][0] == "success") {
                    $(".popup-content.get-price form").html('<h2 style="font-size: 30px; font-weight: bold; color: #fff; padding-top: 60px; font-family: intro_regular;">Ваша заявка принята!</h2>');
                }
            });

        e.preventDefault();
        return false;
    });
}

function initPopup() {
    $(".get-popup").on("click", function() {
        var m = $(this).data("model");
        $(".popup-content").css("display", "none");
        $(".popup-content." + m).css({marginTop: '-1600px'});
        $(".popup-content." + m).css({display: "block"});
        $(".popup-content." + m).animate({marginTop: '-230px'}, 400);

        switch(m) {
            case "...":
                break;
        }

        $(".popup-bg").fadeIn(300);
        return false;
    });

    $(".popup-content .close").on("click", function() {
        $(".popup-bg").fadeOut(300);
    });

    $(".popup-bg").on("click", function() {
        $(".popup-bg").fadeOut(300);
    });

    $(".popup-content").on("click", function(event) {
        event.stopPropagation();
    });
}

function initMask() {
    $("input[name='phone']").mask("+7 (999) 999-99-99");
}

function initWOW() {
    new WOW().init();
}

function setUpMenuPos() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 570) {
            $('.navigation').addClass("fixed");
        } else {
            $('.navigation').removeClass("fixed");
        }
    });

    $('.navigation .animate').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
}

function initMagnificPopup() {
    $('.section-7 .gallery .item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });
}

function initS9() {
    window.s9pos = 0;
    window.s9width = 930;
    window.s9animTime = 300;

    $('.section-9 .slider .arrow-right').bind('click', function() {
        if(s9pos == $('.section-9 .slider .item').length - 1) s9pos = -1;

        s9pos++;
        $('.section-9 .slider .line').stop(true, true).animate({left: -s9pos * s9width}, s9animTime);
    });

    $('.section-9 .slider .arrow-left').bind('click', function() {
        if(s9pos == 0) s9pos = $('.section-9 .slider .item').length;

        s9pos--;
        $('.section-9 .slider .line').stop(true, true).animate({left: -s9pos * s9width}, s9animTime);
    });

}

function initS12b() {
    window.s12Bpos = 0;
    window.s12Bwidth = 1000;
    window.s12BanimTime = 300;

    $('.section-12 .slider-2 .arrow-right').bind('click', function() {
        if(s12Bpos == $('.section-12 .slider-2 .item').length - 1) s12Bpos = -1;

        s12Bpos++;
        $('.section-12 .slider-2 .line').stop(true, true).animate({left: -s12Bpos * s12Bwidth}, s12BanimTime);
    });

    $('.section-12 .slider-2 .arrow-left').bind('click', function() {
        if(s12Bpos == 0) s12Bpos = $('.section-12 .slider-2 .item').length;

        s12Bpos--;
        $('.section-12 .slider-2 .line').stop(true, true).animate({left: -s12Bpos * s12Bwidth}, s12BanimTime);
    });

}

function initS12c() {
    window.s12Cpos = 0;
    window.s12Cwidth = 168;
    window.s12CanimTime = 300;

    $('.section-12 .slider-3 .arrow-right').bind('click', function() {
        if(s12Cpos == $('.section-12 .slider-3 .item').length - 6) s12Cpos = -1;

        s12Cpos++;
        $('.section-12 .slider-3 .line').stop(true, true).animate({left: -s12Cpos * s12Cwidth}, s12CanimTime);
    });

    $('.section-12 .slider-3 .arrow-left').bind('click', function() {
        if(s12Cpos == 0) s12Cpos = $('.section-12 .slider-3 .item').length - 5;

        s12Cpos--;
        $('.section-12 .slider-3 .line').stop(true, true).animate({left: -s12Cpos * s12Cwidth}, s12CanimTime);
    });

}

function initS12a() {
    window.s12Apos = 0;
    window.s12Awidth = 1000;
    window.s12AanimTime = 300;

    $('.section-12 .slider-1 .arrow-right').bind('click', function() {
        if(s12Apos == $('.section-12 .slider-1 .item').length - 1) s12Apos = -1;

        s12Apos++;
        $('.section-12 .slider-1 .line').stop(true, true).animate({left: -s12Apos * s12Awidth}, s12AanimTime);

        $('.section-12 .slider-1 .controls .active').removeClass('active');
        $('.section-12 .slider-1 .controls span[data-id="'+s12Apos+'"]').addClass('active');
    });

    $('.section-12 .slider-1 .arrow-left').bind('click', function() {
        if(s12Apos == 0) s12Apos = $('.section-12 .slider-1 .item').length;

        s12Apos--;
        $('.section-12 .slider-1 .line').stop(true, true).animate({left: -s12Apos * s12Awidth}, s12AanimTime);

        $('.section-12 .slider-1 .controls .active').removeClass('active');
        $('.section-12 .slider-1 .controls span[data-id="'+s12Apos+'"]').addClass('active');
    });

    for(var i = 0; i < $('.section-12 .slider-1 .item').length; i++) {
        $('.section-12 .slider-1 .controls').append('<span data-id="'+i+'"></span>');
    }

    $('.section-12 .slider-1 .controls span:first-child').addClass('active');

    $('.section-12 .slider-1 .controls span').bind('click', function() {
        $('.section-12 .slider-1 .controls .active').removeClass('active');
        $(this).addClass('active');

        var id = $(this).attr('data-id');

        s12Apos = id;
        $('.section-12 .slider-1 .line').stop(true, true).animate({left: -s12Apos * s12Awidth}, s12AanimTime);
    });
}

function initS7() {
    window.s7pos = 0;
    window.s7width = 1000;
    window.s7animTime = 300;

    $('.section-7 .slider .arrow-right').bind('click', function() {
        if(s7pos == $('.section-7 .slider .item').length - 1) s7pos = -1;

        s7pos++;
        $('.section-7 .slider .line').stop(true, true).animate({left: -s7pos * s7width}, s7animTime);

        $('.section-7 .controls .active').removeClass('active');
        $('.section-7 .controls span[data-id="'+s7pos+'"]').addClass('active');
    });

    $('.section-7 .slider .arrow-left').bind('click', function() {
        if(s7pos == 0) s7pos = $('.section-7 .slider .item').length;

        s7pos--;
        $('.section-7 .slider .line').stop(true, true).animate({left: -s7pos * s7width}, s7animTime);

        $('.section-7 .controls .active').removeClass('active');
        $('.section-7 .controls span[data-id="'+s7pos+'"]').addClass('active');
    });

    for(var i = 0; i < $('.section-7 .slider .item').length; i++) {
        $('.section-7 .slider .controls').append('<span data-id="'+i+'"></span>');
    }

    $('.section-7 .slider .controls span:first-child').addClass('active');

    $('.section-7 .controls span').bind('click', function() {
        $('.section-7 .controls .active').removeClass('active');
        $(this).addClass('active');

        var id = $(this).attr('data-id');

        s7pos = id;
        $('.section-7 .line').stop(true, true).animate({left: -s7pos * s7width}, s7animTime);
    });
}
