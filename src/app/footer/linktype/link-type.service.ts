import { Injectable } from '@angular/core';
import { Constants } from '../../common/constants';
import { HttpClient } from '@angular/common/http';
import {SnippetModel} from '../../models/snippet.model';
import {Snippet} from '../../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class LinkTypeService {
  static linkType: string = 'Short'

  constructor() { }

  setLinkType(): void {
    LinkTypeService.linkType = LinkTypeService.linkType === 'Short' ? 'Long' : 'Short';
  }

  changeLink(): void {

  }

  getLinkType(): string {
    return LinkTypeService.linkType;
  }
}
