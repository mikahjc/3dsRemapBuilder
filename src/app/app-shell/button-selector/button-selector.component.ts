import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Buttons} from '../../model/buttons';

@Component({
  selector: 'app-button-selector',
  templateUrl: './button-selector.component.html',
  styleUrls: ['./button-selector.component.css']
})
export class ButtonSelectorComponent implements OnInit {

  @Input()
  set mask(mask: Buttons) {
    this.buttons = mask;

  }
  @Input() title: string;
  @Output() maskChange = new EventEmitter();
  buttons: Buttons;
  constructor() { }

  ngOnInit() {
    if (!this.buttons) {
      this.buttons = new Buttons();
    }
  }

  buttonsAsString() {
    return this.buttons.toString();
  }

  buttonsToMask(): number {
    return this.buttons.toMask();
  }

}
