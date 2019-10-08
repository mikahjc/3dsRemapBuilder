export class CirclePad {
    diameter: number;
    x: number;
    y: number;

    constructor(diameter: number) {
        this.diameter = diameter;
        this.x = diameter / 2;
        this.y = diameter / 2;
    }

    toString(): string {
        return `X: ${this.x / this.diameter} %%, Y: ${this.y / this.diameter} %%`;
    }
}
