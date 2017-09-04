angular
  .module('twitterTrendsApp').factory('httpInterceptor', function ($q, $window,AppFullPageLoader) {
  var numLoadings = 0;

    return {
        request: function (config) {
        	
            numLoadings++;

            // Show loader
            AppFullPageLoader.show();
            return config || $q.when(config);          

        },
        response: function (response) {

            if ((--numLoadings) === 0) {
                // Hide loader
                AppFullPageLoader.hide();
            }

            return response || $q.when(response);

        },
        responseError: function (response) {

            if (!(--numLoadings)) {
                // Hide loader
                AppFullPageLoader.hide();
            }

            return $q.reject(response);
        }
    };
});
