import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStructure } from './other-structure.component';

describe('OtherStructure', () => {
  let component: OtherStructure;
  let fixture: ComponentFixture<OtherStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherStructure ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
