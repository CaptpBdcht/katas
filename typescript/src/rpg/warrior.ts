import { Character } from './character';
import { TooMuchLifeError } from './errors';
import { randomInRange } from './utils';

export interface Weapon {
  damages: () => number;
}

class DummyWeapon implements Weapon {
  damages() {
    return randomInRange(1, 10);
  }
}

export class Warrior extends Character {
  private weapon: Weapon;

  private constructor(health: number, weapon: Weapon) {
    super(health);
    this.weapon = weapon;
  }

  static new(
    health = Character.MAX_HEALTH,
    weapon = new DummyWeapon()
  ): Warrior {
    if (health > Character.MAX_HEALTH) {
      throw new TooMuchLifeError();
    }
    return new Warrior(health, weapon);
  }

  attack(enemy: Character): void {
    if (enemy.alive) {
      enemy.damage(this.weapon.damages());
    }
  }

  heal(ally: Character): void {
    if (this === ally) {
      ally.restore(1);
    }
  }
}
