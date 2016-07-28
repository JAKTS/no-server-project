angular.module('translator').controller('mainCtrl', function($scope, apiService, $state){



$scope.getLanguage = function(input, language, target) {
  apiService.getLanguage(input, language, target).then(function (response) {
    $scope.data = response;
  })
}

$scope.changeState = function (stateName) {
  $state.go(stateName);
  $scope.data = "";
}

$scope.lang = [
  {name:"Danish", language: "en", target: "da"},
  {name:"German", language: "en", target: "de"},
  {name: "Korean", language: "en", target: "ko"},
  {name: "Nepali", language: "en", target: "ne"},
  {name: "Spanish", language: "en", target: "es"}
]

});
