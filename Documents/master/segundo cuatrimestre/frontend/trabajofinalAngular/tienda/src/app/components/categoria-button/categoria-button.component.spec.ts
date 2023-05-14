import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaButtonComponent } from './categoria-button.component';

describe('CategoriaButtonComponent', () => {
  let component: CategoriaButtonComponent;
  let fixture: ComponentFixture<CategoriaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
