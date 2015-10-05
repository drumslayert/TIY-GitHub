
// alert("Im working");

//http://api.jquery.com/jquery.getjson/

//
// $.getJSON( "octocat.json", function() {
//   console.log( "success" );
// })



$.getJSON( "octocat.json", function( json ) {
  console.log( "JSON Data: " + json.users[ 3 ].name );
 });


// $.ajax('../api/github/users/octocat.json').then(function(data){
//   console.log(arguments);
// });
//help
