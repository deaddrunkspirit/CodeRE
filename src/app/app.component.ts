import {Component, OnInit} from '@angular/core';
import { Constants } from './common/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = Constants.TITLE;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  // Если поле пустое и нет ссылки на этот сниппет
}
