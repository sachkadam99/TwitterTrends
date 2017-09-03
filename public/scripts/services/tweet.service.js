var tweetService = angular.module('tweetService', []);

tweetService.service('tweetService', ['$http', '$filter','$rootScope','tweetFactory', function($http, $filter,$rootScope,tweetFactory) {


        this.getTrends = function() {
            var SOURCE = '/api/trends/' + '1940345';
            return tweetFactory.getTrends(SOURCE);
        };

        this.getAllTweets = function(query) {
            var SOURCE = '/api/tweets/' + query;
            return tweetFactory.getTweets(SOURCE);
        }

        

}]);