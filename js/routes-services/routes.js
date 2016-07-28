angular.module('translator').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
                .state('home', {
                  url: '/',
                  templateUrl: 'views/home.html'
                      })
                .state('Translate',{
                  url:'/translate',
                  templateUrl: 'views/translateTmpl.html'
                      });




    $urlRouterProvider.otherwise('/');

});
