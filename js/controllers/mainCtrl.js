angular.module('translator').controller('mainCtrl', function($scope, apiService, $state){

  $scope.lang = apiService.getLanguages();

  $scope.getLanguage = function(input, source, target) {
    apiService.getLanguage(input, source, target).then(function (response) {
      $scope.data = response;
    })
  }

});
