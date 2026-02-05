import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Order } from '../models/order.model';


@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: Order[] = [
    { id: 1, item: 'Apple iPhone 13', quantity: 2, price: 1998, date: 'Jan 25, 2022', status: 'Approved' },
    { id: 2, item: 'Xiaomi Redmi Note 10', quantity: 1, price: 799, date: 'Jan 28, 2022', status: 'Approved' },
    { id: 3, item: 'Samsung Galaxy S21', quantity: 3, price: 2097, date: 'Feb 02, 2022', status: 'Pending' },
    { id: 4, item: 'Macbook Pro 14', quantity: 1, price: 1999, date: 'Feb 05, 2022', status: 'Approved' },
    { id: 5, item: 'Apple Watch Series 7', quantity: 2, price: 798, date: 'Feb 08, 2022', status: 'Approved' },
    { id: 6, item: 'Sony WH-1000XM4', quantity: 1, price: 349, date: 'Feb 10, 2022', status: 'In Progress' },
    { id: 7, item: 'iPad Air 4', quantity: 1, price: 599, date: 'Feb 12, 2022', status: 'Pending' },
    { id: 8, item: 'Dell XPS 13', quantity: 1, price: 1299, date: 'Feb 15, 2022', status: 'Approved' },
    { id: 9, item: 'Nintendo Switch Oled', quantity: 1, price: 349, date: 'Feb 18, 2022', status: 'Approved' },
    { id: 10, item: 'Logitech MX Master 3', quantity: 1, price: 99, date: 'Feb 20, 2022', status: 'Approved' },
    { id: 11, item: 'Kindle Paperwhite', quantity: 1, price: 139, date: 'Feb 22, 2022', status: 'Pending' },
    { id: 12, item: 'GoPro Hero 10', quantity: 1, price: 399, date: 'Feb 25, 2022', status: 'Approved' },
    { id: 13, item: 'Google Pixel 6', quantity: 1, price: 599, date: 'Feb 28, 2022', status: 'Approved' },
    { id: 14, item: 'Fitbit Charge 5', quantity: 1, price: 149, date: 'Mar 02, 2022', status: 'In Progress' },
    { id: 15, item: 'Bose SoundLink', quantity: 1, price: 129, date: 'Mar 05, 2022', status: 'Approved' },
    { id: 16, item: 'Razer Blade 15', quantity: 1, price: 2499, date: 'Mar 08, 2022', status: 'Pending' },
    { id: 17, item: 'Canon EOS R5', quantity: 1, price: 3899, date: 'Mar 10, 2022', status: 'Approved' },
    { id: 18, item: 'DJI Mavic 3', quantity: 1, price: 2199, date: 'Mar 12, 2022', status: 'Approved' },
    { id: 19, item: 'Asus ROG Swift', quantity: 1, price: 799, date: 'Mar 15, 2022', status: 'In Progress' },
    { id: 20, item: 'Herman Miller Aeron', quantity: 1, price: 1499, date: 'Mar 18, 2022', status: 'Approved' }
  ];


  getOrders(): Observable<Order[]> {
    return of(this.orders).pipe(delay(1000));
  }
}