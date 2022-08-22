import { Component, OnInit } from '@angular/core';
import { ExploreMenuService } from 'src/services/exploreMenu.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  orders: any;
  navToggle = faBars;
  constructor(
    private menuSerivce: ExploreMenuService,
    private http: HttpClient
  ) {}
  addEvent = false;
  event() {
    this.addEvent = true;
  }
  async ngOnInit(): Promise<any> {
    this.menuSerivce.getOrders().subscribe((res: any) => {
      this.orders = res;
    });
  }
  remove(data: any) {
    console.log(data);
    this.http
      .delete(
        `https://restaurant-c4f56-default-rtdb.firebaseio.com/orders/${data.id}.json`
      )
      .subscribe((res) => {
        console.log('deleted');
        this.ngOnInit();
      });
  }
}
