(function(){
  var app = angular.module('userController',[]);

  app.controller('UserController', function($scope, $location) {
    $scope.user = JSON.parse(sessionStorage.getItem("user"));
    if($scope.user === null){
      $location.url("/login");
    };

    $scope.userLogged = function() {
      return ($scope.user != null);
    };
  });

})();
