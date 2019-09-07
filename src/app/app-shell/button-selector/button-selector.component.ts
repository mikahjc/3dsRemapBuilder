import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-selector',
  templateUrl: './button-selector.component.html',
  styleUrls: ['./button-selector.component.css']
})
export class ButtonSelectorComponent implements OnInit {

  @Input()
  set mask(mask: number) {
    this.buttons = {
      l: (mask & 0x200) !== 0,
      r: (mask & 0x100) !== 0,
      d_up: (mask & 0x40) !== 0,
      d_down: (mask & 0x80) !== 0,
      d_left: (mask & 0x20) !== 0,
      d_right: (mask & 0x10) !== 0,
      a: (mask & 0x1) !== 0,
      b: (mask & 0x2) !== 0,
      x: (mask & 0x400) !== 0,
      y: (mask & 0x800) !== 0,
      start: (mask & 0x8) !== 0,
      select: (mask & 0x4) !== 0
    }
  }
  @Input() title: string;
  @Output() maskChange = new EventEmitter();
  buttons = {
    l: false,
    r: false,
    d_up: false,
    d_down: false,
    d_left: false,
    d_right: false,
    a: false,
    b: false,
    x: false,
    y: false,
    start: false,
    select: false
  };
  constructor() { }

  ngOnInit() {
  }

  buttonsAsString() {
    return JSON.stringify(this.buttons);
  }

  buttonsToMask(): number {
    const buttons = this.buttons;
    return (buttons.a ? 0x1 : 0) +
      (buttons.b ? 0x2 : 0) +
      (buttons.select ? 0x4 : 0) +
      (buttons.start ? 0x8 : 0) +
      (buttons.d_right ? 0x10 : 0) +
      (buttons.d_left ? 0x20 : 0) +
      (buttons.d_up ? 0x40 : 0) +
      (buttons.d_down ? 0x80 : 0) +
      (buttons.r ? 0x100 : 0) +
      (buttons.l ? 0x200 : 0) +
      (buttons.x ? 0x400 : 0) +
      (buttons.y ? 0x800 : 0);
  }

}
