import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LanguageTypeService} from './language-type.service';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-language-type',
  templateUrl: './language-type.component.html',
  styleUrls: ['./language-type.component.css']
})
export class LanguageTypeComponent implements OnInit {
  language: string;
  loading: Promise<any>;
  constructor(private service: LanguageTypeService) { }

  ngOnInit(): void {
    this.loading = this.service.updateLanguageList();
    this.language = this.service.getLanguage();
    setTimeout(() => {
      let language = sessionStorage.getItem('syntax');
      console.log('setup syntax: ' + language)
      this.service.setLanguage(language);
      this.language = language;
    }, 100);
  }

  async onChange() {
    await this.service.updateLanguage(this.language);
  }


  getLanguages(): string[] {
    return this.service.getCodeMarkupLanguages();
  }
}
