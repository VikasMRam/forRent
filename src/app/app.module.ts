import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from "./data.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    CarouselComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
