import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegStartersComponent } from './non-veg-starters.component';

describe('NonVegStartersComponent', () => {
  let component: NonVegStartersComponent;
  let fixture: ComponentFixture<NonVegStartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegStartersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonVegStartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
