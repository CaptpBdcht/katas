import { Job, NoJob } from './job';
import { TooMuchLifeError } from './errors';

export class Character {
  static readonly MAX_HEALTH = 100;

  private _name: string;
  private _health: number;
  private _job: Job;

  get name(): string {
    return this._name;
  }

  get health(): number {
    return this._health;
  }

  get alive(): boolean {
    return this._health > 0;
  }

  protected constructor(health: number, job?: Job) {
    this._name = '';
    this._health = health;
    this._job = job || new NoJob();
  }

  static withJob(job: Job): Character {
    return new Character(Character.MAX_HEALTH);
  }

  static new(health = Character.MAX_HEALTH): Character {
    if (health > Character.MAX_HEALTH) {
      throw new TooMuchLifeError();
    }
    return new Character(health);
  }

  attack(enemy: Character): void {
    this._job.attack(this, enemy);
  }

  heal(ally: Character): void {
    this._job.heal(ally);
  }

  damage(quantity: number): void {
    this._health = Math.max(0, this._health - quantity);
  }

  restore(quantity: number): void {
    this._health = Math.min(this._health + quantity, Character.MAX_HEALTH);
  }
}
