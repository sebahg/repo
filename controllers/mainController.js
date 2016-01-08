(function(){
    var app = angular.module('mainController',['ui.bootstrap']);

    app.controller('MainController', function($scope, $location) {
      $scope.user = JSON.parse(sessionStorage.getItem("user"));

      // Datos para el corrusel
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
      $scope.filtroAdvance = "";

      $scope.filter = function(filterName){
        $scope.campo = "name";
        $scope.filtro = filterName;
      };

      $scope.filterAdvance = function(filterName){
        $scope.campo = "";
        $scope.filtroAdvance = filterName;
      };

      $scope.orden = function(order) {
        if(order == ''){
          $scope.order= false;
          $scope.campo = '';
        }else{
          $scope.order= true;
          $scope.campo = order;
        }
      };

      // Function para devolver String sobre el estado del comic
      $scope.borrowed = function(comic) {
        if(comic.available){
          return "available";
        }else{
          return "borrowed";
        };
      };

      // variables para controlar que se muestra en pantalla
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
