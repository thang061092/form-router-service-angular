import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {IUser} from '../../IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'List User';
  userList: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userList = this.userService.getAll();
  }

}
