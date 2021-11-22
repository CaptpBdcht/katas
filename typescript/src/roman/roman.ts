export class RomanNumerals {
  static of(value: number): string {
    let result = "";
    while (value > 0) {
      if (value >= 10) {
        result += "X"
        value -= 10
      }
      else if (value >= 5) {
        result += "V"
        value -= 5
      }
      else {
        result += "I"
        value -= 1
      }
    }
    return result;
  }
}
