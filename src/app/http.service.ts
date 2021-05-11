import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SnippetModel} from './models/snippet.model';
import {Constants} from './common/constants';
import {Snippet} from './models/snippet';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {
  syntaxList: string[];
  loading: boolean;

  constructor(private http: HttpClient, private location: Location){
    this.syntaxList = [];
  }

  ngOnInit(): void {
  }

  public postSnippet() {
    return new Promise((resolve, reject) => {
      const body = {
        code: sessionStorage.getItem('code'),
        syntax: sessionStorage.getItem('syntax'),
        link_mode: sessionStorage.getItem('link_mode')
      };
      const url = Constants.BASE_URL + 'api/snippet';
      console.log('POST send');
      console.log('body: ' + JSON.stringify(body));
      this.http.post<SnippetModel>(url, body)
        .toPromise()
        .then(
          (res: any) => {
            this.location.go(res.snippet.link);
            sessionStorage.setItem('link', res.snippet.link);
            localStorage.setItem('token', res.token);
            resolve(res);
          },
          err => {
            reject(err);
          });
    });
  }

  public updateSnippet(): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        code: sessionStorage.getItem('code'),
        syntax: sessionStorage.getItem('syntax'),
        token: localStorage.getItem('token'),
      };
      console.log(body);
      const url = Constants.BASE_URL + 'api/snippet';
      this.http
        .patch(url, body, {responseType: 'text'})
        .toPromise()
        .then(
          (res: any) => {
            console.log("PATCH snippet succeed");
            resolve(res);
          },
          err => {
            reject(err);
          });
    });
  }

  public updateLinkMode(): Promise<any> {
    let link = sessionStorage.getItem('link');
    return new Promise((resolve, reject) => {
      const url = Constants.BASE_URL + 'api/snippet/' + link + '/chmod';
      console.log('url link mode: ' + url);
      let body = {
        'token': localStorage.getItem('token')
      };
      this.http
        .patch(url, body, {responseType: 'text'})
        .toPromise()
        .then(
          (res: any) => {
            sessionStorage.setItem('link', res)
            sessionStorage.setItem('link_mode', res.length == 3 ? 'short' : 'long');
            this.location.go(res);
            console.log('PATCH link mode complete');
            resolve(res);
          },
          err => {
            reject(err);
          }
        )
    });
  }

  public getSnippet(link: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = Constants.BASE_URL + 'api/snippet/' + link;
      this.http
        .get<Snippet>(url)
        .toPromise()
        .then(
          (res: any) => {
            console.log(JSON.stringify(res));
            sessionStorage.setItem('code', res.code);
            sessionStorage.setItem('syntax', res.syntax);
            sessionStorage.setItem('link', link);
            sessionStorage.setItem('link_mode', link.length == 3 ? 'short' : 'long')
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  public getAvailableLanguages(): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = Constants.BASE_URL + 'api/syntaxes';
      console.log(url)
      this.http
        .get<string[]>(url)
        .toPromise()
        .then(
          (res: string[]) => {
            console.log(res)
            this.syntaxList = res;
            resolve(res);
            console.log('GET syntaxes succeed');
          },
          err => {
            reject(err);
          });
    });
  }
}



