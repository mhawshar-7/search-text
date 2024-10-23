import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
  standalone: true,
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    if (!searchText) {
      return value;
    }

    const regex = new RegExp(`(${searchText})`, 'gi');
    return value.replace(regex, '<span class="highlight">$1</span>');
  }
}
