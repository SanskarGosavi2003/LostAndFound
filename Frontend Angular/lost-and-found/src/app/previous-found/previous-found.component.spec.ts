import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFoundComponent } from './previous-found.component';

describe('PreviousFoundComponent', () => {
  let component: PreviousFoundComponent;
  let fixture: ComponentFixture<PreviousFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
