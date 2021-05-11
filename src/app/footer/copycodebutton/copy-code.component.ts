import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrls: ['./copy-code.component.css']
})
export class CopyCodeComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  onClick() {
    this.clipboard.copy(sessionStorage.getItem('code'))
  }
}
