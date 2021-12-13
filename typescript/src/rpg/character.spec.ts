import { should } from 'chai';

import { Character } from './character';
import {
  TooMuchLifeError,
  CannotAutoAttackError,
  CannotHealDeadCharacterError
} from './errors';

should();

describe('Character should', () => {
  let character: Character;

  beforeEach(() => {
    character = Character.new();
  });

  it('have a name', () => {
    character.name.should.exist;
  });

  it('have health pool initialized at 100', () => {
    character.health.should.equal(100);
  });

  it('not create with a bigger health pool', () => {
    (function () {
      Character.new(101)
    })
    .should.throw(TooMuchLifeError);
  });

  it('be alive at creation', () => {
    character.alive.should.equal(true);
  });

  it('be dead when it reaches 0 health', () => {
    Character.new(0).alive.should.equal(false);
  });

  describe('attack', () => {
    it('deals one damage to an alive enemy', () => {
      const aliveEnemy = Character.new();
      character.attack(aliveEnemy);
      aliveEnemy.health.should.equal(99);
    });

    it ('deals no damage to a dead enemy', () => {
      const deadEnemy = Character.new(0);
      character.attack(deadEnemy);
      deadEnemy.health.should.equal(0);
    });

    it('cannot damage himself', () => {
      (function () {
        character.attack(character);
      })
      .should.throw(CannotAutoAttackError);
    });
  });

  describe('heal', () => {
    it('returns 1 point to an ally health pool', () => {
      const ally = Character.new(50);
      character.heal(ally);
      ally.health.should.equal(51);
    });

    it('returns 1 point to himself', () => {
      const ally = Character.new(50);
      ally.heal(ally);
      ally.health.should.equal(51);
    });

    it('doesn\'t work for a dead character', () => {
      (function () {
        character.heal(Character.new(0))
      })
      .should.throw(CannotHealDeadCharacterError);
    });
  });
});
