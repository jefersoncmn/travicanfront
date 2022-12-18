import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyTabComponent } from './army-tab.component';

describe('ArmyTabComponent', () => {
  let component: ArmyTabComponent;
  let fixture: ComponentFixture<ArmyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmyTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
