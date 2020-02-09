import { Component, OnInit } from '@angular/core';
import {Mapping} from '../../../../shared/model/mapping';
import {Buttons} from '../../../../shared/model/buttons';
import {Coordinates} from '../../../../shared/model/coordinates';
import {CirclePad} from '../../../../shared/model/circle-pad';
import {BuildService} from '../services/build.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'builder-config',
  templateUrl: './builder-config.component.html',
  styleUrls: ['./builder-config.component.css']
})
export class BuilderConfigComponent implements OnInit {

  buttonMappings = new Array<Mapping<Buttons, Buttons>>();
  touchscreenMappings = new Array<Mapping<Buttons, Coordinates>>();
  cpadMappings = new Array<Mapping<Buttons, CirclePad>>();
  building = false;
  constructor(private buildService: BuildService) { }

  ngOnInit() {
  }

  buildCurrent() {
    this.building = true;
    const buttons: Array<Mapping<string, string>> = [];
    const touchscreen = [];
    const cpad = [];
    for (const mapping of this.buttonMappings) {
      buttons.push(new Mapping(`0x${mapping.input.toMask().toString(16)}`, `0x${mapping.output.toMask().toString(16)}`));
    }
    for (const mapping of this.touchscreenMappings) {
      touchscreen.push(new Mapping(`0x${mapping.input.toMask().toString(16)}`, `0x${mapping.output.toTsData().toString(16)}`));
    }
    for (const mapping of this.cpadMappings) {
      console.log(mapping.input.toString());
      cpad.push(new Mapping(`0x${mapping.input.toMask().toString(16)}`, `0x${Math.floor(mapping.output.toData()).toString(16)}`));
    }
    this.buildService.build({buttons, touchscreen, cpad})
        .subscribe(cia => {
          saveAs(cia, 'ButtonSwap3ds.cia');
          this.building = false;
        });
  }
}
