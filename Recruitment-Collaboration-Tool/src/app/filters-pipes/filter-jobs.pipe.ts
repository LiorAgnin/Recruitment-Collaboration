import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(skills: any, term: any): any {
        if (term === undefined) return skills;
        return skills.filter(function (name: any) {
            return name.toLowerCase().includes(term.toLowerCase());
        })
    }
}