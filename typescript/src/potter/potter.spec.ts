import { should } from 'chai';

import { Potter } from './potter';

should();

describe('Potter', () => {
    let potter: Potter;

    beforeEach(() => {
        potter = new Potter();
    });

    it('no book should cost 0e', () => {
        potter.buy([]).should.equal(0);
    });

    describe('when buying only the same book', () => {
        
        it('any book alone should cost 8e', () => {
            potter.buy(['first_book']).should.equal(8);
            potter.buy(['second_book']).should.equal(8);
            potter.buy(['third_book']).should.equal(8);
            potter.buy(['fourth_book']).should.equal(8);
            potter.buy(['fifth_book']).should.equal(8);
        });
    
        it('buying two times the same book should cost 16e', () => {
            potter.buy(['first_book', 'first_book']).should.equal(16);
        });
    
        it('buying three times the same book should cost 24e', () => {
            potter.buy(['first_book', 'first_book', 'first_book']).should.equal(24);
        });
    
        it('buying five times the same book should cost 40e', () => {
            potter.buy(
                ['first_book', 'first_book', 'first_book', 'first_book', 'first_book']
            ).should.equal(40);
        });
    });

    describe('when buying only one collection of different books', () => {
        
        it('buying a 2-books collection should cost 15.2e', () => {
            potter.buy(['first_book', 'second_book']).should.equal(15.2);
        });

        it('buying a 3-books collection should cost 21.6e', () => {
            potter.buy(['third_book', 'fourth_book', 'fifth_book']).should.equal(21.6);
        });

        it('buying a 4-books collection should cost 25.6e', () => {
            potter.buy(['second_book', 'third_book', 'fourth_book', 'fifth_book']).should.equal(25.6);
        });

        it('buying a 5-books collection should cost 30e', () => {
            potter.buy(['first_book', 'second_book', 'third_book', 'fourth_book', 'fifth_book']).should.equal(30);
        });
    });

    describe('when buying one collection + some identical books', () => {

        it('buying a 2-books collection + 1 identical should cost 23.2e', () => {
            potter.buy(['first_book', 'first_book', 'second_book']).should.equal(23.2);
        });
    
        it('buying a 3-books collection + 1 identical should cost 29.6e', () => {
            potter.buy(['second_book', 'third_book', 'fourth_book', 'fourth_book']).should.equal(29.6);
        });
    });

    describe('when buying multiple collections', () => {

        it('buying a 3-books collection + a 2-books collection should cost 36.8e', () => {
            potter.buy(['first_book', 'second_book', 'third_book', 'first_book', 'second_book']).should.equal(21.6 + 15.2);
        });

        it('buying one collection of each (2, 3, 4, 5) + one identical should cost ?e', () => {
            potter.buy([
                'first_book', 'second_book', 'third_book', 'fourth_book', 'fifth_book',
                'first_book', 'second_book', 'third_book', 'fourth_book',
                'first_book', 'second_book', 'third_book',
                'first_book', 'second_book',
                'first_book',
            ]).should.equal(30 + 25.6 + 21.6 + 15.2 + 8);
        });
    });

    describe('edge cases', () => {

        it('should prefer two 4-books collections over a 3-books one + a 5-books one', () => {
            potter.buy([
                'first_book', 'second_book', 'third_book', 'fifth_book',
                'first_book', 'second_book', 'third_book', 'fourth_book',
            ]).should.equal(2 * 25.6);
        });
    });
});
