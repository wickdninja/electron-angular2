
import { Component } from '@angular/core';
import { ipcRenderer} from 'electron';

@Component({
  selector: 'page1',
  template: '<h2>This is Page 1</h2><p>Click this see a message in the console/ terminal.</p><button (click)="ipcTest()">Do IPC Test</button>'
})
export class Page1Component { 
  ipcTest() {
    ipcRenderer.send('ipctest');
  }
}