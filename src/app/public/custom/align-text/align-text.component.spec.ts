import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignText } from './align-text.component';

describe('AlignText', () => {
  let component: AlignText;
  let fixture: ComponentFixture<AlignText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignText ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
