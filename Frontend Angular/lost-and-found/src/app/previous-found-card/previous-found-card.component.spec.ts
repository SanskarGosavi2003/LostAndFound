import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFoundCardComponent } from './previous-found-card.component';

describe('PreviousFoundCardComponent', () => {
  let component: PreviousFoundCardComponent;
  let fixture: ComponentFixture<PreviousFoundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousFoundCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousFoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
