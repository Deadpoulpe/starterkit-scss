import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleText } from './style-text.component';

describe('StyleText', () => {
  let component: StyleText;
  let fixture: ComponentFixture<StyleText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleText ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
