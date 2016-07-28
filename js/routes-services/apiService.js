angular.module('translator').service('apiService', function($http){

  this.getLanguage = function(input, language, target) {
        return $http({
          method: 'GET',
          url: 'https://www.googleapis.com/language/translate/v2?key=AIzaSyBFOOMPvQmR46jODjEo2yyNqS_JmlJIy5U&source=' + language + '&target=' + target + '&q=' + input


        }).then(function(response){
          this.res = response.data.data.translations[0].translatedText;
          return this.res;
        });
      };



});
