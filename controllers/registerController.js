(function() {
  var app = angular.module('registerController',[]);

  app.controller('RegisterController', function($scope, $location) {
    $scope.u = {
      "user" : '',
      "password" : '',
      "name" : '',
      "lastName" : '',
      "email": '',
      "role":''
    };

    $scope.admin = false;
    $scope.userExist = false;

    $scope.register = function(){
        $scope.userExist = false;

      //Busco el usuario en la lista de usuarios guardados
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].user == $scope.u.user) {
              $scope.userExist = true;
              break;
        };
      };

      if(!$scope.userExist){
        if($scope.admin){
          $scope.u.role = "admin";
        }else {
          $scope.u.role = "user";
        }
        $scope.users.push($scope.u);
        localStorage.setItem("users",JSON.stringify($scope.users));
        $location.url('/login');
      };
    };
  });

})();
