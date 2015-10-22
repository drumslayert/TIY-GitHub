
    $("ul.tabs li a.button").on("click",function(){
      $(this).addClass("active").siblings().removeClass("active");
      $($(this).attr("href")).addClass("active").siblings().removeClass("active");

    }); (jQuery.noConflict())

;(function(){ //IIFE
  angular.module('Github', [ ])
    .run(function($http, $rootScope){
      // console.log("test bullet")
      // $rootScope.login = "Test";

    $http.get('/apis/github/users/drumslayert/drumslayert.json')
     .then(function(response){
      $rootScope.user = response.data;


      // {
      //   login: response.data.login,
      //   body: response.data.body,
      // }
    });
    })

    .run(function($http, $rootScope){
      $http.get('/apis/github/users/drumslayert/issues.json')
        .then(function(response){
          // console.log(response.data[0].body);
        $rootScope.comments = response.data[0];
        // {
        // login:  response.data.login,
        // body: response.data.body,
        // }

        });
    })
})();// End IIFE
