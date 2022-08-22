import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-non-veg-starters',
  templateUrl: './non-veg-starters.component.html',
  styleUrls: ['./non-veg-starters.component.css'],
})
export class NonVegStartersComponent implements OnInit {
  form = true;
  addd = false;
  nonVegData: any;
  nonVegForm = new FormGroup({
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
    const data = this.nonVegForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/nonVeg.json',
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
    this.menuService.getnonVegStarters().subscribe((res: any) => {
      this.nonVegData = res;
    });
  }
}
