type DiscountTable = { [booksCount: number]: number }

const LOTRDiscounts = {
  3: 0.3,
  2: 0.2,
  1: 0,
  0: 0,
};

const PotterDiscounts = {
  5: 0.25,
  4: 0.2,
  3: 0.1,
  2: 0.05,
  1: 0,
  0: 0,
}

export class Book {
  readonly BOOK_PRICE = 8;

  constructor(readonly discounts: DiscountTable) {
  }

  price(books: number[]): number {
    let total = 0;
    
    while (books.length !== 0) {
      const uniqueBooks = new Set(books);

      total += this.BOOK_PRICE * uniqueBooks.size * (1 - this.discounts[uniqueBooks.size]);

      uniqueBooks.forEach(item => books.splice(books.indexOf(item), 1));
    }

    return total;
  }
}

export class LOTR extends Book {
  constructor() {
    super(LOTRDiscounts);
  }
}

export class Potter extends Book {
  constructor() {
    super(PotterDiscounts);
  }
}

// 1 - Ajoutez Lord Of The Rings (trilogie) avec la même logique 

// 2 - Changez le discount pour LOTR - 2 livres : 20% 3 livres : 30 %

