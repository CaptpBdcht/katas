import { should } from 'chai';

import { Character } from './character';
import { Warrior, Weapon } from './warrior';

should();

describe('Warrior should', () => {
  let warrior: Warrior;

  beforeEach(() => {
    const weapon: Weapon = { damages() { return 5; } };
    warrior = Warrior.new(50, weapon);
  });

  it('deal between 0 and 9 damage when attacking', () => {
    const enemy = Character.new();
    warrior.attack(enemy);
    enemy.health.should.equal(95);
  });

  it('deal only enough damage to kill but not more', () => {
    const enemy = Character.new(3);
    warrior.attack(enemy);
    enemy.health.should.equal(0);
  });

  it('be able to attack himself', () => {
    warrior.attack(warrior);
    warrior.health.should.equal(45);
  });

  it('be able to heal himself', () => {
    warrior.heal(warrior);
    warrior.health.should.equal(51);
  });

  it('not be able to heal someone else', () => {
    const ally = Character.new(99);
    warrior.heal(ally);
    ally.health.should.equal(99);
  });
});
