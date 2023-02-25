import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLostComponent } from './previous-lost.component';

describe('PreviousLostComponent', () => {
  let component: PreviousLostComponent;
  let fixture: ComponentFixture<PreviousLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousLostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
