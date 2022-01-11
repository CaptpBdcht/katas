import { Discount, PotterDiscount, LOTRDiscount } from './discounts';
import { BookPricer, PotterPricer, LOTRPricer } from './pricers';

abstract class Book {
  constructor(
    private bookPricer: BookPricer,
    private discount: Discount
  ) {}

  buy(books: string[]): number {
    let price = 0;

    while (books.length) {
      let uniqueBooks = new Set(books);

      price += this.bookPricer.value * uniqueBooks.size * this.discount[uniqueBooks.size]

      uniqueBooks.forEach(item => books.splice(books.indexOf(item), 1));
    }

    return price;
  }
}

class LOTR extends Book {
  constructor() {
    super(new LOTRPricer(), LOTRDiscount)
  }
}

export class Potter extends Book {
  constructor() {
    super(new PotterPricer(), PotterDiscount)
  }
}
