import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import {MarkupService} from '../../markup.service';
import * as CodeMirror from 'codemirror';

@Injectable({
  providedIn: 'root'
})
export class LanguageTypeService {
  language: string;
  languageList: string[] = [];
  codemirror: CodeMirror.Editor;

  constructor(private http: HttpService, private markup: MarkupService) { }

  getCodeMarkupLanguages(): string[] {
    return this.languageList;
  }

  async updateLanguage(language: string): Promise<any> {
    this.language = language;
    console.log('new syntax: ' + language);
    sessionStorage.setItem('syntax', language);
    this.markup.setMarkup(language)
    await this.http.updateSnippet();
  }

  getLanguage(): string {
    return this.language;
  }

  async updateLanguageList(): Promise<any> {
    let promise = await this.http.getAvailableLanguages();
    this.languageList = this.http.syntaxList;
    this.language = sessionStorage.getItem('syntax');
    return promise;
  }

  setLanguage(language: string): void {
    this.language = language;
    this.markup.setMarkup(language);
  }
}
