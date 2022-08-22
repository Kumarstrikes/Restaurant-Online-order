import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-veg-starters',
  templateUrl: './veg-starters.component.html',
  styleUrls: ['./veg-starters.component.css'],
})
export class VegStartersComponent implements OnInit {
  form = true;
  addd = false;
  VegData: any;
  VegForm = new FormGroup({
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
    const data = this.VegForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/vegStarters.json',
        data
      )
      .subscribe((res) => {
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
    this.menuService.getVegStarters().subscribe((res: any) => {
      this.VegData = res;
    });
  }
}
