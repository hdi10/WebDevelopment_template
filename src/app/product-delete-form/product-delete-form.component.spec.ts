import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteFormComponent } from './product-delete-form.component';

describe('ProductDeleteFormComponent', () => {
  let component: ProductDeleteFormComponent;
  let fixture: ComponentFixture<ProductDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
