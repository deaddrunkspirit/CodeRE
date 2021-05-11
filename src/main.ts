import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/toml/toml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/commonlisp/commonlisp';
import 'codemirror/mode/dockerfile/dockerfile';
import 'codemirror/mode/erlang/erlang';
import 'codemirror/mode/go/go';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/pascal/pascal';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/php/php';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/protobuf/protobuf';
import 'codemirror/mode/python/python';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/stex/stex';
import 'codemirror/mode/toml/toml';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/we'; webassembly
import 'codemirror/mode/yaml/yaml';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
  enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
