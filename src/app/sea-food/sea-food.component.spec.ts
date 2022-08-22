import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaFoodComponent } from './sea-food.component';

describe('SeaFoodComponent', () => {
  let component: SeaFoodComponent;
  let fixture: ComponentFixture<SeaFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
