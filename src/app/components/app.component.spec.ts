import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import  { IDisplayOrders }  from '../domain/ports/i-display-orders'
import { of } from 'rxjs';

describe('AppComponent', () => {

  let spyIDisplayOrders: jasmine.SpyObj<IDisplayOrders>
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent

  beforeEach(async () => {
    spyIDisplayOrders = jasmine.createSpyObj(
      'IDisplayOrders',
      ['askOrdersList'],
      {orders: []}
    )

    spyIDisplayOrders.askOrdersList.and.returnValue(of())


    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: 'IDisplayOrders', useValue:spyIDisplayOrders}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component =  fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {

   
    expect(component).toBeTruthy();
  });

  it(`should have as title 'delivery'`, () => {
 
    expect(component.title).toEqual('delivery');
  });

  it(`should call 'askOrdersList' method`, () => {
 
    expect(spyIDisplayOrders.askOrdersList).toHaveBeenCalledOnceWith();
  });




});
