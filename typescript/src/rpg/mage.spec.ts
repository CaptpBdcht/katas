import { should } from 'chai';

import { Character } from './character';
import { Mage, Staff } from './mage';
import { MagesCannotAttackError } from './errors';

should();

describe('Mage should', () => {
  let mage: Mage;

  beforeEach(() => {
    const staff: Staff = { healPoints() { return 7; } }
    mage = Mage.new(50, staff);
  });

  it('not deal damage', () => {
    (function () {
      mage.attack(mage)
    })
    .should.throw(MagesCannotAttackError);
  });

  it('heal between 5 and 10 life points', () => {
    const ally = Character.new(95);
    mage.heal(ally);
    ally.health.should.equal(100);
  });

  it('not heal over 100 health', () => {
    const ally = Character.new(98);
    mage.heal(ally);
    ally.health.should.equal(100);
  });
});
