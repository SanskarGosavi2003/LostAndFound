import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLostCardComponent } from './previous-lost-card.component';

describe('PreviousLostCardComponent', () => {
  let component: PreviousLostCardComponent;
  let fixture: ComponentFixture<PreviousLostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousLostCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousLostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
