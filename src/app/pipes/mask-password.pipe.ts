import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {
  transform(paas: string): string {
    if (!paas) return ''; // handle empty/null case

    return '*'.repeat(paas.length); // full masking
  }
}
