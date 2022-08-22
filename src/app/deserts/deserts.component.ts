import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-deserts',
  templateUrl: './deserts.component.html',
  styleUrls: ['./deserts.component.css'],
})
export class DesertsComponent implements OnInit {
  form = true;
  addd = false;
  desertData: any;
  DesertForm = new FormGroup({
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
    const data = this.DesertForm.value;
    this.http
      .post(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/deserts.json',
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
    this.menuService.getDesert().subscribe((res: any) => {
      this.desertData = res;
    });
  }
}
