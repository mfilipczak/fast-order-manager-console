import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";


import { AppComponent }  from './app.component';
import { DashboardComponent } from "./dashboard.component";
import { OrdersComponent } from "./orders.component";
import { OrderDetailComponent } from './order-detail.component';
import { OrderService } from "./order.service";
import {OrderSearchComponent} from "./order-search.component";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { OrderListComponent } from './order-list/order-list.component';
import {LoadingService} from './loading.service';
import { LoadingModule } from 'ngx-loading';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
  	BrowserModule,
	  FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule ,
    NgxPaginationModule,
    ChartsModule,
    LoadingModule,
    DateTimePickerModule,
    BrowserAnimationsModule
  ],
  declarations: [
  	AppComponent,
    DashboardComponent,
	OrderDetailComponent,
    OrdersComponent,
    OrderSearchComponent,
    OrderListComponent
  ],
  providers: [ OrderService, LoadingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
