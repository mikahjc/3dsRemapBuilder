
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Mapping} from '../../../../shared/model/mapping';
import {Buttons} from '../../../../shared/model/buttons';
import {Coordinates} from '../../../../shared/model/coordinates';
import {CirclePad} from '../../../../shared/model/circle-pad';
import {BuildService} from '../services/build.service';
import {saveAs} from 'file-saver';
import {Configuration} from '../../../../shared/model/configuration';
import { RehidConfig, RehidMapping } from '../model/rehid-config';
import { Component, OnInit } from '@angular/core';

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
  rehidMode = true;
  fileName = '';
  productCode = '';
  uniqueId = '';
  dpadtocpad = false;
  cpadtodpad = false;
  overridecpadpro = false;
  constructor(private buildService: BuildService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  cPadDpadExclusive(opt: string) {
    if (opt === 'cpad' && this.cpadtodpad && this.dpadtocpad) {
      this.dpadtocpad = false;
    } else if (opt === 'dpad' && this.dpadtocpad && this.cpadtodpad) {
      this.cpadtodpad = false;
    }
  }

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  private rehidConfigAsString(): string {
    return JSON.stringify(this.buildRehidConfig(), (k, v) => {
      if ((typeof v === "boolean" && !v) || (Array.isArray(v) && v.length === 0)) {
        return undefined
      } else {
        return v
      }})
  }

  private buildRehidConfig(): RehidConfig {
    const rehid = new RehidConfig();
    this.buttonMappings.forEach(m => {
      rehid.keys.push(new RehidMapping(m.input.toRehid(), m.output.toRehid()))
    })
    this.touchscreenMappings.forEach(m => {
      rehid.touch.push(new RehidMapping(m.input.toRehid(), m.output.toRehid()))
    })
    this.cpadMappings.forEach(m => {
      rehid.cpad.push(new RehidMapping(m.input.toRehid(), m.output.toRehid()))
    })
    rehid.cpadtodpad = this.cpadtodpad;
    rehid.dpadtocpad = this.dpadtocpad;
    rehid.overridecpadpro = this.overridecpadpro;
    return rehid;
  }

  buildCurrent() {
    this.building = true;
    if (this.rehidMode) {
      const file = new Blob([this.rehidConfigAsString()], {type: "application/json;charset=utf-8"})
      saveAs(file, 'rehid.json')
      this.building = false;
    } else {
      const buttons: Array<Mapping<string, string>> = [];
      const touchscreen = [];
      const cpad = [];
      const fileName = this.fileName === '' ? 'ButtonSwap3ds' : this.fileName;
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
      const config: Configuration = {buttons, touchscreen, cpad};
      if (this.uniqueId !== '') {
        config.uniqueId = this.uniqueId;
      }
      if (this.productCode !== '') {
        config.productCode = this.productCode;
      }
      this.buildService.build(config)
          .subscribe(cia => {
            saveAs(cia, `${fileName}.cia`);
            this.building = false;
          });
    }
  }
}
