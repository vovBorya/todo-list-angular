import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatButtonLabel'
})
export class FormatButtonLabelPipe implements PipeTransform {
  transform(value: string): string {
    return `<<${value}>>`;
  }
}
