export class Fizzbuzz {
    readonly DEFAULT_FIZZ_DIVISOR = 3;
    readonly DEFAULT_BUZZ_DIVISOR = 5;
    readonly FIZZ_DIVISOR: number;
    readonly BUZZ_DIVISOR: number;
    readonly PRIMES_UP_TO_100 = [
        2, 3, 5, 7, 11,
        13, 17, 19, 23, 29,
        31, 37, 41, 43, 47,
        53, 59, 61, 67, 71,
        73, 79, 83, 89, 97
    ]

    constructor(fizz_divisor?: number, buzz_divisor?: number) {
        this.validateDivisors(fizz_divisor, buzz_divisor)

        this.FIZZ_DIVISOR = fizz_divisor || this.DEFAULT_FIZZ_DIVISOR;
        this.BUZZ_DIVISOR = buzz_divisor || this.DEFAULT_BUZZ_DIVISOR
    }

    range(value: number): string {
        this.validateFizzbuzzInput(value)
        
        return this.generateFizzbuzzUpTo(value).join(' ')
    }

    private generateFizzbuzzUpTo(max: number): string[] {
        let result = []
        for (let i = 1; i <= max; i++) {
            result.push(this.of(i))
        }
        return result;
    }
    
    private of(value: number): string {
        if (value % (this.BUZZ_DIVISOR * this.FIZZ_DIVISOR) == 0) return 'FizzBuzz';
        if (value % this.BUZZ_DIVISOR == 0) return 'Buzz';
        if (value % this.FIZZ_DIVISOR == 0) return 'Fizz';
        return value.toString();
    }

    private validateFizzbuzzInput(input: number): void {
        if (input < 0) {
            throw new Error('Cannot fizzbuzz negative numbers')
        }
    }

    private validateDivisors(first: number, second: number): void {
        if (first === 1 || second === 1) {
            throw new Error('Divisors cannot be 1')
        }
        if (first < 0 || second < 0) {
            throw new Error('Divisors cannot be negative')
        }
        if (first === second) {
            throw new Error('Divisors must be distinct')
        }
        if (this.PRIMES_UP_TO_100.indexOf(first) < 0 ||
            this.PRIMES_UP_TO_100.indexOf(second) < 0) {
            throw new Error('Divisor must be a prime')
        }
    }
}
