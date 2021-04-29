import { InputClass } from "./input-class";

export class Coordinates implements InputClass{
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `${this.x}, ${this.y}`;
    }

    toRehid(): number[] {
        return [this.x, this.y]
    }

    toTsData(): number {
        const rawX = Math.floor((this.x / 319) * 0xfff);
        const rawY = Math.floor(((239 - this.y) / 239) * 0xfff);
        return 0x1000000 | rawX | (rawY << 12);
    }
}
