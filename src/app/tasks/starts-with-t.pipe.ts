import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithT'
})
export class StartsWithTPipe implements PipeTransform {

  transform(value: any[], term: string ): any[] {
    return value.filter((x:any) => x.name.toLowerCase().startsWith(term.toLowerCase()));
  }
}
