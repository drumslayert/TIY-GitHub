
// alert("Im working");



$("li p").hide();
$('li').click(function(e){
    if (e.target == this)
    {
     $(this).children().slideToggle();
    }
});

//
// $.getJSON("../apis/github/users/drumslayert/drumslayert.json", function(data) {
// console.log('im here');
//   var items = [];
//   $.each(data, function(key, val) {
//     items.push("<span fullname='" + key + "'>" + val + "</span>");
//   });
// });


  $.getJSON('../../apis/github/users/drumslayert/drumslayert.json', function(data) {
     $('.fullname').html('<span>' + data.name + '</span>'); //success!!!!
     $('.username').html('<span>' + data.login + '</span>');
     $('.details').html('<li>' + data.company + '</li>');
     $('.location').html('<li>' + data.location + '</li>');
     $('.email').html('<li>' + data.email + '</li>');
     $('.blog').html('<li>' + data.blog + '</li>');
     $('.created').html('<li>' + data.created_at + '</li>');
});

// http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm
