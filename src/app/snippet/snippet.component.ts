import { Component, OnInit } from '@angular/core';
import {Constants} from '../common/constants';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {SnippetModel} from '../models/snippet.model';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  async ngOnInit() {
    let url: string = this.router.url;
    console.log('url: ' + url);
    console.log('url match pattern: ' + Constants.SHORT_PATTERN.test(url));
    let url_data = url.split('/');
    let link = url_data[url_data.length - 1];
    if (Constants.LONG_PATTERN.test(url) || Constants.SHORT_PATTERN.test(url)) {
      // TODO Initialize code snippet e.g. GET with url
      console.log('init get snippet');
      await this.http.getSnippet(link);
      console.log('init get complete')
    }
    else {
      console.log('init post snippet');
      sessionStorage.setItem('code', '');
      sessionStorage.setItem('syntax', 'Bash');
      sessionStorage.setItem('link_mode', 'short');
      await this.http.postSnippet();//new SnippetModel('', 'Bash', '***'));
      console.log('init post complete')
    }
  }

}
