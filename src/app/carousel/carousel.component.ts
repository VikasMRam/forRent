import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,OnChanges {

  @Input() images:any=[];
   uniqueId : any = '';
  constructor() { }
  ngOnChanges()
  {

  }

  ngOnInit() {
    this.uniqueId = Math.random() + "";
  }

}
