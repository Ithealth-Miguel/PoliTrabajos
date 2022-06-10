import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaZComponent } from './prueba-z.component';

describe('PruebaZComponent', () => {
  let component: PruebaZComponent;
  let fixture: ComponentFixture<PruebaZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
