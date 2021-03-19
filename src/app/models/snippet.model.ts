export class SnippetModel {
  constructor(code: string, syntax: string, link: string) {
    this.code = code;
    this.syntax = syntax;
    this.link = link;
    this.link_mode = link.length === 3 ? 'short' : link.length === 6 ? 'long' : null;
    // TODO throw new error if linkmode is null
  }

  code: string;
  syntax: string;
  link_mode: string;
  link: string;
}
