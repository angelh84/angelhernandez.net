(function (cookieBakery) {
    $('.login-submit-button').on('click', function (e) {
        e.preventDefault();
        var email = $('.email').val();
        var pass = $('.pass').val();
        
        if (email === 'sales@midigator.com' && pass === 'sales123') {
            cookieBakery.bake('demo=true', 1);
            window.location.href = 'sales/30/loading.html'
        } else if (email === 'prevention@midigator.com' && pass === 'prevention123') {
            cookieBakery.bake('demo=true', 1);
            window.location.href = 'prevention/30/loading.html'
        } else {
            $('.growler').slideDown();
        }
    });
})(cookieBakery)
