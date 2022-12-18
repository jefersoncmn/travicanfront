import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTabComponent } from './ranking-tab.component';

describe('RankingTabComponent', () => {
  let component: RankingTabComponent;
  let fixture: ComponentFixture<RankingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
