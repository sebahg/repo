(function(){
    var app = angular.module('storeController',['services']);

    app.controller('StoreController', function($scope,$http, storeComicFactory, storeUserFactory) {
      $scope.users = [];
      $scope.comics = [];


      $scope.getData = function() {
        $scope.getComics();
        $scope.getUsers();
      };


      $scope.getComics = function() {
        storeComicFactory.comics().success(function(data) {
          localStorage.setItem("comics", JSON.stringify(data));
          $scope.comics = data;
        });
      };

      $scope.getUsers = function() {
        if(localStorage.getItem("users") === null){
          storeUserFactory.users().success(function(data) {
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
