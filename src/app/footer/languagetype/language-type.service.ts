import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import {Constants} from '../../common/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageTypeService {
  language: string = 'Bash';
  languageList: string[] = [];

  constructor(private http: HttpService) { }

  getCodeMarkupLanguages(): string[] {
    // TODO realization
    return this.languageList;
  }

  async setLanguage(language: string): Promise<void> {
    this.language = language;
    await this.http.updateSnippet(Constants.TOKEN, null, language);
  }

  getLanguage(): string {
    return this.language;
  }

  async updateLanguageList(): Promise<any> {
    let promise = await this.http.getAvailableLanguages();
    this.languageList = this.http.syntaxList;
    this.language = this.languageList[0]
    return promise
  }
}
