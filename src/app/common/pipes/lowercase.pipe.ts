import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lowercase'
})
export class LowercasePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toLowerCase();
  }

}
