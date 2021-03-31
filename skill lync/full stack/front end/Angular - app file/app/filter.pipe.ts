import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(booksArr: any, searchTerm: any) {
    if (!searchTerm) {
      return booksArr;
    }
    return booksArr.filter(function (val: any) {
      return val.name.includes(searchTerm);
    });
   
  }

}
