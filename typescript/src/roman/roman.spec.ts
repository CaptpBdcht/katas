import { should } from 'chai';
import { RomanNumerals } from './roman';

should();

describe('RomanNumerals should', () => {
  it('return I when given 1', () => {
    RomanNumerals.of(1).should.equal('I');
  });

  it('return II when given 2', () => {
    RomanNumerals.of(2).should.equal('II');
  });

  it('return V when given 5', () => {
    RomanNumerals.of(5).should.equal('V');
  });

  it('return X when given 10', () => {
    RomanNumerals.of(10).should.equal('X')
  });
});
