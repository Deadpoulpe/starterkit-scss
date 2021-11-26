import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Margin } from './margin.component';

describe('Margin', () => {
  let component: Margin;
  let fixture: ComponentFixture<Margin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Margin ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Margin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
