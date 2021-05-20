import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Constants } from '../../common/constants';

@Component({
  selector: 'app-copy-link',
  templateUrl: './copy-link.component.html',
  styleUrls: ['./copy-link.component.css']
})
export class CopyLinkComponent {

  constructor(private clipboard: Clipboard) { }

  onClick() {
    this.clipboard.copy(Constants.BASE_URL + sessionStorage.getItem('link'));
  }
}
