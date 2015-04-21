/**
 * @ngdoc overview
 * @name Vodafone Code Test
 * @author James Harris
 * @description
 * # The vodafone code test, listing of highest paid celebs
 *
 */
(function(angular){
  'use strict';

  angular.module('app', [
      'ngAnimate',
      'ngRoute',
      'ngTouch',
      'ngSanitize'
    ])
    .config(['$routeProvider',function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          resolve: {
            'celebrityRichListData': ['genericHttpService','SERVICE_URLS', function(genericHttpService,SERVICE_URLS){
              return genericHttpService.get(SERVICE_URLS.celebrityRichList);
          }]}
        })
        .otherwise({
          redirectTo: '/'
        });
    }])

    //Config maps
    .value('SERVICE_URLS',{
      'celebrityRichList': 'mock/celebrityRichList.json' //If we had a prod URL we would have seperate URLs per environment
    })
    .value('CURRENCIES',{
      'USD': {'label': 'US Dollar', 'rate': 1.0, 'symbol': '$USD '},
      'EUR': {'label': 'Euro', 'rate': 1.0, 'symbol': '&euro;EUR '},
      'AUD': {'label': 'Australian Dollar', 'rate': 1.0, 'symbol': '$AUD '}
    })
    .value('SORT_FIELDS',[
      {'label': 'Rank','value': 'rank'},
      {'label': 'Name','value': 'name'},
      {'label': 'Age', 'value': 'age'}
    ]);

}(angular));