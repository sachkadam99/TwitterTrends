'use strict';

/**
 * @ngdoc overview
 * @name twitterTrendsApp
 * @description
 * # twitterTrendsApp
 *
 * Main module of the application.
 */
angular
  .module('twitterTrendsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMaterial',
    'tweetService',
    'tweetFactory',
    'AppLoaders'
  ])
  

  .config(function ($stateProvider,$urlRouterProvider,$httpProvider) {
    $urlRouterProvider.otherwise('/trends');


    $stateProvider

    .state('trends', {
      url : '/trends',
      views : {
        'content@' : {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
        }
      }
    })
    .state('tweet', {
      url : '/tweet',
      params: {
            trendName: null,
            trendNameFull : null
      },
      views : {
        'content@' : {
          templateUrl: 'views/tweet.html',
          controller: 'TweetsCtrl',
        }
      }
    })

    //$httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('httpInterceptor');
  });
