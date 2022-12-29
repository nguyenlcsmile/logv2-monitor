import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalsComponent } from './functionals.component';

describe('FunctionalsComponent', () => {
  let component: FunctionalsComponent;
  let fixture: ComponentFixture<FunctionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
