'use strict';

/**
 * @ngdoc overview
 * @name shoppingCartApp
 * @description
 * # shoppingCartApp
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
    'tweetFactory'
  ])
  

  .config(function ($stateProvider,$urlRouterProvider) {
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
  });
