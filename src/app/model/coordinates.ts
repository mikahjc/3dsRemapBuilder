export class Coordinates {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `${this.x},${this.y}`;
    }

    toTsData(): number {
        const rawX = (this.x / 319) * 0xfff;
        const rawY = (this.y / 239) * 0xfff;
        return 0x1000000 | rawX | (rawY << 12);
    }
}
