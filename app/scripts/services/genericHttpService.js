(function(module){
	'use strict';

	module.factory('genericHttpService',['$http',function($http){

		function get(serviceUrl){

			return $http.get(serviceUrl).then(function(response){
				return response.data;
			});
		}

		return {
			'get': get
		};

	}]);

}(angular.module('app')));