import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'firstNameSearchPipe' })
export class firstNameSearchPipe implements PipeTransform {
    transform(values: Array<any>, ...args: any[]) {
        if(Array.isArray(values)) {


     return values.filter((value) => {
         if(!args[0].searchtext) {
             return value
         // tslint:disable-next-line:max-line-length
         } else if( typeof args[0].searchtext === 'string' && (value.first_name + '').toLowerCase().includes((args[0].searchtext + '').toLowerCase())) {
            return value;
         }
     });
    } else {
      return values;
    }
    }


}
