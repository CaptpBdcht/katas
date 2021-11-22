export class Potter {

  static discountBy: any = {
    5: 0.75,
    4: 0.8,
    3: 0.9,
    2: 0.95,
    1: 1
  };

  buy(books: string[]): number {
    let price = 0;

    while (books.length) {
      let uniqueBooks = new Set(books);

      price += 8 * uniqueBooks.size * Potter.discountBy[uniqueBooks.size]
      
      removeItemsFrom(books, uniqueBooks)
    }

    return price;
  }
}

let removeItemsFrom = (array: string[], removable: Set<string>) => {
  Array
    .from(removable)
    .forEach(item => array.splice(array.indexOf(item), 1));

  return array;
};

// Modifier le code pour facilement ajouter des bouquins ?
// 
