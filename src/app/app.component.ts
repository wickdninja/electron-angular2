import { Component, ViewEncapsulation } from '@angular/core';
import {remote, ipcRenderer} from 'electron';

let {dialog} = remote;

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  constructor() {
  }

  ipcTest() {
    ipcRenderer.send('ipctest');
  }
}