import { Character } from './character'

export class TooMuchLifeError extends Error {
  constructor(m?: string) {
    super(m || `Life cannot go above ${Character.MAX_HEALTH}...`);
  }
}

export class CannotAutoAttackError extends Error {
  constructor(m?: string) {
    super('Cannot auto attack... dummy you !');
  }
}

export class CannotHealDeadCharacterError extends Error {
  constructor(m?: string) {
    super('Nope you can\'t heal a dead character...');
  }
}

export class MagesCannotAttackError extends Error {
  constructor(m?: string) {
    super('Mages cannot attack bruh...');
  }
}
