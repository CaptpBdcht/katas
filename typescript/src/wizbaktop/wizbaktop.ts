interface GameRule<T> {
  apply(value: T): string;
}

class DivisibleByRule implements GameRule<number> {
  constructor(
    private divisor: number,
    private returnValue: string
  ) {}
  
  apply(value: number): string {
    if (value % this.divisor === 0) {
      return this.returnValue;
    }
    return '';
  }
}

class ContainsRule implements GameRule<string> {
  constructor(
    private contains: string,
    private returnValue: string
  ) {}
  
  apply(value: string): string {
    if (value === this.contains) {
      return this.returnValue;
    }
    return '';
  }
}

export class WizBakTop {
  static readonly DIVISIBLE_BY_RULES: GameRule<number>[] = [
    new DivisibleByRule(3, 'Wiz'),
    new DivisibleByRule(5, 'Bak'),
    new DivisibleByRule(7, 'Top')
  ];

  static readonly CONTAINS_RULES: GameRule<string>[]  = [
    new ContainsRule('3', 'Wiz'),
    new ContainsRule('5', 'Bak'),
    new ContainsRule('7', 'Top'),
    new ContainsRule('0', '*'),
  ];

  static of(value: number): string {
    const divisibleResult = WizBakTop.DIVISIBLE_BY_RULES.map(
      clazz => clazz.apply(value)
    ).join('');

    const containsResult = value.toString().split('').map(
      digit => WizBakTop.CONTAINS_RULES.map(
        clazz => clazz.apply(digit)
      ).join('')
    ).join('');

    const wizbaktop = divisibleResult + containsResult;

    if (wizbaktop.length) {
      return wizbaktop;
    }
    return value.toString();
  }
}
