(function(){
    var app = angular.module('storeController',['services']);

    app.controller('StoreController', function($scope,$http, storefactory) {
      $scope.users = [];

      $scope.getUsers = function() {
        console.log(localStorage.getItem("users"));
        if(localStorage.getItem("users") === null){
          storefactory.users().success(function(data) {
              localStorage.setItem("users",JSON.stringify(data));
              $scope.users = data;
          });
        }else{
          if($scope.users.length == 0){
            $scope.users = JSON.parse(localStorage.getItem("users"));
          }
        };
      };

    });

})();
