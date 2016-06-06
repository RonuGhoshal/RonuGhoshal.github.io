$(document).ready(function(){
  $(function(){
    $('.about-link').click(function(){
      $("html,body").animate({scrollTop:$("#about_me").offset().top},"500");return false});
    $('.portfolio-link').click(function(){
      $("html,body").animate({scrollTop:$("#portfolio").offset().top},"500");return false});
    $('.contact-link').click(function(){
      $("html,body").animate({scrollTop:$("#contact").offset().top},"500");return false});
  });
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
});
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.dropdown-button').dropdown();
});

$(document).ready(function() {
  var form = $('#ajax-contact');
  var formMessages = $('#form-messages');

  $(form).submit(function(event) {
    event.preventDefault();
    var formData = $(form).serialize();

    $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
    }).done(function(resp){
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');
        $(formMessages).text(response);
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        }).fail(function(data) {
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');
          if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
          } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
      });
    });
  });