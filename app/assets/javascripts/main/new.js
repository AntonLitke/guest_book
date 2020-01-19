jQuery(document).ready(function() {
    var timeout; //global timout variable that holds reference to timer

    var captcha = new $.Captcha({
        onFailure: function(e) {
            $('#captchaError').html('<p style="color: red">Captcha wrong</p>')
        },
        onSuccess: function (e) {
            if(check_required_inputs() == 0) {
                console.log('da is success')
                 $('#clientForm').submit()
            }
        }
        
    });

    captcha.generate();

/*    $('.validate').click(function (e) {
        if(check_required_inputs()) {
            console.log('da is success')
            /!*  $('#clientForm').submit()*!/
        } else {
            console.log('net is not success');
            /!*$('#clientForm').submit()*!/
        }
    });*/

    function check_required_inputs() {
    // Remove all redborders
            $(".required").removeClass("redborder");
    // Check all required fields have text, you can even check other values
            $(".required").each(function() {
                if (($(this).val()) == "") $(this).addClass("redborder");
            });
    // If any input has a red border, return
        var numItems = $('.redborder').length
        return numItems
        }
    
});