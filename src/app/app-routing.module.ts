import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesertsComponent } from './deserts/deserts.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { MenuComponent } from './menu/menu.component';
import { NonVegStartersComponent } from './non-veg-starters/non-veg-starters.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SaladsComponent } from './salads/salads.component';
import { SeaFoodComponent } from './sea-food/sea-food.component';
import { SoupsComponent } from './soups/soups.component';
import { VegStartersComponent } from './veg-starters/veg-starters.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Restaurant' },
  { path: 'Restaurant', component: RestaurantComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'non-veg-starters', component: NonVegStartersComponent },
  { path: 'veg-starters', component: VegStartersComponent },
  { path: 'salads', component: SaladsComponent },
  { path: 'noodles', component: NoodlesComponent },
  { path: 'soups', component: SoupsComponent },
  { path: 'deserts', component: DesertsComponent },
  { path: 'main-course', component: MainCourseComponent },
  { path: 'seaFood', component: SeaFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
