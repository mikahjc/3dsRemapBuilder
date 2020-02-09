import * as express from 'express';
import * as tmp from 'tmp';
import {Mapping} from '../../shared/model/mapping';
import * as fs from 'fs';
import { execSync } from 'child_process';

const IndexRouter = express.Router();
IndexRouter.get('/test', (req, res) => {
   res.send('working\n');
});

IndexRouter.post('/build', async (req, res) => {
    const mappings = req.body;
    // get temp directory to use for build includes and output
    const tmpDir = tmp.dirSync();

    let buttonsFile = '';
    let tsFile = '';
    let cpadFile = '';
    if (mappings.hasOwnProperty('buttons')) {
        const buttonMappings: Array<Mapping<string, string>> = mappings.buttons;
        // tslint:disable-next-line:no-console
        console.log(buttonMappings);
        if (buttonMappings.length > 0) {
            for (const mapping of buttonMappings) {
                buttonsFile += `ldr r4, =${mapping.input}\nldr r5, =${mapping.output}\nbl .button\n`;
            }
        }
    }
    fs.writeFileSync(`${tmpDir.name}/button.s`, buttonsFile);

    if (mappings.hasOwnProperty('touchscreen')) {
        const tsMappings: Array<Mapping<string, string>> = mappings.touchscreen;
        // tslint:disable-next-line:no-console
        console.log(tsMappings);
        if (tsMappings.length > 0) {
            for (const mapping of tsMappings) {
                tsFile += `ldr r4, =${mapping.input}\nldr r6, =${mapping.output}\nbl .touch\n`;
            }
        }
    }
    fs.writeFileSync(`${tmpDir.name}/ts.s`, tsFile);

    if (mappings.hasOwnProperty('cpad')) {
        const cpadMappings: Array<Mapping<string, string>> = mappings.cpad;
        // tslint:disable-next-line:no-console
        console.log(cpadMappings);
        if (cpadMappings.length > 0) {
            for (const mapping of cpadMappings) {
                cpadFile += `ldr r4, =${mapping.input}\nldr r6, =${mapping.output}\nbl .cpad\n`;
            }
        }
    }
    fs.writeFileSync(`${tmpDir.name}/cpad.s`, cpadFile);

    execSync(`make -C ${process.env.BUTTONSWAP_SRC_LOCATION} clean`, {
        cwd: tmpDir.name,
        env: {
            DEVKITARM: '/opt/devkitpro/devkitARM',
            DEVKITPRO: 'opt/devkitpro',
            PATH: process.env.PATH,
        },
    });

    execSync(`make -C ${process.env.BUTTONSWAP_SRC_LOCATION}`, {
        cwd: tmpDir.name,
        env: {
            USERCONF: tmpDir.name,
            DEVKITARM: '/opt/devkitpro/devkitARM',
            DEVKITPRO: '/opt/devkitpro',
            PATH: process.env.PATH,
        },
    });

    // tslint:disable-next-line:no-console
    console.log(tmpDir.name);
    res.download(`${tmpDir.name}/buttonswap3ds.cia`);

    // fs.unlinkSync(`${tmpDir.name}/button.s`);
    // fs.unlinkSync(`${tmpDir.name}/ts.s`);
    // fs.unlinkSync(`${tmpDir.name}/cpad.s`);

    // tmpDir.removeCallback();
});

export default IndexRouter;
