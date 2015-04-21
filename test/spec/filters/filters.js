(function () {
    'use strict';

    describe('filters', function () {

        beforeEach(module('app'));

        describe('convertCurrencyFilter', function(){

            var filter;
            beforeEach(inject(function($filter){
                filter = $filter('convertCurrency');
            }));

            it('should prepend the correct currency symbol and convert the currency', function(){
                expect(filter(1000.50,'USD')).toBe('$USD 1,000.50');
                expect(filter(1000.501,'AUD')).toBe('$AUD 1,282.69');
                expect(filter(9999990.50,'EUR')).toBe('&euro;EUR 10,869,554.89');
            });
        });
    });
}());