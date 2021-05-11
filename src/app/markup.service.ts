import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkupService {
  public setMarkup(language: string): void {
    let markup: string = 'text/x-java';
    if (language === 'C') {
      markup = 'text/x-csrc';
    } else if (language === 'C++') {
      markup = 'text/x-c++src';
    } else if (language === 'C#') {
      markup = 'text/x-csharp'
    } else if (language === 'CSS') {
      markup = 'text/css'
    } else if (language === 'Common Lisp') {
      markup = 'text/x-common-lisp'
    } else if (language === 'Dockerfile') {
      markup = 'text/x-dockerfile'
    } else if (language === 'Erlang') {
      markup = 'text/x-erlang'
    } else if (language === 'GO') {
      markup = 'text/x-go'
    } else if (language === 'Groovy') {
      markup = 'text/x-groovy'
    } else if (language === 'Haskell') {
      markup = 'text/x-haskell'
    } else if (language === 'HTML') {
      markup = 'text/html'
    } else if (language === 'Java') {
      markup = 'text/x-java'
    } else if (language === 'JavaScript') {
      markup = 'text/javascript'
    } else if (language === 'JSON') {
      markup = 'application/x-json'
    }  else if (language === 'TypeScript') {
      markup = 'text/typescript'
    } else if (language === 'Kotlin') {
      markup = 'text/x-kotlin'
    } else if (language === 'Lua') {
      markup = 'text/x-lua'
    } else if (language === 'Markdown') {
      markup = 'text/x-markdown'
    } else if (language === 'Objective C') {
      markup = 'text/x-objectivec'
    } else if (language === 'Pascal') {
      markup = 'text/x-pascal'
    } else if (language === 'Perl') {
      markup = 'text/x-perl'
    } else if (language === 'PHP') {
      markup = 'text/x-php'
    } else if (language === 'PowerShell') {
      markup = 'text/x-powershell'
    } else if (language === 'ProtoBuf') {
      markup = 'text/x-protobuf'
    } else if (language === 'Python') {
      markup = 'text/x-python'
    } else if (language === 'R') {
      markup = 'text/x-rsrc'
    } else if (language === 'Ruby') {
      markup = 'text/x-ruby'
    } else if (language === 'reStructuredText') {
      markup = 'text/x-rst'
    } else if (language === 'Rust') {
      markup = 'text/x-rustsrc'
    } else if (language === 'Sass') {
      markup = 'text/sass'
    } else if (language === 'Scala') {
      markup = 'text/x-scala'
    } else if (language === 'SCSS') {
      markup = 'text/x-scss'
    } else if (language === 'Shell') {
      markup = 'text/x-sh'
    } else if (language === 'Swift') {
      markup = 'text/x-swift'
    } else if (language === 'SQL') {
      markup = 'text/x-sql'
    } else if (language === 'LaTeX') {
      markup = 'text/x-stex'
    } else if (language === 'TOML') {
      markup = 'text/x-toml'
    } else if (language === 'VB.NET') {
      markup = 'text/x-vb'
    } else if (language === 'Vue.js app') {
      markup = 'text/x-vue'
    } else if (language === 'XML') {
      markup = 'application/xml'
    } else if (language === 'WebAssembly Text Format') {
      markup = 'text/webassembly'
    } else if (language === 'YAML') {
      markup = 'text/x-yaml'
    } else {
      console.log('Invalid markup language');
    }
    sessionStorage.setItem('markup', markup)
    console.log('new markup scheme applied');
  }
}
