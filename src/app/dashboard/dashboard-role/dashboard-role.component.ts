import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-role',
  templateUrl: './dashboard-role.component.html',
  styleUrls: ['./dashboard-role.component.scss']
})
export class DashboardRoleComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  onNewRoleHandler() : void {
    this.router.navigate(['/role/new']);
  }

}
