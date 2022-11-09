import { Observable } from "rxjs";
import { Order } from "../models/Order";


export interface IManageOrders {
    getOrders(): Observable<Order[]>;
    searchOrders(name:string): Observable<Order[]>;
    getOrder(id:number): Observable<Order>; 
    addOrder(order:Order): string;
    updateOrder(order:Order,id:number): string;
    cancelOrder(id:number): string;
}



//! import IManageOrders from 'asdasda' ----> export default
//! import  { IManageOrders } from 'asdasda' ----> export interface ....