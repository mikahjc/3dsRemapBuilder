export class Buttons {
    l: boolean;
    r: boolean;
    dUp: boolean;
    dDown: boolean;
    dLeft: boolean;
    dRight: boolean;
    a: boolean;
    b: boolean;
    x: boolean;
    y: boolean;
    start: boolean;
    select: boolean;

    constructor(mask: number = 0) {
        this.l = (mask & 0x200) !== 0;
        this.r = (mask & 0x100) !== 0;
        this.dUp = (mask & 0x40) !== 0;
        this.dDown = (mask & 0x80) !== 0;
        this.dLeft = (mask & 0x20) !== 0;
        this.dRight = (mask & 0x10) !== 0;
        this.a = (mask & 0x1) !== 0;
        this.b = (mask & 0x2) !== 0;
        this.x = (mask & 0x400) !== 0;
        this.y = (mask & 0x800) !== 0;
        this.start = (mask & 0x8) !== 0;
        this.select = (mask & 0x4) !== 0;
    }

    toString(): string {
        return (this.a ? 'A' : '') +
            (this.b ? 'B' : '') +
            (this.x ? 'X' : '') +
            (this.y ? 'Y' : '') +
            (this.l ? 'L' : '') +
            (this.r ? 'R' : '') +
            (this.select ? 'Sel' : '') +
            (this.start ? 'Start' : '') +
            (this.dUp ? '⮝' : '') +
            (this.dDown ? '⮟' : '') +
            (this.dLeft ? '⮜' : '') +
            (this.dRight ? '⮞' : '');
    }

    toMask(): number {
        return (this.a ? 0x1 : 0) +
            (this.b ? 0x2 : 0) +
            (this.select ? 0x4 : 0) +
            (this.start ? 0x8 : 0) +
            (this.dRight ? 0x10 : 0) +
            (this.dLeft ? 0x20 : 0) +
            (this.dUp ? 0x40 : 0) +
            (this.dDown ? 0x80 : 0) +
            (this.r ? 0x100 : 0) +
            (this.l ? 0x200 : 0) +
            (this.x ? 0x400 : 0) +
            (this.y ? 0x800 : 0);
    }

    anyPressed(): boolean {
        return this.a
            || this.b
            || this.x
            || this.y
            || this.l
            || this.r
            || this.start
            || this.select
            || this.dDown
            || this.dLeft
            || this.dRight
            || this.dUp;
    }
}

