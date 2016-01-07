(function(){
    var app = angular.module('mainController',['ui.bootstrap']);

    app.controller('MainController', function($scope, $location) {
      $scope.user = JSON.parse(sessionStorage.getItem("user"));

      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image:"images/AvengervsXmen.jpg"
        },
        {
          image:"images/Civil-War.jpg"
        },
        {
          image:"images/Infinity.jpg"
        },
        {
          image:"images/Star-Wars.jpg"
        },
        {
          image:"images/Spider-Verse.jpg"
        },
        {
          image:"images/Secret-Wars.jpg"
        }
      ];

      if($scope.user == null){
        $location.url("/login");
      }

      $scope.orden= false;
      $scope.campo = "name";
      $scope.filtro = "";

      $scope.qualification = function() {
        $scope.orden= true;
        $scope.campo = "qualification";
      };

      $scope.searches = function() {
        $scope.orden= true;
        $scope.campo = "searches";
      };

      $scope.recommended = function() {
        $scope.orden= true;
        $scope.campo = "recommended";
      };

      $scope.scienceFiction = function() {
        $scope.filtro = "science fiction";
      };

      $scope.superHeroes = function() {
        $scope.filtro = "superheroes";
      };

      $scope.borrowed = function(comic) {
        if(comic.available){
          return "available";
        }else{
          return "borrowed";
        };
      };

    //  $scope.user = JSON.parse(sessionStorage.getItem("user"));
      $scope.showProfile = false;
      $scope.showProfiles = false;
      $scope.showComics = true;

      $scope.home = function() {
        $scope.showProfiles = false;
        $scope.showProfile = false;
        $scope.showComics = true;
      };

      $scope.isAdmin = function() {
        return ($scope.user.role == "admin");
      };

      console.log($scope.isAdmin());

      $scope.showAdminUsersAction = function() {
        $scope.showProfiles = true;
        $scope.showProfile = false;
        $scope.showComics = false;
      };

      $scope.showProfileAction = function() {
        $scope.showProfile = true;
        $scope.showProfiles = false;
        $scope.showComics = false;
      };

      $scope.logout = function() {
        sessionStorage.clear();
        $location.url('/login');
      };

    });

})();
