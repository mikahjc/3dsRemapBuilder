import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mapping} from '../../model/mapping';
import {Buttons} from '../../model/buttons';

@Component({
  selector: 'app-button-map-configuration',
  templateUrl: './button-map-configuration.component.html',
  styleUrls: ['./button-map-configuration.component.css']
})
export class ButtonMapConfigurationComponent implements OnInit {

  @Input() mappings: Array<Mapping<Buttons, Buttons>>;
  @Output() mappingsChange = new EventEmitter<Array<Mapping<Buttons, Buttons>>>();
  currentMapping: Mapping<Buttons, Buttons>;
  editing = false;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new Buttons());
  }

  ngOnInit() {
  }

  saveCurrent() {
    this.mappings.push(this.currentMapping);
    this.currentMapping = new Mapping(new Buttons(), new Buttons());
  }

  loadMapping(mapping: Mapping<Buttons, Buttons>) {
    if (mapping === this.currentMapping) {
      this.editing = false;
      this.currentMapping = new Mapping(new Buttons(), new Buttons());
    } else {
      this.editing = true;
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, Buttons>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
    this.mappingsChange.emit(this.mappings);
  }

}
