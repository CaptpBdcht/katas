import { ASCII_DIGITS } from './ascii-alphabet';
import { Code } from '../code';

export const NotReadableChar = '?';

const asciiToString = (ascii: string): string => {
    return ASCII_DIGITS.reduce((acc, numberInAscii, index) => {
        if (ascii === numberInAscii) {
            acc = String(index);
        }
        return acc;
    }, NotReadableChar);
};

export class OCRAsciiParser {
    static asciiNumbersToCodes(collectionToFetch: Code[]): any {
        return (lines: string[]): void => {
            const asciiNumbers = OCRAsciiParser.linesToAsciiNumbers(lines);
            const asciiString = asciiNumbers.map(asciiToString).join('');
            const foundCode = new Code(asciiString);
            collectionToFetch.push(foundCode);
        };
    }

    private static linesToAsciiNumbers = (lines: string[]): string[] => {
        const asciiNumbers = [ '', '', '', '', '', '', '', '', '' ];
        lines.forEach(line => {
            if (line === '') return;
            asciiNumbers[0] += line.slice(0, 3);
            asciiNumbers[1] += line.slice(3, 6);
            asciiNumbers[2] += line.slice(6, 9);
            asciiNumbers[3] += line.slice(9, 12);
            asciiNumbers[4] += line.slice(12, 15);
            asciiNumbers[5] += line.slice(15, 18);
            asciiNumbers[6] += line.slice(18, 21);
            asciiNumbers[7] += line.slice(21, 24);
            asciiNumbers[8] += line.slice(24, 27);
        });
        return asciiNumbers;
    };
}
