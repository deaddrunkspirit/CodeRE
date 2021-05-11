import {Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpService} from '../http.service';
import {SnippetModel} from '../models/snippet.model';
import {Constants} from '../common/constants';
import {MarkupService} from '../markup.service';

@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {
  text: string;
  private mode: string;

  constructor(private http: HttpService, private markup: MarkupService) {
  }

  async updateText(newText: string): Promise<void> {
    this.text = newText;
    sessionStorage.setItem('code', this.text);
    return await this.http.updateSnippet();
  }

  setText(newText: string) {
    this.text = newText;
  }

  updateMode() {
    return new Promise((resolve, reject) => {
        let newMode = sessionStorage.getItem('syntax');
        if (newMode === this.mode) {
          reject(newMode);
        }
        this.markup.setMarkup(newMode);
        this.mode = sessionStorage.getItem('markup')
        resolve(newMode);
      }).then(res => {
        console.log(res);
    }).catch((e: any) => console.log(e));
  }

  getMode(): string {
    return this.mode;
  }
}
