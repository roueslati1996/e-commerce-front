import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users = [
    {
      id: 123456,
      avatar: '',
      date: '21 June 2020, 12:42 AM',
      name: 'user name1',
    },
    {
      id: 12457889,
      avatar: '',
      date: '21 June 2020, 12:42 AM',
      name: 'user name2',
    },
    {
      id: 56784512,
      avatar: '',
      date: '21 June 2020, 12:42 AM',
      name: 'user name3',
    },
  ];
}
