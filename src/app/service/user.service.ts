import {Injectable} from '@angular/core';
import {IUser} from '../IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Dungxxx',
      gmail: 'dungtran9@gmail.com',
      address: 'Ha Nam'
    },
    {
      id: 2,
      name: 'ChienManh',
      gmail: 'chienmanh@gmail.com',
      address: 'Nam Dinh'
    },
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }
}
