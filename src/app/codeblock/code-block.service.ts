import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {MarkupService} from '../markup.service';

@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {
  private text: string;
  private mode: string;

  constructor(private http: HttpService, private markup: MarkupService) {
  }

  async updateText(newText: string): Promise<void> {
    this.text = newText;
    sessionStorage.setItem('code', this.text);
    return await this.http.updateSnippet();
  }

  setText(newText: string): void {
    this.text = newText;
  }

  updateMode(): Promise<any> {
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
