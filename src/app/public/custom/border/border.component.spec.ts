import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Border } from './border.component';

describe('Border', () => {
  let component: Border;
  let fixture: ComponentFixture<Border>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Border ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Border);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
