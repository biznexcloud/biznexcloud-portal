(function($) {
    'use strict';

    var form = $('#contact-form');
    var formMessages = $('#form-messages');
    var recipient = 'biznexcloud.com@gmail.com';

    $(form).submit(function(e) {
        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var phone = $.trim($('#phone').val());
        var company = $.trim($('#website').val());
        var message = $.trim($('#message').val());

        e.preventDefault();

        if (!name || !email || !phone || !company || !message) {
            $(formMessages).removeClass('success').addClass('error');
            $(formMessages).text('Please complete all fields before sending your inquiry.');
            return;
        }

        var subject = encodeURIComponent('New inquiry from ' + name);
        var body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Phone: ' + phone + '\n' +
            'Company / Website: ' + company + '\n\n' +
            'Project details:\n' + message
        );

        window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

        $(formMessages).removeClass('error').addClass('success');
        $(formMessages).text('Your email client is opening with a pre-filled inquiry to Biznex Cloud.');

        $('#name, #email, #phone, #website, #message').val('');
    });

})(jQuery);