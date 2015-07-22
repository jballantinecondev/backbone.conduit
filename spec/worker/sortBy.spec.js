'use strict';

var _ = require('underscore');

var workerSort = require('./../../src/worker/sortBy');

describe("The worker/sort module", function() {
    it('provides the name as "sortBy"', function() {
        expect(workerSort.name).to.equal("sortBy");
    });

    describe('when data is available', function() {
        var context, boundSort;
        beforeEach(function() {
            context = {
                data: this.getSampleData()
            };

            boundSort = _.bind(workerSort.method, context);
        });

        it('sorts by property ascending', function() {
            boundSort({
                comparator: 'name'
            });

            expect(context.data[1]).to.have.property('name', 'three');
        });

        it('sorts by a property descending when requested', function() {
            boundSort({
                comparator: 'name',
                direction: 'desc'
            });

            expect(context.data[2]).to.have.property('name', 'one');
        });
    });
});