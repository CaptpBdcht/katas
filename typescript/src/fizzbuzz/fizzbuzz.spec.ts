import { should } from 'chai';

import { Fizzbuzz } from './fizzbuzz';

should();

describe('Fizzbuzz should', () => {
    it('test', () => {
        let fizzbuzz: Fizzbuzz = new Fizzbuzz()
        // console.log('No value:')
        // console.log(Fizzbuzz.range(undefined))
        // console.log()
        console.log('Range 3:')
        console.log(fizzbuzz.range(3))
        console.log()
        console.log('Range 15:')
        console.log(fizzbuzz.range(15))
        // console.log()
        // console.log('Negative:')
        // console.log(Fizzbuzz.range(-42))



        let part2: Fizzbuzz = new Fizzbuzz(3, 7)
        console.log()
        console.log('Range 21:');
        console.log(part2.range(21));
    });
});
