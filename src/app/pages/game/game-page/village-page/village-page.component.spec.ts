import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagePageComponent } from './village-page.component';

describe('VillagePageComponent', () => {
  let component: VillagePageComponent;
  let fixture: ComponentFixture<VillagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
