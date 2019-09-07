import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  testValue = 0xc03;
  constructor() { }

  ngOnInit() {
  }

}
