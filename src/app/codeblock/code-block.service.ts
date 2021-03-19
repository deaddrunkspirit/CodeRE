import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {SnippetModel} from '../models/snippet.model';
import {Constants} from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {
  text: string;
  constructor(private http: HttpService) {
  }

  async setText(newText: string): Promise<void> {
    this.text = newText;
    return await this.http.updateSnippet(Constants.TOKEN, newText, null)
  }

  getText(): string {
    return this.text
  }

  async updateCode(): Promise<any> {
    this.text = this.http.snippet.code;
    console.log('code: ' + this.text);
  }
}
