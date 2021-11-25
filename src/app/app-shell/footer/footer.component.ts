import { Component, OnInit } from '@angular/core';
import { versionInfo } from '../../version-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  gitHash = versionInfo()['hash']
  constructor() { }

  ngOnInit() {
  }

}
