import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatOptionModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CodeBlockComponent } from './codeblock/code-block.component';
import { LanguageTypeComponent } from './footer/languagetype/language-type.component';
import { LinkTypeComponent } from './footer/linktype/link-type.component';
import { CopyLinkComponent } from './footer/copylinkbutton/copy-link.component';
import { CopyCodeComponent } from './footer/copycodebutton/copy-code.component';
import { CodeBlockService } from './codeblock/code-block.service';
import { HttpService } from './http.service';
import { SnippetComponent } from './snippet/snippet.component';
import {CdkCopyToClipboard, ClipboardModule} from '@angular/cdk/clipboard';
import {MarkupService} from './markup.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CodeBlockComponent,
    LanguageTypeComponent,
    LinkTypeComponent,
    CopyLinkComponent,
    CopyCodeComponent,
    SnippetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CodemirrorModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [HttpService, CodeBlockService, MarkupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
