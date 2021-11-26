import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorText } from './color-text.component';

describe('ColorText', () => {
  let component: ColorText;
  let fixture: ComponentFixture<ColorText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorText ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
