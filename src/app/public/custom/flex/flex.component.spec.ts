import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flex } from './flex.component';

describe('Flex', () => {
  let component: Flex;
  let fixture: ComponentFixture<Flex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flex ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
