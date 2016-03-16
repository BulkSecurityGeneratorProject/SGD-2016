 'use strict';

angular.module('sgd2016App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sgd2016App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sgd2016App-params')});
                }
                return response;
            }
        };
    });
