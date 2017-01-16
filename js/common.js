$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
$(document).ready(function() {
    //Google Fonts
    WebFontConfig = {
        google: { families: [ 'Roboto::latin,cyrillic' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

//Форма отправки 2.0 //
    $(function() {
        $("[name=send]").click(function () {
            $(":input.error").removeClass('error');
            $(".allert").remove();

            var error;
            var btn = $(this);
            var ref = btn.closest('form').find('[required]');
            var msg = btn.closest('form').find('input, textarea, select');
            var send_btn = btn.closest('form').find('[name=send]');
            var send_options = btn.closest('form').find('[name=campaign_token]');

            $(ref).each(function() {
                if ($(this).val() == '') {
                    var errorfield = $(this);
                    $(this).addClass('error').parent('.field').append('<div class="allert"><span>Fill out the field</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                    error = 1;
                    $(":input.error:first").focus();
                    return;
                } else {
                    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                    if ($(this).attr("type") == 'email') {
                        if(!pattern.test($(this).val())) {
                            $("[name=email]").val('');
                            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Please enter a valid e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                            error = 1;
                            $(":input.error:first").focus();
                        }
                    }
                    var patterntel = /^()[0-9]{9,18}/i;
                    if ( $(this).attr("type") == 'tel') {
                        if(!patterntel.test($(this).val())) {
                            $("[name=phone]").val('');
                            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Please enter a valid phone number</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                            error = 1;
                            $(":input.error:first").focus();
                        }
                    }
                }
            });
            if(!(error==1)) {
                $(send_btn).each(function() {
                    $(this).attr('disabled', true);
                });
                $(send_options).each(function() {
                    if ($(this).val() == '') {
                        $.ajax({
                            type: 'POST',
                            url: 'mail.php',
                            data: msg,
                            success: function() {
                                $('form').trigger("reset");
                                setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                // Настройки модального окна после удачной отправки
                                $('div.md-show').removeClass('md-show');
                                $("#call_ok")[0].click();
                            },
                            error: function(xhr, str) {
                                alert('Возникла ошибка: ' + xhr.responseCode);
                            }
                        });
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: 'mail.php',
                            data: msg,
                            success:
                                $.ajax({
                                    type: 'POST',
                                    url: 'https://app.getresponse.com/add_subscriber.html',
                                    data: msg,
                                    statusCode: {0:function() {
                                        $('form').trigger("reset");
                                        setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                        // Настройки модального окна после удачной отправки
                                        $('div.md-show').removeClass('md-show');
                                        $("#call_ok")[0].click();
                                    }}
                                }),
                            error:  function(xhr, str) {
                                alert('Возникла ошибка: ' + xhr.responseCode);
                            }
                        });
                    }
                });
            }
            return false;
        })
    });



}); /* End document ready */

function set(obj) {var id=obj.title; $('.pacet').val(id);}
function setbtn(obj) {var id=obj.title; $('.pacet').val("Кнопка: " + id);}



$(document).one("mouseleave", function (e) {               
       if (e.pageY - $(window).scrollTop() <= 1) { 
	   
            $('#modal_top').addClass('md-show');  

			
       }
});

$(".md-close").click(function(){
 $("div.md-show").removeClass('md-show');
 });
