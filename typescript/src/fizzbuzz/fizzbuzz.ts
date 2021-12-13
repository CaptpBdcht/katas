import {
  OnlyPrimeDivisorError,
  NegativeRangeError,
  SameDivisorError,
  DivisorCannotBeOneError,
  NegativeDivisorError
} from './errors';

export class FizzBuzzArgumentsBuilder {
  static from(args: string) {
    const parts = args.split(' ');
    
    switch (parts.length) {
      case 0:
        throw new Error('Please provide a value to FizzBuzz');
      case 1:
        return new FizzBuzz().range(+parts[0])
      case 2:
        const divisors = parts[0].split(',');
        return new FizzBuzz().withDivisors(+divisors[0], +divisors[1]).range(+parts[1])
      default:
        throw new Error('Too many arguments provided, expected 1 or 2');
    }
  }
}

export class FizzBuzz {

  private DIVISORS = {
    Fizz: 3, Buzz: 5
  };

  readonly PRIMES_TO_100 = [
    2, 3, 5, 7, 11,
    13, 17, 19, 23, 29,
    31, 37, 41, 43, 47,
    53, 59, 61, 67, 71,
    73, 79, 83, 89, 97
  ];

  withDivisors(fizzValue: number, buzzValue: number) {
    this.handleDivisorErrors(fizzValue, buzzValue);

    this.DIVISORS.Fizz = fizzValue;
    this.DIVISORS.Buzz = buzzValue;
    return this;
  }

  range(threshold: number): string {
    this.handleRangeErrors(threshold);

    return this.arrayOnRange(threshold)
      .map(val => this.of(val))
      .join(' ');
  }

  private of(value: number): string {
    if (this.isDivisibleByBothFizzAndBuzzValues(value)) {
      return 'FizzBuzz';
    }
    else if (this.isDivisibleByFizzValue(value)) {
      return 'Fizz';
    }
    else if (this.isDivisibleByBuzzValue(value)) {
      return 'Buzz';
    }
    else {
      return value.toString();
    }
  }

  private arrayOnRange(range: number): number[] {
    return [...Array(range).keys()].map(v => v+1);
  }

  private isDivisibleByFizzValue(value: number) {
    return value % this.DIVISORS.Fizz === 0;
  }

  private isDivisibleByBuzzValue(value: number) {
    return value % this.DIVISORS.Buzz === 0;
  }

  private isDivisibleByBothFizzAndBuzzValues(value: number) {
    return this.isDivisibleByFizzValue(value)
        && this.isDivisibleByBuzzValue(value);
  }

  private handleRangeErrors(threshold: number) {
    if (threshold < 1) {
      throw new NegativeRangeError();
    }
  }

  private handleDivisorErrors(first: number, second: number) {
    if (this.divisorsAreSame(first, second)) {
      throw new SameDivisorError();
    }
    if (this.aDivisorIsOne(first, second)) {
      throw new DivisorCannotBeOneError();
    }
    if (this.aDivisorIsNegative(first, second)) {
      throw new NegativeDivisorError();
    }
    if (this.aDivisorIsNotPrimeUpTo100(first, second)) {
      throw new OnlyPrimeDivisorError();
    }
  }

  private aDivisorIsNotPrimeUpTo100(first: number, second: number) {
    return this.PRIMES_TO_100.indexOf(first) === -1
        || this.PRIMES_TO_100.indexOf(second) === -1;
  }

  private divisorsAreSame(first: number, second: number) {
    return first === second;
  }

  private aDivisorIsOne(first: number, second: number) {
    return first === 1 || second === 1;
  }

  private aDivisorIsNegative(first: number, second: number) {
    return first < 0 || second < 0;
  }
}
