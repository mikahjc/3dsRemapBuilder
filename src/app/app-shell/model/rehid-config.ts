export class RehidConfig {
    keys: RehidMapping[] = []
    touch: RehidMapping[] = []
    cpad: RehidMapping[] = []
    touchtokeys: RehidMapping[] = []
    homebutton: string
    cpadtodpad: boolean
    dpadtocpad: boolean
    overridecpadpro: boolean
}

export class RehidMapping {
    constructor(public press: string | number[], public get: string | number[]) {}
}