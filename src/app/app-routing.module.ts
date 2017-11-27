import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { OrdersComponent }      from './orders.component';
import { OrderDetailComponent }  from './order-detail.component';
import { OrderSearchComponent}  from './order-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: OrderDetailComponent },
  { path: 'orders',     component: OrdersComponent },
  { path: 'search',     component: OrderSearchComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
