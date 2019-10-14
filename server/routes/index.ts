import express from 'express';
import * as tmp from 'tmp';
import {Mapping} from '../../shared/model/mapping';
import * as fs from 'fs';

const IndexRouter = express.Router();
IndexRouter.get('/test', (req, res) => {
   res.send('working\n');
});

IndexRouter.get('/build', (req, res) => {
   // tslint:disable-next-line:no-console
   // console.log(req.body);
   // const mappings = req.body;
   const tmpDir = tmp.dirSync();
   // tslint:disable-next-line:no-console
   // console.log(tmpDir.name);
   res.status(200).send(tmpDir.name);
   //
   // if (mappings.hasOwnProperty('buttons')) {
   //    let buttonsFile = '';
   //    const buttonMappings: Array<Mapping<string, string>> = mappings.buttons;
   //    for (const mapping of buttonMappings) {
   //       buttonsFile += `ldr r4, =${mapping.input}\nldr r5, =${mapping.output}\nbl .button\n`;
   //    }
      // const btnFile = fs.writeFile(tmpDir.name, buttonsFile, (err) => {
      //    res.status(500).send('Unable to write button mappings to file')
      // }));
   // }
});

export default IndexRouter;
