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

      books = this.removeFrom(books, uniqueBooks);
    }

    return total;
  }
  
  private removeFrom(array: number[], removable: Set<number>): number[] {
    removable.forEach(item => array.splice(array.indexOf(item), 1));
    return array;
  }
}

// 1 - Ajoutez LOTR avec la même logique 

// 2 - Changez le discount pour LOTR - 2 livres : 20% 3 livres : 30 %

