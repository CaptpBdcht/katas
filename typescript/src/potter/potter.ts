export class Potter {

  static discountByUniqueness: any = {
    5: 0.75,
    4: 0.8,
    3: 0.9,
    2: 0.95
  };

  buy(books?: string[]): number {
    if (!books || !books.length) {
      return 0;
    }

    let uniques = uniq(books);

    if (uniques === 1) {
      return 8 * books.length;
    }

    return 8 * (uniques * Potter.discountByUniqueness[uniques] + (books.length - uniques))
  }
}

let uniq = (arrArg: string[]) => arrArg.filter(
  (elem, pos, arr) => arr.indexOf(elem) == pos
).length;
