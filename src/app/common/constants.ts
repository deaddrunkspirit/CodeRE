import {SnippetModel} from '../models/snippet.model';

export class Constants {
  public static TITLE: string = 'Code.RE';
  public static BASE_URL: string = 'http://127.0.0.1:8000/';
  public static TOKEN: string = '49384fd8-4d1f-4ab9-8edd-9c8660e68638';
  public static LONG_PATTERN: RegExp = /\/\w\w\w\w\w\w/;
  public static SHORT_PATTERN: RegExp = /\/\w\w\w/;
  public static SNIPPET: SnippetModel;
}
