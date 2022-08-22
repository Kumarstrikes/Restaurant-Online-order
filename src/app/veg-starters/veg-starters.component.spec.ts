import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegStartersComponent } from './veg-starters.component';

describe('VegStartersComponent', () => {
  let component: VegStartersComponent;
  let fixture: ComponentFixture<VegStartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegStartersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegStartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
