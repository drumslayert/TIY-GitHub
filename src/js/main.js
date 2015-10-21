
    $("ul.tabs li a.button").on("click",function(){
      $(this).addClass("active").siblings().removeClass("active");
      $($(this).attr("href")).addClass("active").siblings().removeClass("active");

    }); (jQuery.noConflict())

;(function(){
  angular.module("Github", [ ])
    .run(function($http, $rootScope){
    $http.get('/apis/github/users/drumslayert/drumslayert.json')
     .then(function(response){
      $rootScope.user = response.data;
     });
    })
});
