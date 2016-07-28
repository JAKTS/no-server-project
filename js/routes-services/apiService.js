angular.module('translator').service('apiService', function($http){

  var languages = [
    {name:"English", languageCode: "en"},
    {name:"Danish", languageCode: "da"},
    {name:"German", languageCode: "de"},
    {name: "Korean", languageCode: "ko"},
    {name: "Nepali", languageCode: "ne"},
    {name: "Spanish", languageCode: "es"}
  ];

  this.getLanguages = function () {
    return languages;
  }

  this.getLanguage = function(input, source, target) {
        for (var i = 0; i < languages.length; i++) {
          if (languages[i].name === source) {
            source = languages[i].languageCode;
          }
          if (languages[i].name === target) {
            target = languages[i].languageCode;
          }
        }
        return $http({
          method: 'GET',
          url: 'https://www.googleapis.com/language/translate/v2?key=AIzaSyBFOOMPvQmR46jODjEo2yyNqS_JmlJIy5U&source=' + source + '&target=' + target + '&q=' + input
        }).then(function(response){
          this.res = response.data.data.translations[0].translatedText;
          return this.res;
        });
      };



});
