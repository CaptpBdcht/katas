import { Code } from './domain/code';
import { OCRAsciiParser } from './domain/ascii/ocr-ascii-parser';

import { FileReader } from './io/read/file-reader';
import { OcrFileReader } from './io/read/ocr-file-reader';
import { Writer } from './io/write/writer';
import { OcrWriter } from './io/write/ocr-writer';

export class OCR {
    private readonly _reader: FileReader;
    private readonly _writer: Writer<Code[]>;
    private readonly _codes: Code[] = [];

    private constructor(reader: FileReader, writer: Writer<Code[]>) {
        this._reader = reader;
        this._writer = writer;
    }

    static forFile(readPath: string, writePath: string) {
        const reader = new OcrFileReader(readPath);
        const writer = new OcrWriter(writePath);
        return new OCR(reader, writer);
    }

    get codes(): Code[] {
        return this._codes;
    }

    parse(): void {
        const mapToCodes = OCRAsciiParser.asciiNumbersToCodes(this._codes);
        this._reader.foreachLines(mapToCodes);
    }

    writeReport(): void {
        this._writer.write(this._codes);
    }
}

