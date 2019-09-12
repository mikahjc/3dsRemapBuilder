import { Component, OnInit } from '@angular/core';
import {Mapping} from '../../model/mapping';
import {Buttons} from '../../model/buttons';

@Component({
  selector: 'app-button-map-configuration',
  templateUrl: './button-map-configuration.component.html',
  styleUrls: ['./button-map-configuration.component.css']
})
export class ButtonMapConfigurationComponent implements OnInit {

  mappings: Mapping<Buttons, Buttons>[];
  currentMapping: Mapping<Buttons, Buttons>;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new Buttons());
    this.mappings = [];
  }

  ngOnInit() {
  }

  saveCurrent() {
    this.mappings.push(this.currentMapping);
    this.currentMapping = new Mapping(new Buttons(), new Buttons());
  }

  loadMapping(mapping: Mapping<Buttons, Buttons>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new Buttons(), new Buttons());
    } else {
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, Buttons>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
  }

}
