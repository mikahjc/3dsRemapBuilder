export class CirclePad {
    static readonly MAX_RAW_VAL = 4096;
    diameter: number;
    x: number;
    y: number;

    constructor(diameter: number) {
        this.diameter = diameter;
        this.x = diameter / 2;
        this.y = diameter / 2;
    }

    toString(): string {
        return `X: ${(this.x / this.diameter) * 100}%, Y: ${(this.y / this.diameter) * 100}%`;
    }

    toData(): number {
        const xRawVal = Math.floor(Math.min((this.x / this.diameter), 1) * CirclePad.MAX_RAW_VAL);
        const yRawVal = Math.floor(Math.min(((this.diameter - this.y) / this.diameter), 1) * CirclePad.MAX_RAW_VAL);
        console.log(xRawVal, yRawVal);
        return 8390656 ^ ((xRawVal) + (yRawVal << 12));
    }
}
