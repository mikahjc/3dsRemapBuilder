import {Mapping} from './mapping';
import {Buttons} from './buttons';
import {Coordinates} from './coordinates';
import {CirclePad} from './circle-pad';

export class Configuration {
    buttons: Array<Mapping<string, string>>;
    touchscreen: Array<Mapping<string, string>>;
    cpad: Array<Mapping<string, string>>;

    constructor(object: any) {
        for (const prop of object) {
            if (object.hasOwnProperty(prop)) {
                this[prop] = object[prop];
            }
        }
    }
}
