import { should } from 'chai';
import { join } from 'path';
import { existsSync } from 'fs';

import { OCR } from './ocr';
import { Code, CodeStatus } from './domain/code';

should();

describe('OCR should', () => {
    const emptyFilename = 'empty.txt';
    const emptyFilePath = join(__dirname, 'assets', emptyFilename);

    const okFilename = 'only_ok.txt';
    const okFilePath = join(__dirname, 'assets', okFilename);

    const withErrFilename = 'with_err.txt';
    const withErrFilePath = join(__dirname, 'assets', withErrFilename);

    const withIllFilename = 'with_ill.txt';
    const withIllFilePath = join(__dirname, 'assets', withIllFilename);

    const writePath = join(__dirname, 'output.txt');

    let ocr: OCR;

    it('parse empty files', () => {
        ocr = OCR.forFile(emptyFilePath, '');

        ocr.parse();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(0);
    });

    it('parse OK codes', () => {
        ocr = OCR.forFile(okFilePath, '');

        const expected: Code[] = [ new Code('123456789', CodeStatus.OK) ];

        ocr.parse();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(1);
        result.should.eql(expected);
    });

    it('parse ERR codes', () => {
        ocr = OCR.forFile(withErrFilePath, '');

        const expected: Code[] = [
            new Code('123456789', CodeStatus.OK),
            new Code('071717170', CodeStatus.ERR),
        ];

        ocr.parse();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(2);
        result.should.eql(expected);
    });

    it('parse ILL codes', () => {
        ocr = OCR.forFile(withIllFilePath, '');

        const expected: Code[] = [
            new Code('123456789', CodeStatus.OK),
            new Code('071717170', CodeStatus.ERR),
            new Code('?117?7170', CodeStatus.ILL),
        ];

        ocr.parse();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(3);
        result.should.eql(expected);
    });

    it('write a report on demand', () => {
        ocr = OCR.forFile(withIllFilePath, writePath);

        ocr.parse();
        ocr.writeReport();

        existsSync(writePath).should.equal(true);
    });
});
