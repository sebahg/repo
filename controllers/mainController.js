(function(){
    var app = angular.module('mainController',['ui.bootstrap']);

    app.controller('MainController', function($scope, $location) {
      $scope.user = JSON.parse(sessionStorage.getItem("user"));

      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image:"img/AvengervsXmen.jpg"
        },
        {
          image:"img/Civil-War.jpg"
        },
        {
          image:"img/Infinity.jpg"
        },
        {
          image:"img/Star-Wars.jpg"
        },
        {
          image:"img/Spider-Verse.jpg"
        },
        {
          image:"img/Secret-Wars.jpg"
        }
      ];

      if($scope.user == null){
        $location.url("/login");
      }

      $scope.orden= false;
      $scope.campo = "name";
      $scope.filtro = "";

      $scope.filter = function(filterName){
        $scope.filtro = filterName;
      };

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
