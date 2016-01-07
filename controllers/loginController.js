(function() {
  var app = angular.module('loginController',['ngMessages']);

  app.controller('LoginController', function($scope, $location) {
    $scope.user = {user : '',
                  password : ''};

    $scope.autFail = false;

    $scope.login = function(){
      //Busco el usuario en la lista de usuarios guardados
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].user == $scope.user.user) {
          if($scope.users[i].password == $scope.user.password) {
            sessionStorage.setItem("user",JSON.stringify($scope.users[i]));
            $scope.user = $scope.users[i];
            $location.url('/main');
          };
          break;
        };
      };

      $scope.autFail = true;
    };

  });

})();
