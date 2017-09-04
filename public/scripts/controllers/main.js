'use strict';

/**
 * @ngdoc function
 * @name twitterTrendsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterTrendsApp
 */
angular.module('twitterTrendsApp')
  .controller('MainCtrl', function ($rootScope,$scope,$http,tweetService,$window) { 

  	$scope.trends = tweetService.getTrends()
            .then(function (response) {
                $scope.trends = response.data.trends[0].trends;
            }, function (error) {
                $scope.trends = 'Unable to load trends: ' + error.message;
            });
  	

    var container = angular.element(document);
	container.on('scroll', function() {
	    if (container.scrollTop() > 20) {
	        angular.element('.md-button.md-fab').css('display','block');
	    } else {
	        angular.element('.md-button.md-fab').css('display','none');
	    }
	});

	$scope.scrollToTop = function() {
		$('html,body').animate({
			scrollTop: 0
		});
	}

  });
