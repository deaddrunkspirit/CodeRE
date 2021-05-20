import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrls: ['./copy-code.component.css']
})
export class CopyCodeComponent {

  constructor(private clipboard: Clipboard) { }

  onClick() {
    this.clipboard.copy(sessionStorage.getItem('code'))
  }
}
