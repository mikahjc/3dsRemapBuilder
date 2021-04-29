import { InputClass } from "./input-class";

export class CirclePad implements InputClass {
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
        return `X: ${this.getXPercent()}%, Y: ${this.getYPercent()}%`;
    }

    getXPercent(): number {
        return (this.x / this.diameter) * 100;
    }

    getYPercent(): number {
        return (this.y / this.diameter) * 100;
    }

    setXPercent(percent: number): void {
        this.x = this.diameter * percent;
    }

    setYPercent(percent: number): void {
        this.y = this.diameter * percent;
    }

    toRehid(): number[] {
        
        return [this.bs3dsPercentToRehidCoord(this.getXPercent()), this.bs3dsPercentToRehidCoord(this.getYPercent())]
        // const xpercent = ((this.getXPercent() - 50) * 2) / 100.0;
        // const ypercent = ((this.getYPercent() - 50) * 2) / 100.0;
        // let xCoordinate = Math.trunc(xpercent * 190)
        // let yCoordinate = Math.trunc(ypercent * 190)
        // if (xCoordinate < 0 && xCoordinate < -190) {
        //     xCoordinate = -190
        // } else if (xCoordinate > 0 && xCoordinate > 190) {
        //     xCoordinate = 190
        // }
        // if (yCoordinate < 0 && yCoordinate < -190) {
        //     yCoordinate = -190
        // } else if (yCoordinate > 0 && yCoordinate > 190) {
        //     yCoordinate = 190
        // }
        // return [xCoordinate, yCoordinate]

        // if (Math.abs(xpercent) > Math.abs(ypercent)) {
        //     // X is more "intense", select that axis
        //     if (xpercent < 0) {
        //         return "CLEFT"
        //     } else {
        //         return "CRIGHT"
        //     }
        // } else {
        //     // Y is more "intense", select that axis
        //     if (xpercent < 0) {
        //         return "CDOWN"
        //     } else {
        //         return "CUP"
        //     }
        // }
    }

    private bs3dsPercentToRehidCoord(value: number) {
        // Get percent, subtract 50 to make 50% actually 0,
        // multiply by 2 to scale edges back to 100,
        // divide by 100 to get a real percentage decimal
        const rehidPercent = ((value - 50) * 2) / 100.0
        const rehidValue = Math.trunc(190 * rehidPercent)
        if (rehidValue < 0 && rehidValue < -190) {
            return -190
        } else if (rehidValue > 0 && rehidValue > 190) {
            return 190
        } else {
            return rehidValue
        }
    }

    toData(): number {
        const xRawVal = Math.floor(Math.min((this.x / this.diameter), 1) * CirclePad.MAX_RAW_VAL);
        const yRawVal = Math.floor(Math.min(((this.diameter - this.y) / this.diameter), 1) * CirclePad.MAX_RAW_VAL);
        console.log(xRawVal, yRawVal);
        return 8390656 ^ ((xRawVal) + (yRawVal << 12));
    }
}
