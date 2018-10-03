import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithE'
})
export class StartsWithEPipe implements PipeTransform {

  transform(value: any[], term: string ): any[] {
    return value.filter((x:any) => x.FirstName.toLowerCase().startsWith(term.toLowerCase()));
  }

}
