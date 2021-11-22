import { should } from 'chai';

import { Character, Warrior } from './character';

should();

describe('Character should', () => {
    it('has a name and health pool', () => {
        let character: Character = new Character();
        character.name.should.exist;
        character.health.should.exist;
    });

    it('attacks other characters', () => {
        // GIVEN
        let me = new Character();
        let other = new Character();
        // WHEN
        me.attack(other);
        // THEN
        me.health.value.should.equal(100)
        other.health.value.should.equal(99)
    })
});

describe('Warrior should', () => {
    it('damages between 0 and 9', () => {
        let warrior: Warrior = new Warrior();
        let other: Character = new Character();

        warrior.attack(other);
        other.health.value.should.equal(96)
    });

    it('heal himself for 1', () => {
        let warrior: Warrior = new Warrior();
        let other: Character = new Character();
        other.attack(warrior);
        warrior.health.value.should.equal(99);

        warrior.heal(warrior);
        warrior.health.value.should.equal(100);

    });
});