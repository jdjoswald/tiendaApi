import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarProductsComponent } from './list-car-products.component';

describe('ListCarProductsComponent', () => {
  let component: ListCarProductsComponent;
  let fixture: ComponentFixture<ListCarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
