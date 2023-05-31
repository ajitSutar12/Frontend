import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return value = -value ;
  // }
  transform(value: number): number {
    return value <= 0 ? Math.abs(value) : value;
  }

}
