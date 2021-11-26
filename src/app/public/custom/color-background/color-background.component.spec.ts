import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBackground } from './color-background.component';

describe('ColorBackground', () => {
  let component: ColorBackground;
  let fixture: ComponentFixture<ColorBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorBackground ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
