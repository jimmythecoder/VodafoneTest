'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var MainCtrl,
    scope;

  var celebMockData = {
    'usDollarValue': '1',
    'australianDollarValue':'0.78',
    'euroValue':'0.92',
    'celebrityList': [
    {
      'rank': 1,
      'name': 'John Walton',
      'netWorth': 100,
      'age': '50',
      'country': 'United States'
    },
    {
      'rank': 2,
      'name': 'Some Kiwi',
      'netWorth': 1000,
      'age': '75',
      'country': 'Australia'
    },
    {
      'rank': 3,
      'name': 'Some Aussi',
      'netWorth': 200,
      'age': '100',
      'country': 'Australia'
    }]
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      'celebrityRichListData': celebMockData
    });
  }));



  it('should load the celeb data', function () {
    expect(scope.celebrityRichList).toEqual(celebMockData);
  });  

  it('should set some default search options', function () {
    expect(scope.search.currency).toBe('USD');
    expect(scope.search.orderBy).toBe('rank');
    expect(scope.search.filters.country).toBeNull();
  });

  it('should contain a list of unique countries', function () {
    expect(scope.celebrityCountries.length).toBe(2);
  });  

  it('should sort an array alphabetically', function () {
    expect(scope.sortArrayByAlpha(['John Walton','john Walton','Simon Carr','Simon Wall'])).toEqual(['John Walton', 'Simon Carr', 'Simon Wall', 'john Walton']);
  });    
});
