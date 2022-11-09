import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators"
import { Order } from "./models/Order";
import  { IDisplayOrders } from "./ports/i-display-orders";
import { IManageOrders} from "./ports/i-manage-orders";



@Injectable()
export default class OrdersDisplayer implements IDisplayOrders {

    orders: Order[] = [];
    filter: string = '';


    constructor(

         @Inject('IManageOrders') private _ordersManager: IManageOrders
    ){

    }
    askOrdersList(): Observable<void> {
        return this._ordersManager.getOrders().pipe(
            // tap( console.log ),
            map( orders => { this.orders = orders } )
        );
    }

    askOrdersFiltered(filter: string, allowEmpty?:boolean): Observable<Order[]> {
        return this._ordersManager.searchOrders(filter);
    }


}
