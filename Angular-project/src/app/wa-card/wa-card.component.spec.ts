import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaCardComponent } from './wa-card.component';

describe('WaCardComponent', () => {
  let component: WaCardComponent;
  let fixture: ComponentFixture<WaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
