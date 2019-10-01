import { Component, OnInit, Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit , OnChanges{

  constructor() { }
  @Input() data : any;

  ngOnInit() {
  }
  ngOnChanges()
  {
    
  }
  getDateDiff(milliseconds)
  {
let updatedDate  = new Date(milliseconds);
let currentdate  = new Date();
let diffc = updatedDate.getTime() - currentdate.getTime();
let days = Math.round(Math.abs(diffc/(1000*60*60*24)));
return days;
  }

}
