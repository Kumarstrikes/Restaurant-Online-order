import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css'],
})
export class SaladsComponent implements OnInit {
  addd = false;
  form = true;
  salad: any;
  saladForm = new FormGroup({
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
    const data = this.saladForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/salad.json',
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
    this.menuService.getSalad().subscribe((res: any) => {
      this.salad = res;
    });
  }
}
