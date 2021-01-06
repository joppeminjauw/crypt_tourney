import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBorderComponent } from './top-border.component';

describe('TopBorderComponent', () => {
  let component: TopBorderComponent;
  let fixture: ComponentFixture<TopBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
