(function(module,_){
	'use strict';

	module.factory('currencyService',['CURRENCIES',function(CURRENCIES){

		var currencyList = CURRENCIES;

		function update(celebrityRichListData){

			currencyList.USD.rate = parseFloat(celebrityRichListData.usDollarValue);
			currencyList.AUD.rate = parseFloat(celebrityRichListData.australianDollarValue);
			currencyList.EUR.rate = parseFloat(celebrityRichListData.euroValue);
		}

		function getAsOptionsList(){
			var options = [];

			_.each(currencyList,function(item, key){
				options.push({'label': item.label, 'value': key});
			});

			return options;
		}

		function convert(amount, toCurrency){

			amount = parseFloat(amount);

			if(!currencyList[toCurrency]){
				throw new Error('Invalid currency given');
			}

			return amount / currencyList[toCurrency].rate;
		}

		return {
			'update': update,
			'getAsOptionsList': getAsOptionsList,
			'convert': convert
		};

	}]);

}(angular.module('app'),window._));