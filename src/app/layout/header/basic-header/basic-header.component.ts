import {Component, OnInit} from '@angular/core';
import {LogoutService} from '../../../feature/auth/logout/logout.service';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent implements OnInit {

  constructor(private logoutService: LogoutService) {
  }

  ngOnInit() {
  }

  onLogoutClick() {
    this.logoutService.logoutUser();
  }

}
