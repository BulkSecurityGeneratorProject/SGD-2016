'use strict';

angular.module('sgd2016App')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('sgd2016App.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });