import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgComponent } from './prg.component';

describe('PrgComponent', () => {
  let component: PrgComponent;
  let fixture: ComponentFixture<PrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
