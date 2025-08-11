$(document).ready(function(){

    function validateForm() {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var subject = $('#subject').val().trim();
        var message = $('#message').val().trim();
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var mobilePattern = /^[0-9]{10}$/;

        if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
            showMessage('Please fill in all fields.', 'danger');
            return false;
        }

        if (!email.match(emailPattern)) {
            showMessage('Please enter a valid email.', 'danger');
            return false;
        }

        if (!phone.match(mobilePattern)) {
            showMessage('Please enter a valid 10-digit mobile number.', 'danger');
            return false;
        }

        return true;
    }

    function showMessage(message, type) {
        $('#formMessage').removeClass().addClass('alert alert-' + type)
            .text(message).fadeIn();

        setTimeout(function(){
            $('#formMessage').fadeOut();
        }, 3000);
    }

    $('#contactForm').submit(function(e){
        e.preventDefault();

        if (!validateForm()) return;

        $.ajax({
            type: 'POST',
            url: 'submit.php', // PHP file
            data: $(this).serialize(),
            success: function(response){
                if (response.trim() === 'success') {
                    showMessage('Thank you! Your message has been sent.', 'success');
                    $('#contactForm')[0].reset();
                } else {
                    showMessage('Error sending message. Try again.', 'danger');
                }
            },
            error: function(){
                showMessage('Something went wrong!', 'danger');
            }
        });
    });
});