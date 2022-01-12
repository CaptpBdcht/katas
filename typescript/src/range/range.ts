abstract class Boundary {
    readonly openSymbol: string;
    readonly closeSymbol: string;

    constructor(open = false) {
        this.isOpen = open;
    }

    get symbol(): string {
        return this.isOpen ? this.openSymbol : this.closeSymbol;
    }
}

export class LeftBoundary extends Boundary {
    readonly openSymbol = '(';
    readonly closeSymbol = '[';
}

export class RightBoundary extends Boundary {
    readonly openSymbol = ')';
    readonly closeSymbol = ']';
}

export class Range {
    private constructor(
        readonly left: number,
        readonly right: number,
        private leftBoundary: Boundary,
        private rightBoundary: Boundary
    ) {}

    static create(
        left: number,
        right: number,
        leftBoundary = new LeftBoundary(),
        rightBoundary = new RightBoundary()
    ): Range {
        if (leftBoundary.isOpen) {
            left += 1;
        }
        if (rightBoundary.isOpen) {
            right -= 1;
        }
        return new Range(left, right, leftBoundary, rightBoundary);
    }

    contains(value: number): boolean {
        return this.left <= value && value <= this.right;
    }

    containsRange(other: Range): boolean {
        return this.left <= other.left && other.right <= this.right;
    }

    size(): number {
        return this.right - this.left + 1;
    }

    values(): number[] {
        const valuesArray: number[] = [];
        for (let i = this.left; i <= this.right; i++) {
            valuesArray.push(i);
        }
        return valuesArray;
    }

    endPoints(): number[] {
        return [this.left, this.right];
    }

    intersect(other: Range): Range {
        if (this.right < other.left || other.right < this.left) {
            throw new Error('Ranges do not intersect');
        }

        return new Range(
            Math.max(this.left, other.left),
            Math.min(this.right, other.right),
        );
    }
}
