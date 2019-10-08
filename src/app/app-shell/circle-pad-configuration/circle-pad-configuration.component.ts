import {Component, ElementRef, OnInit} from '@angular/core';
import {Mapping} from '../../model/mapping';
import {Buttons} from '../../model/buttons';
import {Coordinates} from '../../model/coordinates';
import {CirclePad} from '../../model/circle-pad';

@Component({
  selector: 'app-circle-pad-configuration',
  templateUrl: './circle-pad-configuration.component.html',
  styleUrls: ['./circle-pad-configuration.component.css']
})
export class CirclePadConfigurationComponent implements OnInit {

  readonly diameter = 150;
  mappings: Mapping<Buttons, CirclePad>[];
  currentMapping: Mapping<Buttons, CirclePad>;
  background: string;
  clicked = false;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new Coordinates((this.diameter * (2 / 3)) / 2, (this.diameter * (2 / 3)) / 2));
    this.mappings = [];
  }

  ngOnInit() {
  }

  cPadPositionX() {
    return this.diameter * (1 / 3) * (this.currentMapping.output.x / (this.diameter * (2 / 3)));
  }

  cPadPositionY() {
    return this.diameter * (1 / 3) * (this.currentMapping.output.y / (this.diameter * (2 / 3)));
  }

  moveCpad(event: MouseEvent) {
    if (this.clicked) {
      this.currentMapping.output.x = event.offsetX;
      this.currentMapping.output.y = event.offsetY;
    }
  }

  mouseDownCpad() {
    this.clicked = true;
  }

  mouseUpCpad() {
    this.clicked = false;
  }

  saveCurrent() {
    this.mappings.push(this.currentMapping);
    this.currentMapping = new Mapping(new Buttons(), new Coordinates());
  }

  loadMapping(mapping: Mapping<Buttons, CirclePad>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new Buttons(), new Coordinates());
    } else {
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, CirclePad>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
  }

}
