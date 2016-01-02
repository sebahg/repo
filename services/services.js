(function() {
  var app = angular.module('services',[]);

  app.value('storeUrl','stores');

  app.factory('storefactory', function($http, storeUrl) {
    return {
      users : function() {
        return $http.get( storeUrl + '/store-users.json')}
      }
  });

})();
