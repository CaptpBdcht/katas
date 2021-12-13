import { readFileSync } from 'fs';

import { FileReader } from './file-reader';

export type Mapper<T> = (arg: T) => any;

export class OcrFileReader implements FileReader {
    private readonly LinesForOCR = 4;
    private readonly _filePath: string;

    constructor(path: string) {
        this._filePath = path;
    }

    foreachLines(mapper: Mapper<string[]>): void {
        const lines = readFileSync(this._filePath)
            .toString()
            .split('\n');

        for (
            let currentLine = 0;
            currentLine <= lines.length - this.LinesForOCR;
            currentLine += this.LinesForOCR
        ) {
            const nextLines = lines.slice(currentLine, currentLine + this.LinesForOCR);
            mapper(nextLines);
        }
    }
}
