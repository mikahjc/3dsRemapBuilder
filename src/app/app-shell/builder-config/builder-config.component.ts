
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Mapping} from '../../../../shared/model/mapping';
import {Buttons} from '../../../../shared/model/buttons';
import {Coordinates} from '../../../../shared/model/coordinates';
import {CirclePad} from '../../../../shared/model/circle-pad';
import {saveAs} from 'file-saver';
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
  touchToKeyMappings = new Array<Mapping<Coordinates, Buttons>>();
  building = false;
  rehidMode = true;
  dpadtocpad = false;
  cpadtodpad = false;
  overridecpadpro = false;
  constructor(private modalService: NgbModal) { }

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
    if (this.rehidMode) { // Always true now
      const file = new Blob([this.rehidConfigAsString()], {type: "application/json;charset=utf-8"})
      saveAs(file, 'rehid.json')
      this.building = false;
    }
  }
}
