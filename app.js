
var app = angular.module('comicsApp',['ngRoute','userController','loginController','mainController','storeController','registerController']);

app.config(['$controllerProvider',function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    redirectTo: '/login'
  })
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'views/login.html'
  })
  .when('/register', {
    controller: 'RegisterController',
    templateUrl: 'views/register.html'
  })
  .when('/main', {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/404', {
    controller: 'MainController',
    templateUrl: 'views/404.html'
  })
  .otherwise({
    redirectTo: '/404'
  });

});

app.directive('footerDescription',function() {
  return {
    restrict: "E",
    templateUrl: "views/footer.html"
  };
});

app.directive('userProfile',function() {
  return {
    restrict: "E",
    templateUrl: "views/userProfile.html"
  };
});

app.directive('profiles',function() {
  return {
    restrict: "E",
    templateUrl: "views/profiles.html"
  };
});

app.directive('comics',function() {
  return {
    restrict: "E",
    templateUrl: "views/comics.html"
  };
});

app.directive('carrousel',function() {
  return {
    restrict: "E",
    templateUrl: "views/carrousel.html"
  };
});
