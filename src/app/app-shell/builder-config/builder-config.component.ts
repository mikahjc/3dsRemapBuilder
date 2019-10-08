import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './builder-config.component.html',
  styleUrls: ['./builder-config.component.css']
})
export class BuilderConfigComponent implements OnInit {

  testValue = 0xc03;
  constructor() { }

  ngOnInit() {
  }

}
