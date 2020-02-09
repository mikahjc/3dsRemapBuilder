import {Mapping} from './mapping';

export class Configuration {
    buttons?: Array<Mapping<string, string>>;
    touchscreen?: Array<Mapping<string, string>>;
    cpad?: Array<Mapping<string, string>>;
    uniqueId?: string;
    productCode?: string;

    constructor(object: any) {
        for (const prop of object) {
            if (object.hasOwnProperty(prop)) {
                this[prop] = object[prop];
            }
        }
    }
}
