import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SnippetComponent} from './snippet/snippet.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetComponent,
  },
  {
    path: ':link',
    component: SnippetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
