(function(module){
	'use strict';

	module.filter('convertCurrency',['currencyFilter','currencyService','CURRENCIES',function(currencyFilter,currencyService,CURRENCIES){

		return function(value, currencyName){

			var convertedAmount = currencyService.convert(value,currencyName);

			return currencyFilter(convertedAmount,CURRENCIES[currencyName].symbol);
		};
	}]);

}(angular.module('app')));