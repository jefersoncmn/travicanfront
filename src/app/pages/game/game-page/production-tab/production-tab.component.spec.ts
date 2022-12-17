import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTabComponent } from './production-tab.component';

describe('ProductionTabComponent', () => {
  let component: ProductionTabComponent;
  let fixture: ComponentFixture<ProductionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
