import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padding } from './padding.component';

describe('Padding', () => {
  let component: Padding;
  let fixture: ComponentFixture<Padding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Padding ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Padding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
