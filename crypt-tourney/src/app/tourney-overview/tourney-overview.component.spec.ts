import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneyOverviewComponent } from './tourney-overview.component';

describe('TourneyOverviewComponent', () => {
  let component: TourneyOverviewComponent;
  let fixture: ComponentFixture<TourneyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
