import { TestBed } from '@angular/core/testing';

import { OrderAdapterService } from './order-adapter.service';

describe('OrderAdapterService', () => {
  let service: OrderAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
