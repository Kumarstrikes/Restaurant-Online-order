import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExploreMenuService {
  constructor(private http: HttpClient) {}

  getnonVegStarters() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/nonVeg.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getVegStarters() {
    return this.http
      .get(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/vegStarters.json'
      )
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getNoodles() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/noodles.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getMainCourse() {
    return this.http
      .get(
        'https://restaurant-c4f56-default-rtdb.firebaseio.com/mainCourse.json'
      )
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getSoups() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/soups.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getSalad() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/salad.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getSeaFood() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/seaFood.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getDesert() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/deserts.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
  getOrders() {
    return this.http
      .get('https://restaurant-c4f56-default-rtdb.firebaseio.com/orders.json')
      .pipe(
        map((resData: any) => {
          const projectArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              projectArray.push({ ...resData[key], id: key });
            }
          }
          return projectArray;
        })
      );
  }
}
