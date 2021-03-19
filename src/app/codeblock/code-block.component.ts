import {Component, OnInit, ViewChild} from '@angular/core';
import { CodeBlockService } from './code-block.service';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
  providers: [CodeBlockService]
})
export class CodeBlockComponent implements OnInit {
  text: string;
  loading: Promise<any>;

  @ViewChild("codemirror") codemirror;

  constructor(private service: CodeBlockService) {
  }

  async ngOnInit() {
    setTimeout(() => {
      this.service.updateCode();
      this.text = this.service.getText();
    }, 1);
  }

  onTextChange(): void {
    this.loading = this.service.setText(this.text);
  }
}
