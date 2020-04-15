import { should } from 'chai';

import { Potter } from './potter';

should();

describe('Potter', () => {
    let potter: Potter;

    beforeEach(() => {
        potter = new Potter();
    });

    it('no book should cost 0e', () => {
        potter.buy().should.equal(0);
    });

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

    describe('when buying only the different books', () => {

        it('buying two different books should cost 15.2e', () => {
            potter.buy(['first_book', 'second_book']).should.equal(15.2);
        });

        it('buying three different books should cost 21.6e', () => {
            potter.buy(['third_book', 'fourth_book', 'fifth_book']).should.equal(21.6);
        });

        it('buying four different books should cost 25.6e', () => {
            potter.buy(['second_book', 'third_book', 'fourth_book', 'fifth_book']).should.equal(25.6);
        });

        it('buying five different books should cost 30e', () => {
            potter.buy(['first_book', 'second_book', 'third_book', 'fourth_book', 'fifth_book']).should.equal(30);
        });
    });

    it('buying three books including two different ones should cost 23.2e', () => {
        potter.buy(['first_book', 'first_book', 'second_book']).should.equal(23.2);
    });

    it('buying three books including two different ones should cost 23.2e', () => {
        potter.buy(['first_book', 'second_book', 'first_book']).should.equal(23.2);
    });

    it('buying three books including two different ones should cost 23.2e', () => {
        potter.buy(['third_book', 'fifth_book', 'third_book']).should.equal(23.2);
    });

    it('buying four books including three different ones should cost 29.6e', () => {
        potter.buy(['second_book', 'third_book', 'fourth_book', 'fourth_book']).should.equal(29.6);
    });

    it('buying three different ones plus two different ones should cost 36.8e', () => {
        potter.buy(['first_book', 'second_book', 'third_book', 'first_book', 'second_book']).should.equal(36.8);
    });
});
