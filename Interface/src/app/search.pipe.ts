import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform{
 transform(gosts, value) {
 return gosts.filter(gost => {
     return gost.TYPE.includes(value)
 })
 }
}
