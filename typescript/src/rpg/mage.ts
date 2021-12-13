import { Character } from './character';
import { Job } from './job';
import {
  CannotHealDeadCharacterError,
  TooMuchLifeError,
  MagesCannotAttackError
} from './errors';
import { randomInRange } from './utils';

export interface Staff {
  healPoints: () => number;
}

class DummyStaff implements Staff {
  healPoints() {
    return randomInRange(5, 10);
  }
}

export class Mage extends Character {
  private staff: Staff;

  private constructor(health: number, staff: Staff) {
    super(health);
    this.staff = staff;
  }

  static new(
    health = Character.MAX_HEALTH,
    staff = new DummyStaff()
  ): Mage {
    if (health > Character.MAX_HEALTH) {
      throw new TooMuchLifeError();
    }
    return new Mage(health, staff);
  }

  attack(enemy: Character): void {
    throw new MagesCannotAttackError();
  }

  heal(ally: Character): void {
    if (!ally.alive) {
      throw new CannotHealDeadCharacterError();
    }
    ally.restore(this.staff.healPoints());
  }
}
