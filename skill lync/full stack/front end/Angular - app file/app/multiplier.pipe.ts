import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: any, arg:any) {
    return 'Rs. '+ (value*arg);
  }

}
