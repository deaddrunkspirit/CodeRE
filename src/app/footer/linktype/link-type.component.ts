import { Component, OnInit } from '@angular/core';
import {LinkTypeService} from './link-type.service';

@Component({
  selector: 'app-link-type',
  templateUrl: './link-type.component.html',
  styleUrls: ['./link-type.component.css']
})
export class LinkTypeComponent implements OnInit {
  isLong: boolean;
  linkType: string;

  constructor(private service: LinkTypeService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.setLinkType();
      this.isLong = this.service.getIsLong();
      this.linkType = this.service.getLinkType();
    }, 10)
  }

  onSwitch(): void {
    this.service.reverseLinkType()
    this.isLong = this.service.getIsLong();
    this.linkType = this.service.getLinkType();
  }
}
