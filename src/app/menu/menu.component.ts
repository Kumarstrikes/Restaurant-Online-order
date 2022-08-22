import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExploreMenuService } from 'src/services/exploreMenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  nonVegData: any;
  vegData: any;
  mainCourse: any;
  noodles: any;
  deserts: any;
  salad: any;
  soups: any;
  seaFood: any;
  addd = false;
  constructor(
    private menuService: ExploreMenuService,
    private http: HttpClient
  ) {}
  add(add: any) {
    console.log(add);
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
    this.menuService.getVegStarters().subscribe((res: any) => {
      this.vegData = res;
    });
    this.menuService.getMainCourse().subscribe((res: any) => {
      this.mainCourse = res;
    });
    this.menuService.getNoodles().subscribe((res: any) => {
      this.noodles = res;
    });
    this.menuService.getDesert().subscribe((res: any) => {
      this.deserts = res;
    });
    this.menuService.getSeaFood().subscribe((res: any) => {
      this.seaFood = res;
    });
    this.menuService.getSalad().subscribe((res: any) => {
      this.salad = res;
    });
    this.menuService.getSoups().subscribe((res: any) => {
      this.soups = res;
    });
  }
}
