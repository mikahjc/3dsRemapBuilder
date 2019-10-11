import { Component, OnInit } from '@angular/core';
import {Mapping} from '../../model/mapping';
import {Buttons} from '../../model/buttons';
import {Coordinates} from '../../model/coordinates';
import {CirclePad} from '../../model/circle-pad';

@Component({
  selector: 'app-blank',
  templateUrl: './builder-config.component.html',
  styleUrls: ['./builder-config.component.css']
})
export class BuilderConfigComponent implements OnInit {

  buttonMappings = new Array<Mapping<Buttons, Buttons>>();
  touchscreenMappings = new Array<Mapping<Buttons, Coordinates>>();
  cpadMappings = new Array<Mapping<Buttons, CirclePad>>();
  constructor() { }

  ngOnInit() {
  }

}
