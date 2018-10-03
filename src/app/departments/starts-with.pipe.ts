import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

 transform(value: any[], term: string ): any[] {
    return value.filter((x:any) => x.DepName.toLowerCase().startsWith(term.toLowerCase()));
  }

}
