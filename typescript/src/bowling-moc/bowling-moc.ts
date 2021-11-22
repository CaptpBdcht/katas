export class BowlingMoc {
    _score: number;

    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins)
    }

    score(): number {
        let result = 0;
        let currentRoll = 0

        for(let i = 0; i < 10; i++) {
            if (this.rolls[currentRoll] + this.rolls[currentRoll + 1] === 10) {
                result += 10 + this.rolls[currentRoll + 2]
            }
            else {
                result += this.rolls[currentRoll] + this.rolls[currentRoll + 1]
            }
            currentRoll += 2;
        }

        return result;
    }
}