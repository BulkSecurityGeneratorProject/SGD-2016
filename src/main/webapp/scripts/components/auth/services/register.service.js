'use strict';

angular.module('sgd2016App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


