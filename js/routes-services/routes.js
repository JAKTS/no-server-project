angular.module('translator').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
                .state('home', {
                  url: '/',
                  templateUrl: 'views/home.html'
                      })
                .state('Korean',{
                  url:'/Korean',
                  templateUrl: 'views/korea.html'
                      })
                .state('German',{
                  url:'/German',
                  templateUrl: 'views/german.html'

                      })
                .state('Nepali',{
                  url:'/Nepali',
                  templateUrl:'views/nepali.html'
                      })
                .state('Danish',{
                        url:'/Danish',
                        templateUrl:'views/Danish.html'
                      })
                .state('Spanish',{
                  url:'/Spanish',
                  templateUrl:'views/Spanish.html'
                });




    $urlRouterProvider.otherwise('/');

});
