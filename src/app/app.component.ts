import {Component, enableProdMode, OnInit} from '@angular/core';
import { Constants } from './common/constants';
import { Router } from '@angular/router';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = Constants.TITLE;

  constructor() {
  }

  ngOnInit(): void {
    // enableProdMode();
  }
}
