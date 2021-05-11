import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {Constants} from '../../common/constants';

@Component({
  selector: 'app-copy-link',
  templateUrl: './copy-link.component.html',
  styleUrls: ['./copy-link.component.css']
})
export class CopyLinkComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  onClick() {
    this.clipboard.copy(Constants.URL + sessionStorage.getItem('link'));
  }
}
