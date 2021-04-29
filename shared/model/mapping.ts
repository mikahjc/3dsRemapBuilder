import { InputClass } from "./input-class";

export class Mapping<T1, T2> {
    input: T1;
    output: T2;

    constructor(input: T1, output: T2) {
        this.input = input;
        this.output = output;
    }

    toString(): string {
        return `${this.input} ⇒ ${this.output}`;
    }
}
