export class NegativeRangeError extends Error {
  constructor() {
    super('Cannot fizzbuzz negative numbers');
  }
}

export class SameDivisorError extends Error {
  constructor() {
    super('Divisors must be distinct');
  }
}

export class DivisorCannotBeOneError extends Error {
  constructor() {
    super('Divisors cannot be 1');
  }
}

export class NegativeDivisorError extends Error {
  constructor() {
    super('Divisors cannot be negative');
  }
}

export class OnlyPrimeDivisorError extends Error {
  constructor() {
    super('Divisors must be primes');
  }
}
