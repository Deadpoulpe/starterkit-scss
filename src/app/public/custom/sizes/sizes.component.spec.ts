import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sizes } from './sizes.component';

describe('Sizes', () => {
  let component: Sizes;
  let fixture: ComponentFixture<Sizes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sizes ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sizes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
