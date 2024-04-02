import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: string, searchTerm: string): string {
    if (!searchTerm) {
      return value;
    }
    const reText = new RegExp(searchTerm, 'gi');
    return value.replace(reText, match => `<mark class='highlighted'>${match}</mark>`);
  }

}
