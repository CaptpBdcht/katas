// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';

import { GameOfLife } from './game-of-life';

should();

describe('Game of life should', () => {

    const sut: GameOfLife = new GameOfLife();

    it('keep state when every cell is dead', () => {
        const current = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell when is has zero alive neighbor', () => {
        const current = [
            [ '*', '.' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell when it has one alive neighbor', () => {
        const current = [
            [ '*', '*' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell when it has four alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '*', '*' ],
            [ '.', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '.', '.', '.' ],
            [ '.', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('keep an alive cell when it has two or three alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '*', '.' ],
            [ '*', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '*', '*', '.' ],
            [ '*', '*', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('revive a dead cell with exactly three alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '.', '.' ],
            [ '.', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '.', '*', '.' ],
            [ '.', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('correctly compute next state following all rules', () => {
        const current = [
            [ '.', '.', '*', '.' ],
            [ '.', '*', '.', '*' ],
            [ '*', '*', '.', '*' ],
            [ '.', '*', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.', '.' ],
            [ '.', '.', '*', '.' ],
            [ '.', '*', '*', '.' ],
            [ '.', '*', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });
});
