import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() mappings: Array<Mapping<Buttons, CirclePad>>;
  @Output() mappingsChange = new EventEmitter<Array<Mapping<Buttons, CirclePad>>>();
  currentMapping: Mapping<Buttons, CirclePad>;
  clicked = false;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new CirclePad(this.diameter * (2 / 3)));
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
    this.currentMapping = new Mapping(new Buttons(), new CirclePad(this.diameter * (2 / 3)));
  }

  loadMapping(mapping: Mapping<Buttons, CirclePad>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new Buttons(), new CirclePad(this.diameter * (2 / 3)));
    } else {
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, CirclePad>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
    this.mappingsChange.emit(this.mappings);
  }

}
