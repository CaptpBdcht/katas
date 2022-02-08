abstract class Boundary {
    readonly openSymbol: string;
    readonly closeSymbol: string;
    readonly open: boolean;

    constructor(open = false) {
        this.open = open;
    }

    get symbol(): string {
        return this.open ? this.openSymbol : this.closeSymbol;
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
        private leftBoundary?: Boundary,
        private rightBoundary?: Boundary
    ) {}

    static create(
        left: number,
        right: number,
        leftBoundary = new LeftBoundary(),
        rightBoundary = new RightBoundary()
    ): Range {
        if (leftBoundary.open) {
            left += 1;
        }
        if (rightBoundary.open) {
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

    // Can also be done using #contains
    // 2x more tests done (ifs)
    // More sensible to changes made to #contains
    // containsRange(other: Range): boolean {
    //     return this.contains(other.left) && this.contains(other.right);
    // }

    size(): number {
        return this.right - this.left + 1;
    }

    // Should always return an iterator
    // Otherwise there could be issues for large ranges...
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

    // Another strategy could be to return null when
    // there is no intersection and let the consumer
    // validate by himself the result before using it..
    //
    // intersect(other: Range): Range | null {
    // if (this.right < other.left || other.right < this.left) {
    //     return null;
    // }
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
