import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-sea-food',
  templateUrl: './sea-food.component.html',
  styleUrls: ['./sea-food.component.css'],
})
export class SeaFoodComponent implements OnInit {
  addd = false;
  form = true;
  seaFood: any;
  seaFoodForm = new FormGroup({
    image: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
  });
  constructor(
    private http: HttpClient,
    private menuService: ExploreMenuService
  ) {}
  save() {
    const data = this.seaFoodForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/seaFood.json',
        data
      )
      .subscribe((res) => {
        console.log(res);
        this.ngOnInit();
      });
  }
  add(add: any) {
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/orders.json',
        add
      )
      .subscribe((res) => {
        console.log(res);
        this.addd = true;
      });
  }
  async ngOnInit(): Promise<any> {
    this.menuService.getSeaFood().subscribe((res: any) => {
      this.seaFood = res;
    });
  }
}
