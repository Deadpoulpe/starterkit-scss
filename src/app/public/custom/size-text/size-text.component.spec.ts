import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeText } from './size-text.component';

describe('SizeText', () => {
  let component: SizeText;
  let fixture: ComponentFixture<SizeText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeText ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
