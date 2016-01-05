(function() {
  var app = angular.module('services',[]);

  app.value('storeUrl','stores');

  app.factory('storeUserFactory', function($http, storeUrl) {
    return {
      users : function() {
        return $http.get( storeUrl + '/store-users.json')}
      }
  });

  app.factory('storeComicFactory', function($http, storeUrl) {
    return {
      comics : function() {
        return $http.get( storeUrl + '/store-comics.json')}
      }
  });

})();
