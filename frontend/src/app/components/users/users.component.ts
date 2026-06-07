import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  token: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.userService.getUsers(this.token).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => {
        console.log('Error fetching users');
      }
    });
  }
}
