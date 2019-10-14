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
        return (((this.y / this.diameter) * CirclePad.MAX_RAW_VAL) << 12) + ((this.x / this.diameter) * CirclePad.MAX_RAW_VAL);
    }
}
