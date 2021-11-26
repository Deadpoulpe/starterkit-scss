import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Position } from './position.component';

describe('Position', () => {
  let component: Position;
  let fixture: ComponentFixture<Position>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Position ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Position);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
