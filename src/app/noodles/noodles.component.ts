import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css'],
})
export class NoodlesComponent implements OnInit {
  form = true;
  addd = false;
  noodles: any;
  noodlesForm = new FormGroup({
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
    const data = this.noodlesForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/noodles.json',
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
    this.menuService.getNoodles().subscribe((res: any) => {
      this.noodles = res;
    });
  }
}
