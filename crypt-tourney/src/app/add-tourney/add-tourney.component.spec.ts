import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTourneyComponent } from './add-tourney.component';

describe('AddTourneyComponent', () => {
  let component: AddTourneyComponent;
  let fixture: ComponentFixture<AddTourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
