import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appart';
  data :any = [];
 
  filterObj : any = {};
  constructor(private dataService:DataService)
  {
 dataService.getData().subscribe(data1=>
  {
   this.data = data1["data"];
 
  //  console.log(this.data)
  });
  }

  filterData1($event)
  {

    // console.log("received in fliterdata")
    this.filterObj = $event;
    
  }
}
