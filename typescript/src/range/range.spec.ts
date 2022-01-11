import { should } from 'chai';

import { Range } from './range';

should();

describe('Range', () => {
    let range: Range;

    it('can create without boundaries', () => {
        range = Range.create(1, 10);
        range.left.should.equal(1);
        range.right.should.equal(10);
    });

    it('tells if a value is contained', () => {
        Range.create(1, 3).contains(2).should.equal(true);
        Range.create(1, 3).contains(4).should.equal(false);
    });

    it('tells its size', () => {
        Range.create(1, 10).size().should.equal(10);
        Range.create(-1, 1).size().should.equal(3);
    });

    it('lists the values in the range', () => {
        Range.create(1, 4).values().should.eql([1, 2, 3, 4]);
        Range.create(5, 9).values().should.eql([5, 6, 7, 8, 9]);
    });

    it('tells its end points', () => {
        Range.create(0, 10).endPoints().should.eql([0, 10]);
        Range.create(-42, 111).endPoints().should.eql([-42, 111]);
    });

    it('tells if an interval is contained', () => {
        Range.create(1, 11).containsRange(Range.create(1, 6)).should.equal(true);
        Range.create(5, 7).containsRange(Range.create(4, 6)).should.equal(false);
    });

    it('intersects ranges', () => {
        const range = Range.create(1, 4).intersect(Range.create(2, 6));
        range.left.should.equal(2);
        range.right.should.equal(4);

        const point = Range.create(0, 2).intersect(Range.create(2, 4));
        point.left.should.equal(2);
        point.right.should.equal(2);

        (function () {
            Range.create(-2, -1).intersect(Range.create(5, 6))
        })
        .should.throw('Ranges do not intersect');
    });
});
