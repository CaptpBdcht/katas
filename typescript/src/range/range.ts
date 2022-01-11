enum Boundary {
    LEFT_CLOSED = '[',
    RIGHT_CLOSED = ']',
    LEFT_OPEN = '(',
    RIGHT_OPEN = ')'
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
        leftBoundary = Boundary.LEFT_CLOSED,
        rightBoundary = Boundary.RIGHT_CLOSED
    ): Range {
        if (leftBoundary === Boundary.LEFT_OPEN) {
            left += 1;
        }
        if (rightBoundary === Boundary.RIGHT_OPEN) {
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
            Boundary.LEFT_CLOSED,
            Boundary.RIGHT_CLOSED
        );
    }
}