import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {
  transform(paas: string): string {
    if (!paas) return ''; // handle empty/null case

    const last2 = paas.slice(-2);
    const size = paas.length - 2;

    let maskedPassword = '';
    for (let i = 0; i < size; i++) {
      maskedPassword += '*';
    }

    maskedPassword += last2;
    return maskedPassword;
  }
}
