import { Mapper } from './ocr-file-reader';

export interface FileReader {
    foreachLines(mapper: Mapper<string[]>): void;
}
