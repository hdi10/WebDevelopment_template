import { TestBed } from '@angular/core/testing';

import { ProductCRUDServiceService } from './product-crudservice.service';

describe('ProductCRUDServiceService', () => {
  let service: ProductCRUDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCRUDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
