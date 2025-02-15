
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

  


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has('success') && urlParams.get('success')) {
              Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  showCloseButton: true,
                  text: urlParams.get('message'),
                  footer: 'Copyright 2021 &copy Milanio Development - All right reserved.'
              }).then((result) => {
                  window.location.href = `/`;
              })
          }
          if (urlParams.has('error') && urlParams.get('error')) {
              Swal.fire({
                  icon: 'error',
                  title: 'An Error occurred!',
                  text: urlParams.get('message'),
                  showCloseButton: true,
                  footer: 'Copyright 2021 &copy Mianio- All right reserved.'
              }).then((result) => {
                  window.location.href = `/`;
              })
          }




    

