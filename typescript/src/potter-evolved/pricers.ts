export interface BookPricer {
  value: number;
}

export class LOTRPricer implements BookPricer {
  value = 10;
}

export class PotterPricer implements BookPricer {
  value = 8;
}