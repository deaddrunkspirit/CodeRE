import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnippetModel } from './models/snippet.model';
import { Constants } from './common/constants';
import { Snippet } from './models/snippet';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Injectable()
export class HttpService implements OnInit {
  syntaxList: string[];
  link: string;
  token: string;
  loading: boolean;
  snippet: SnippetModel;

  constructor(private http: HttpClient, private location: Location){
    this.syntaxList = [];
  }

  ngOnInit(): void {
  }

  public postSnippet(snippet: SnippetModel): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const body = {
        code: snippet.code,
        syntax: snippet.syntax,
        link_mode: snippet.link_mode?.toLowerCase()
      };
      const url = Constants.BASE_URL + 'api/snippet';
      console.log(body)
      console.log('POST send')
      this.http.post(url, body)
        .toPromise()
        .then(
          (res) => {
            // TODO correct snippet creation
            let code: string = res['snippet']['code'];
            let syntax: string = res['snippet']['syntax'];
            this.link = res['snippet']['link'];
            let snippet: SnippetModel = new SnippetModel(code, syntax, this.link);
            Constants.TOKEN = res['token'];
            Constants.SNIPPET = snippet;
            this.location.go(this.link);
            resolve(res);
          },
          err => {
            reject(err);
          });
    });
    console.log('POST snippet succeed')
    return promise;
  }

  public updateSnippet(token: string, text: string, syntax: string): Promise<any> {
    syntax = syntax !== null ? syntax.toLowerCase() : null;
    const promise = new Promise((resolve, reject) => {
      const body = {
        code: text,
        syntax: syntax,
        token: token,
      };
      console.log(body);
      const url = Constants.BASE_URL + 'api/snippet';
      this.http
        .patch(url, body, {responseType: 'text'})
        .toPromise()
        .then(
          (res) => {
            resolve(res);
          },
          err => {
            reject(err);
          });
    });
    console.log("PATCH snippet succeed");
    return promise;
  }

  public updateLinkMode(link: string, link_mode: string): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      const url = Constants.BASE_URL + link + '/' + link_mode.toLowerCase();
      //TODO actual request
    })
    console.log('PATCH snippet link mode succeed')
    return promise;
  }

  public getSnippet(link: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const url = Constants.BASE_URL + 'api/snippet/' + link;
      this.http
        .get<Snippet>(url)
        .toPromise()
        .then(
          (res: Snippet) => {
            console.log(res)
            this.snippet =  new SnippetModel(res.code, res.syntax, link);//new SnippetModel(res.code, res.syntax, link);
            resolve(res);
          },
          err => {
            reject(err);
          }
        ); // Handle 404 error
    });
    console.log('GET snippet succeed');
    return promise;
  }

  public getAvailableLanguages(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
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
          },
          err => {
            reject(err);
          });
    });
    console.log('GET syntaxes succeed');
    return promise;
  }
}



