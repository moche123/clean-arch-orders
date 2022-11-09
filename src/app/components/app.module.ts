import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderAdapterService } from '../adapters/order-adapter.service';
import OrdersDisplayer from '../domain/orders-displayer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    //! CORE

    {provide: 'IDisplayOrders', useClass:OrdersDisplayer},

    //! SERVICES
    {provide: 'IManageOrders', useClass: OrderAdapterService}

    // {provide: 'IManageOrders2', useClass: OrderAdapterService2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
