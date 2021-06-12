import { Coordinates } from "./coordinates";

export class BoundingCoordinates extends Coordinates {
    constructor(public x = 0, public y = 0, public w = 0, public h = 0) {
        super(x, y)
    }

    toString(): string {
        this.abs()
        return `${this.w}x${this.h} @ (${this.x}, ${this.y})`
    }

    toRehid(): number[] {
        this.abs()
        return [this.x, this.y, this.w, this.h]
    }

    isDefined(): boolean {
        return this.w !== 0 && this.h !== 0
    }

    abs() {
        if (this.w < 0) {
            this.x = this.x + this.w
            this.w *= -1
        }
        if (this.h < 0) {
            this.y = this.y + this.h
            this.h *= -1
        }
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        this.w = Math.floor(this.w)
        this.h = Math.floor(this.h)
    }
}