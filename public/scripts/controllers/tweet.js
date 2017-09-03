'use strict';

/**
 * @ngdoc function
 * @name twitterTrendsApp.controller:TweetsCtrl
 * @description
 * # TweetsCtrl
 * Controller of the twitterTrendsApp
 */
angular.module('twitterTrendsApp')
  .controller('TweetsCtrl', function ($scope,$http,tweetService,$window,$state,$stateParams,$sce) {

  	if(!$stateParams.trendName) {
       $state.go('trends');
    }

    $scope.trendNameFull = $sce.trustAsHtml($stateParams.trendNameFull);   

    $scope.tweets = tweetService.getAllTweets($stateParams.trendName)
      .then(function (response) {
                $scope.tweets = response.data.trends.statuses;
            }, function (error) {
                $scope.tweets = 'Unable to load tweets: ' + error.message;
            });

    

  });


angular.module('twitterTrendsApp').filter('dateFormat', function($filter)
{
  return function(input)
  {
    if(input == null){ return ""; } 
 
    var _date = $filter('date')(new Date(input), 'MMM dd');
 
    return _date.toUpperCase();

  };
});
