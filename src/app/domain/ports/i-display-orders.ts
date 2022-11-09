
import { Observable } from 'rxjs';
import {Order} from '../models/Order'
export interface IDisplayOrders {

    orders: Order[];
    filter: string;


    askOrdersList(): Observable<void>;
    askOrdersFiltered(filter:string, allowEmpty?:boolean): Observable<Order[]>;


    
}


