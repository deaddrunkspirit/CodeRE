import { Component, OnInit } from '@angular/core';
import { CodeBlockService } from './code-block.service';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
  providers: [CodeBlockService]
})
export class CodeBlockComponent implements OnInit {
  text: string;
  private textLoading: Promise<any>;
  private modeLoading: Promise<any>;
  private textTimeout?: number;
  private modeTimeout?: number;
  config = {
    lineNumbers: true,
    theme: 'darcula',
    mode: 'text/x-java',
    autofocus: true,
    lineWrapping: true,
  }

  constructor(private service: CodeBlockService) {
  }

  /**
   * Set timeout was used to wait for API GET snippet request to send,
   * so code will be set
   */
  ngOnInit() {
    setTimeout(() => {
      let newCode: string = sessionStorage.getItem('code');
      console.log('setup code: ' + newCode);
      this.service.setText(newCode);
      this.text = newCode;
    }, 200)
  }

  /**
   * Set timeout is used to wait if user will input some more data,
   * e.g. to prevent sending PATCH request on every keyboard click
   */
  onTextChange(): void {
    window.clearTimeout(this.textTimeout);
    this.textTimeout = window.setTimeout(() => {
      this.textLoading = this.service.updateText(this.text)
    }, 200);
  }

  onModeChange(): void {
    window.clearTimeout(this.modeTimeout);
    this.modeTimeout = window.setTimeout(() => {
      this.modeLoading = this.service.updateMode()
      this.config.mode = this.service.getMode();
    }, 100);
  }
}
