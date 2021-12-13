import { writeFileSync } from 'fs';

import { Writer } from './writer';
import { Code } from '../../domain/code';

export class OcrWriter implements Writer<Code[]> {
    private readonly _filePath: string;

    constructor(path: string) {
        this._filePath = path;
    }

    write(data: Code[]): void {
        try {
            writeFileSync(this._filePath, data.join('\n'), 'utf8'); }
        catch (err) {
            console.warn(err);
        }
    }
}
