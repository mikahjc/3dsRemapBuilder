import { InputClass } from "./input-class";

export class Buttons implements InputClass {
    l: boolean;
    r: boolean;
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    a: boolean;
    b: boolean;
    x: boolean;
    y: boolean;
    start: boolean;
    select: boolean;
    zl: boolean;
    zr: boolean;
    cup: boolean;
    cdown: boolean;
    cleft: boolean;
    cright: boolean;
    csup: boolean;
    csdown: boolean;
    csleft: boolean;
    csright: boolean;

    constructor(mask: number = 0) {
        this.l = (mask & 0x200) !== 0;
        this.r = (mask & 0x100) !== 0;
        this.up = (mask & 0x40) !== 0;
        this.down = (mask & 0x80) !== 0;
        this.left = (mask & 0x20) !== 0;
        this.right = (mask & 0x10) !== 0;
        this.a = (mask & 0x1) !== 0;
        this.b = (mask & 0x2) !== 0;
        this.x = (mask & 0x400) !== 0;
        this.y = (mask & 0x800) !== 0;
        this.start = (mask & 0x8) !== 0;
        this.select = (mask & 0x4) !== 0;
    }

    toString(): string {
        return this.toRehid();
        // return (this.a ? 'A' : '') +
        //     (this.b ? 'B' : '') +
        //     (this.x ? 'X' : '') +
        //     (this.y ? 'Y' : '') +
        //     (this.l ? 'L' : '') +
        //     (this.r ? 'R' : '') +
        //     (this.select ? 'Sel' : '') +
        //     (this.start ? 'Start' : '') +
        //     (this.up ? '⮝' : '') +
        //     (this.down ? '⮟' : '') +
        //     (this.left ? '⮜' : '') +
        //     (this.right ? '⮞' : '');
    }

    toMask(): number {
        return (this.a ? 0x1 : 0) +
            (this.b ? 0x2 : 0) +
            (this.select ? 0x4 : 0) +
            (this.start ? 0x8 : 0) +
            (this.right ? 0x10 : 0) +
            (this.left ? 0x20 : 0) +
            (this.up ? 0x40 : 0) +
            (this.down ? 0x80 : 0) +
            (this.r ? 0x100 : 0) +
            (this.l ? 0x200 : 0) +
            (this.x ? 0x400 : 0) +
            (this.y ? 0x800 : 0);
    }

    toRehid(): string {
        return Object.keys(this).filter(k => this[k]).map(k => k.toUpperCase()).join("+")
    }

    anyPressed(): boolean {
        return Object.values(this).some(v => v)
    }
}

