import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import  { IManageOrders } from '../domain/ports/i-manage-orders';

import { Order } from '../domain/models/Order';
import { catchError, delay } from 'rxjs/operators'
import { OrderOperationError } from '../domain/errors/order-operation-error';

/*
id: number;
    name: string;
    client: Person;
    deliveryman: Person;
    date: string;
    price: number;
    product: Product[];

*/
@Injectable({ providedIn: 'root' })
export class OrderAdapterService implements IManageOrders {

  ordersMock:Order[] = [
    {
      id: 1,
      name: 'Order 1',
      client: {id: 1, name:'Cesar'},
      deliveryman:  {id: 2, name:'Gustavo'},
      date: '27/10/2022',
      price: 25.50,
      products: [
        {id: 1, name:'Cereal'},
        {id: 2, name:'Bread'}

      ],
      state:true
    },
    {
      id: 2,
      name: 'Order 2',
      client: {id: 1, name:'Julio'},
      deliveryman:  {id: 2, name:'Rafael'},
      date: '26/10/2022',
      price: 100.50,
      products: [
        {id: 3, name:'Rice'},
        {id: 4, name:'Sauce'}

      ],
      state:true
    }
  
  ]


  constructor() { }
  getOrders(): Observable<Order[]> {
    return of(this.ordersMock).pipe(
      catchError(this.handleHttpError()),
      delay(1000)
    )
  }
  searchOrders(name: string): Observable<Order[]> {
    return of(  this.ordersMock.filter( value => value.name.includes(name) )   )
  }
  getOrder(id: number): Observable<Order> {
    return of(  this.ordersMock.find( value => value.id == id ) ||  this.ordersMock[0]  )
  }
  addOrder(order: Order): string {

    let newOrder = order
    try{

      this.ordersMock.push(newOrder)
      return 'ok'
    }catch{
      return 'error'
    }
   
  }
  updateOrder(order: Order,id:number): string {
    let updatedOrder = order
    try{

      let index = this.ordersMock.findIndex(el => el.id == id)

      this.ordersMock[index] = updatedOrder

      return 'ok'
    }catch{
      return 'error'
    }
  }
  cancelOrder(id: number): string {
    try{


       this.ordersMock =  this.ordersMock.filter( el => el.id != id)

      return 'ok'
    }catch{
      return 'error'
    }
  }

  private handleHttpError(){
    return (error:any): Observable<any> => {
      throw new OrderOperationError(error.body.error)
    }
  }

}
