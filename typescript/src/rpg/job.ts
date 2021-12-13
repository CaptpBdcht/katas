import { Character } from './character';
import { CannotAutoAttackError, CannotHealDeadCharacterError } from './errors';

interface AttackStrategy {
  attack(from: Character, to: Character): void;
}

interface HealingStrategy {
  heal(ally: Character): void;
}

export abstract class Job implements AttackStrategy, HealingStrategy {
  abstract attack(from: Character, to: Character): void;
  abstract heal(ally: Character): void;
}

export class NoJob extends Job {
  attack(from: Character, enemy: Character) {
    if (from === enemy) {
      throw new CannotAutoAttackError();
    }
    if (enemy.alive) {
      enemy.damage(1);
    }
  }

  heal(ally: Character) {
    if (!ally.alive) {
      throw new CannotHealDeadCharacterError();
    }
    ally.restore(1);
  }
}
