import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sorted = [];
    if (Object.keys(args).length > 0) {
      let filterKeys = Object.keys(args);
      value = value.filter(item => {
        filterKeys.forEach(key => {
          let subkeys = Object.keys(args[key]);
          subkeys.forEach(skey => {
            if (args[key][skey]) {
              if (skey == "ALL") {
                if (item[key] && (item[key] != "NONE")) {

                  if (this.check(item, sorted))
                    sorted.push(item)
                  return;
                }
              }
              if(skey == "IN_UNIT" || skey == "ON_SITE")
              {
                skey  = skey.replace(/_/g,"-");
              }
              if (item[key] && (item[key].indexOf(skey) >= 0)) {
                if (this.check(item, sorted)){
                    sorted.push(item)
                }
                return;
              }
            }
          })
        })
        return false;
      })
      return sorted;
    }
    return value;
  }
  check(item, sorted) {
    let returnValue = true;
    sorted.forEach(i => {
      if (i.propertyId == item.propertyId) {
        returnValue = false;
      }
    })
    return returnValue;
  }
  

}
