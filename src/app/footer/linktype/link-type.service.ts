import { Injectable } from '@angular/core';
import {HttpService} from '../../http.service';

@Injectable({
  providedIn: 'root'
})
export class LinkTypeService {
  linkType: string = 'short';
  isLong: boolean = false;

  constructor(private http: HttpService) { }

  async reverseLinkType() {
    this.linkType = this.linkType === 'short' ? 'long' : 'short';
    this.isLong = !this.isLong;
    sessionStorage.setItem('link_mode', this.linkType)
    await this.http.updateLinkMode();
  }

  getLinkType(): string {
    return this.linkType;
  }

  getIsLong(): boolean {
    return this.isLong;
  }

  setLinkType(): void {
    this.linkType = sessionStorage.getItem('link_mode');
    this.isLong = this.linkType === 'long';
  }
}
