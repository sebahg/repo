(function() {
  var app = angular.module('directives',[]);

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

})();
