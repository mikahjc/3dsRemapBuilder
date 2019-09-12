import { Component, OnInit } from '@angular/core';
import {Mapping} from '../../model/mapping';
import {Buttons} from '../../model/buttons';
import {Coordinates} from '../../model/coordinates';

@Component({
  selector: 'app-touchscreen-configuration',
  templateUrl: './touchscreen-configuration.component.html',
  styleUrls: ['./touchscreen-configuration.component.css']
})
export class TouchscreenConfigurationComponent implements OnInit {

  mappings: Mapping<Buttons, Coordinates>[];
  currentMapping: Mapping<Buttons, Coordinates>;
  background: string;
  constructor() {
    this.currentMapping = new Mapping(new Buttons(), new Coordinates());
    this.mappings = [];
  }

  ngOnInit() {
  }

  onTouchscreenFileSelect(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.background = reader.result as string;
      };
    }
  }

  saveCurrent() {
    this.mappings.push(this.currentMapping);
    this.currentMapping = new Mapping(new Buttons(), new Coordinates());
  }

  loadMapping(mapping: Mapping<Buttons, Coordinates>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new Buttons(), new Coordinates());
    } else {
      this.currentMapping = mapping;
    }
  }

  deleteMapping(mapping: Mapping<Buttons, Coordinates>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
  }

  getBackground(): string {
    return `url(${this.background})`;
  }

}
