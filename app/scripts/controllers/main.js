/**
 * @ngdoc Controller
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Main controller for the primary route
 */
(function(app,_){
	'use strict';

	app.controller('MainCtrl', ['$scope','celebrityRichListData','currencyService','SORT_FIELDS',function ($scope, celebrityRichListData, currencyService,SORT_FIELDS) {
	    
	    //Setup default filter values
	    $scope.search = {
	    	'filters':{
	    		'country': null,
	    		'searchText': null
	    	},
	    	'currency': 'USD',
	    	'orderBy': 'rank'
	    };

	    $scope.orderByOptions = SORT_FIELDS;

	    //Update our currency values based on the json service data
	    currencyService.update(celebrityRichListData);

	    $scope.getUniqueCountryListFromCelebrityList = function(celebrityList){
	    	return  _.uniq(_.map(celebrityList, function(item){
		    	return item.country;
		    }));
	    };

		$scope.sortArrayByAlpha = function(inputArr){
			return inputArr.sort(function(a,b){
		    	return a.localeCompare(b);
		    });
	    };

	    //Extract all countries from the list in an array to show in our select
	    var celebrityCountries 		= $scope.getUniqueCountryListFromCelebrityList(celebrityRichListData.celebrityList);

	    //Get a unique alphabetically sorted list of countries. Assign to scope last so we dont trigger any watches
	    $scope.celebrityCountries 	= $scope.sortArrayByAlpha(celebrityCountries);

	    $scope.currencies 			= currencyService.getAsOptionsList();

	    $scope.celebrityRichList 	= celebrityRichListData;
	}]);
	
}(angular.module('app'),window._));