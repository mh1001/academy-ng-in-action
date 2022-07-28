import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'age'
  })
export class AgePipe implements PipeTransform {
    transform(birthDate?: Date): string {
        if (!birthDate) { return ''; }

        return (new Date().getFullYear() - birthDate.getFullYear()).toString();
    }
}