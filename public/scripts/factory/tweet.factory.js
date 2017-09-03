angular.module('tweetFactory', [])
    .factory('tweetFactory', function($http) {

    return {
        getTrends: function(file){
            return $http.get( file );

        },

        getTweets : function(source) {
            return $http.get( source );
        }
    }
});