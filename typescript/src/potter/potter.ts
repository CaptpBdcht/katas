export class Potter {

  static readonly BOOK_PRICE = 8;

  static readonly discounts: any = {
    5: 0.25,
    4: 0.2,
    3: 0.1,
    2: 0.05,
    1: 0,
    0: 0,
  }

  price(books: number[]): number {
    let total = 0;
    
    while (books.length !== 0) {
      const uniqueBooks = new Set(books);

      total += Potter.BOOK_PRICE * uniqueBooks.size * (1 - Potter.discounts[uniqueBooks.size]);

      uniqueBooks.forEach(item => books.splice(books.indexOf(item), 1));
    }

    return total;
  }
}
