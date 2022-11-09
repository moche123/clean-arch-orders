import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { IDisplayOrders } from '../domain/ports/i-display-orders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//! Single Res
//! Open/Close
//! Liskov subs
//! I: Interface segregation
//! D: Dependency inversion
export class AppComponent implements OnInit { //! INTERFACE SEG....
  title = 'delivery';

   constructor(
    @Inject('IDisplayOrders') public ordersDisplayer:IDisplayOrders
   ){}


   ngOnInit(): void {
     this.ordersDisplayer.askOrdersList().subscribe()

       console.log(this.ordersDisplayer.orders)
   }

}
