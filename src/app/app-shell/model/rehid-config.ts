export class RehidConfig {
    keys: RehidMapping[] = []
    touch: RehidMapping[] = []
    cpad: RehidMapping[] = []
    cpadtodpad: boolean
    dpadtocpad: boolean
    overridecpadpro: boolean
}

export class RehidMapping {
    constructor(public press: string, public get: string | number[]) {}
}