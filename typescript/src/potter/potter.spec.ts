import { should } from 'chai';

import { Potter } from './potter';

should();

describe('Potter', () => {
    let potter: Potter;

    beforeEach(() => {
        potter = new Potter();
    });

    it('no book should cost 0', () => {
        potter.price([]).should.equal(0);
    });

    describe('when only identical books', () => {

        it('one book should cost 8', () => {
            potter.price([1]).should.equal(8);
        });
    
        it('two books should cost 16', () => {
            potter.price([1, 1]).should.equal(16);
        });
    });

    describe('when only one collection', () => {

        it('a 2-books collection should cost 15.2', () => {
            potter.price([1, 2]).should.equal(15.2);
        });

        it('a 3-books collection should cost 21.6', () => {
            potter.price([1, 2, 3]).should.equal(21.6);
        });

        it('a 4-books collection should cost 25.6', () => {
            potter.price([1, 2, 3, 4]).should.equal(25.6);
        });

        it('a 5-books collection should cost 30', () => {
            potter.price([1, 2, 3, 4, 5]).should.equal(30);
        });
    });

    it('a 2-books collection should cost 15.2', () => {
        potter.price([1, 1, 2]).should.equal(23.2);
    });

    it('two 2-books collection should cost 30.4', () => {
        potter.price([1, 2, 1, 2]).should.equal(30.4);
    });

    it('should favor two 4-books collections over a 5-books one + a 3-books one', () => {
        potter.price([
            1, 2, 3, 4,
            2, 3, 4, 5
        ]).should.equal(51.2);
    });
});
