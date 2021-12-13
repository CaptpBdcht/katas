import { CodeStatus } from './code';
import { NotReadableChar } from './ascii/ocr-ascii-parser';

export class Checksum {

    static valueOf(code: string): CodeStatus {
        const isReadable = (text: string) => text.indexOf(NotReadableChar) === -1;
        const isDivisibleBy11 = (value: number) => value % 11 === 0;

        const checksumValue = code.split('')
            .map(Number)
            .reduce((acc, value, index) => {
                acc += value * (9 - index);
                return acc;
            }, 0);

        if (!isReadable(code)) return CodeStatus.ILL;

        return isDivisibleBy11(checksumValue)
            ? CodeStatus.OK
            : CodeStatus.ERR;
    }
}
