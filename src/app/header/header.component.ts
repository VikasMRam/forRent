import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  checkBoxControl = {
    pets_allowed: {
      DOG: false,
      CAT: false,
      ALL: false
    },
    property_type: {
      APT: false,
      CONDO: false,
      HOUSE: false,
      TOWNHOME: false
    },
    laundry: {
      IN_UNIT: false,
      HOOKUP: false,
      ON_SITE: false
    },
    interior: {
      airCond: false,
      furnished: false,
      balcony: false,
      utilities: false,
      cabel: false,
      fireplace: false,
      Garages: false,
      Pool: false,
      Diability: false,
      Fitness: false,
      Hardwood: false,
      Walk: false
    },
    speciality: {
      income: false,
      luxury: false,
      short: false
    }
  }

  @Output() filterData = new EventEmitter();

  ngOnInit() {
  }
  clear() {
    let keys  = Object.keys(this.checkBoxControl);
    keys.forEach(key=>
      {
        let subKeys = Object.keys(this.checkBoxControl[key]);
        subKeys.forEach(sk=>
          {
            this.checkBoxControl[key][sk]=false;
          })
      })
    this.filterData.emit({});
  }
  done() {

    let keys = Object.keys(this.checkBoxControl);
    let flag = false;
    keys.forEach(key => {
      let subKeys = Object.keys(this.checkBoxControl[key]);
      subKeys.forEach(sk => {
        if (this.checkBoxControl[key][sk]) {
          flag = true;
        }
      })
    })

    if (!flag)
      this.filterData.emit({});
    else
      this.filterData.emit(this.checkBoxControl);
  }
}
