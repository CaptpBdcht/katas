import { should } from 'chai';

import { BowlingMoc } from './bowling-moc';

should();

describe('BowlingMoc', () => {

    let game: BowlingMoc;

    beforeEach(() => {
        game = new BowlingMoc();
    });

    it('gutter game', () => {
        rollMany(20, 0)
        game.score().should.equal(0)
    });

    it('all ones', () => {
        rollMany(20, 1)
        game.score().should.equal(20)
    });

    it('one spare', () => {
        game.roll(7);
        game.roll(3); // spare
        game.roll(4);
        rollMany(17, 0)
        game.score().should.equal(18)
    })

    function rollMany(steps: number, pins: number) {
        for (let i = 0; i < steps; i++)
            game.roll(pins)
    }
});
