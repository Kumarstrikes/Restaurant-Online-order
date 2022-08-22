import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NonVegStartersComponent } from './non-veg-starters/non-veg-starters.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VegStartersComponent } from './veg-starters/veg-starters.component';
import { SoupsComponent } from './soups/soups.component';
import { SeaFoodComponent } from './sea-food/sea-food.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { SaladsComponent } from './salads/salads.component';
import { DesertsComponent } from './deserts/deserts.component';
import { NoodlesComponent } from './noodles/noodles.component';

@NgModule({
  declarations: [
    AppComponent,
    NonVegStartersComponent,
    MenuComponent,
    RestaurantComponent,
    VegStartersComponent,
    SoupsComponent,
    SeaFoodComponent,
    MainCourseComponent,
    SaladsComponent,
    DesertsComponent,
    NoodlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
