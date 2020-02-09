import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mapping} from '../../../../shared/model/mapping';
import {Buttons} from '../../../../shared/model/buttons';
import {Coordinates} from '../../../../shared/model/coordinates';
import {CirclePad} from '../../../../shared/model/circle-pad';

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
  currentMappingX: number;
  currentMappingY: number;
  clicked = false;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new CirclePad(this.diameter * (2 / 3)));
    this.currentMappingX = this.currentMapping.output.getXPercent();
    this.currentMappingY = this.currentMapping.output.getYPercent();
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
      this.currentMapping.output.x = Math.max(0, event.offsetX);
      this.currentMapping.output.y = Math.max(0, event.offsetY);
      this.currentMappingX = this.currentMapping.output.getXPercent();
      this.currentMappingY = this.currentMapping.output.getYPercent();
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
    this.currentMappingX = this.currentMapping.output.getXPercent();
    this.currentMappingY = this.currentMapping.output.getYPercent();
  }

  loadMapping(mapping: Mapping<Buttons, CirclePad>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new Buttons(), new CirclePad(this.diameter * (2 / 3)));
      this.currentMappingX = this.currentMapping.output.getXPercent();
      this.currentMappingY = this.currentMapping.output.getYPercent();
    } else {
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, CirclePad>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
    this.mappingsChange.emit(this.mappings);
  }

}
