import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  async ngOnInit() {
    let url: string = this.router.url;
    let url_data = url.split('/');
    let link = url_data[url_data.length - 1];
    if (Constants.LONG_PATTERN.test(url) || Constants.SHORT_PATTERN.test(url)) {
      await this.http.getSnippet(link);
    }
    else {
      sessionStorage.setItem('code', '');
      sessionStorage.setItem('syntax', 'C');
      sessionStorage.setItem('link_mode', 'short');
      await this.http.postSnippet();
    }
  }

}
