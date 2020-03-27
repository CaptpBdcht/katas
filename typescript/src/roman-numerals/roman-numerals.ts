export class RomanNumerals {

  static readonly NumberLetterMapping = [
    { number: 1000, letter: 'M' }, { number: 900, letter: 'CM' },
    { number: 500, letter: 'D' }, { number: 400, letter: 'CD' },
    { number: 100, letter: 'C' }, { number: 90, letter: 'XC' },
    { number: 50, letter: 'L' }, { number: 40, letter: 'XL' },
    { number: 10, letter: 'X' }, { number: 9, letter: 'IX' },
    { number: 5, letter: 'V' }, { number: 4, letter: 'IV' },
    { number: 1, letter: 'I' }
  ];

  static Of(value: number) {
    let result = '';

    while (value !== 0) {
      RomanNumerals.NumberLetterMapping.forEach(kv => {
        if (kv.number <= value) {
          result += kv.letter;
          value -= kv.number;
          return;
        }
      });
    }

    return result;
  }
}
