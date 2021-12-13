import { Checksum } from './checksum';

export enum CodeStatus {
    OK = '',
    ERR = 'ERR',
    ILL = 'ILL',
}

export class Code {
    private readonly _value: string;
    private readonly _status: CodeStatus;

    constructor(value: string, status?: CodeStatus) {
        this._value = value;
        this._status = status || Checksum.valueOf(value);
    }

    toString() {
        return `${this._value} ${this._status}`;
    }
}
