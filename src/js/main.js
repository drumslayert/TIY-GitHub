
// alert("Im working");

//http://api.jquery.com/jquery.getjson/

//
// $.getJSON( "octocat.json", function() {
//   console.log( "success" );
// })

// $('#tabs').on('click', function() {
//   var active_button = $('.tabs li a.active');
// });
//


// $(document).ready(function(){
//   $("li p").hide();
//   $("li").css({"cursor":"pointer"});
//   $(this).on('click',function(){
//      $("p").slideToggle();
//   });
// });


$("li p").hide();
$('li').click(function(e){
    if (e.target == this)
    {
     $(this).children().slideToggle();
    }
});
// $.getJSON( "octocat.json", function( json ) {
//   console.log( "JSON Data: " + json.users[ 3 ].name );
//  });
//
//
// $.ajax('../api/github/users/octocat.json').then(function(data){
//   console.log(arguments);
// });
