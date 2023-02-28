import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestssearchComponent } from './requestssearch.component';

describe('RequestssearchComponent', () => {
  let component: RequestssearchComponent;
  let fixture: ComponentFixture<RequestssearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestssearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
