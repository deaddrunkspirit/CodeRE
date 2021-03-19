import { Component, OnInit } from '@angular/core';
import {LinkTypeService} from './link-type.service';

@Component({
  selector: 'app-link-type',
  templateUrl: './link-type.component.html',
  styleUrls: ['./link-type.component.css']
})
export class LinkTypeComponent implements OnInit {

  constructor(private service: LinkTypeService) { }

  ngOnInit(): void {
  }

  //TODO extract service
  onSwitch(): void {
    this.service.setLinkType()
  }

  getLinkType(): string {
    return this.service.getLinkType();
  }
}
